import { shallow } from 'enzyme';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Question } from '../Question';
import { QuestionOption, QuestionOptionProps } from '../QuestionOption';

const anyProps = {
  isAnswered: false,
  onOptionChanged: jest.fn(),
  options: [],
  text: "someText",
};

describe('Question', () => {

  const createOptions = (count: number): QuestionOptionProps[] => {
    const options = [];
    const optionProps = {
      isAnswered: false,
      isCorrect: true,
      isSelected: false,
      onToggleSelected: jest.fn(),
      text: "someText",
    };
    for (let i = 0; i < count; i++) {
      options.push(optionProps);
    }

    return options;
  };

  const mockOptions = createOptions(20);

  it('should render', () => {
    const wrapper = shallow(<Question {...anyProps} />);
    expect(wrapper).not.toBe(null);
  });

  [2, 10, 50].forEach(numberOfOptions => {
    it(`should render the same number of options as given - ${numberOfOptions}`, () => {
      const options = createOptions(numberOfOptions);
      const wrapper = shallow(<Question {...anyProps} options={options} />);
      expect(wrapper.find(QuestionOption).length).toBe(numberOfOptions);
    });
  });

  it('should contain ReactMarkdown element', () => {
    const questionText = "Question text";
    const wrapper = shallow(<Question {...anyProps} options={mockOptions} text={questionText} />);

    expect(wrapper.find(ReactMarkdown).length).toBe(1);
  });

  it('should contain the text given', () => {
    const questionText = "Question text";
    const wrapper = shallow(<Question {...anyProps} options={mockOptions} text={questionText} />);

    expect(wrapper.find(ReactMarkdown).props().source).toContain(questionText);
  });

  [true, false].forEach(isAnswered => {
    it(`should send ${isAnswered} to all options when isAnswered is ${isAnswered}`, () => {
      const wrapper = shallow(<Question {...anyProps} options={mockOptions} isAnswered={isAnswered} />);

      const options = wrapper.find(QuestionOption);
      const notAnsweredOptions = wrapper.find(QuestionOption).filterWhere(o => o.props().isAnswered === isAnswered);
      expect(notAnsweredOptions.length).toEqual(options.length);
    });
  });
});