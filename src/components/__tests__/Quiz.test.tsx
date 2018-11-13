import { shallow } from 'enzyme';

import React from 'react';

import { QuestionData } from '../../data/QuizData';
import { Question } from '../Question';
import { Quiz } from '../Quiz';

const data = {
    id: "quiz-id",
    title: "Quiz title",
    questions: [],
};

const anyProps = {
    data
};

describe('Quiz', () => {

    const createQuestions = (count: number): QuestionData[] => {
        const questions = [];
        const questionProps = {
            options: [],
            text: "someText",
        };
        for (let i = 0; i < count; i++) {
            questions.push(questionProps);
        }

        return questions;
    };

    const mockQuestions = createQuestions(20);

    it('should render', () => {
        const wrapper = shallow(<Quiz {...anyProps} />);
        expect(wrapper).not.toBe(null);
    });

    [2, 10, 50].forEach(numberOfQuestions => {
        it(`should render the same number of questions as given - ${numberOfQuestions}`, () => {
            const questions = createQuestions(numberOfQuestions);
            const props = {
                data: {
                    ...data,
                    questions,
                }
            };
            const wrapper = shallow(<Quiz {...props} />);
            expect(wrapper.find(Question).length).toBe(numberOfQuestions);
        });
    });

    [true, false].forEach(isAnswered => {
        it(`should send ${isAnswered} to all questions when isAnswered is ${isAnswered}`, () => {
            const props = {
                data: {
                    ...data,
                    mockQuestions,
                }
            };
            const wrapper = shallow(<Quiz {...props} />);
      
          wrapper.setState({isAnswered});
          
          const options = wrapper.find(Question);
          const notAnsweredOptions = wrapper.find(Question).filterWhere(o => o.props().isAnswered === isAnswered);
          expect(notAnsweredOptions.length).toEqual(options.length);
        });
      });
});