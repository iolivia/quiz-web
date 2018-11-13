import { shallow } from 'enzyme';

import React from 'react';

import { Question, QuestionProps } from '../Question';
import { Quiz } from '../Quiz';

const anyProps = {
    questions: [],
    title: "Quiz title",
}

describe('Quiz', () => {

    const createQuestions = (count: number): QuestionProps[] => {
        const questions = [];
        const questionProps = {
            isAnswered: false,
            options: [],
            text: "someText",
            onOptionChanged: jest.fn(),
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
            const wrapper = shallow(<Quiz {...anyProps} questions={questions} />);
            expect(wrapper.find(Question).length).toBe(numberOfQuestions);
        });
    });

    [true, false].forEach(isAnswered => {
        it(`should send ${isAnswered} to all questions when isAnswered is ${isAnswered}`, () => {
          const wrapper = shallow(<Quiz {...anyProps} questions={mockQuestions} />);
      
          wrapper.setState({isAnswered});
          
          const options = wrapper.find(Question);
          const notAnsweredOptions = wrapper.find(Question).filterWhere(o => o.props().isAnswered === isAnswered);
          expect(notAnsweredOptions.length).toEqual(options.length);
        });
      });
});