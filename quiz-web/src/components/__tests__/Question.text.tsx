import { shallow } from 'enzyme';

import React from 'react';
import { Question } from '../Question';
import { QuestionOption, QuestionOptionProps } from '../QuestionOption';

const anyProps = {
    isAnswered: false,
    options: [],
    text: "someText",
};

describe('Question', () => {

  const createOptions = (count: number) : QuestionOptionProps[] => {
    const options = [];
    const optionProps = {
      isAnswered: false,
      isCorrect: true,
      isSelected: false,
      // tslint:disable-next-line:no-empty
      onToggleSelected: () => {},
      text: "someText",
    };
    for(let i = 0; i < count; i++) {
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

  it('should render the text given', () => {
    const questionText = "Question text";
    const wrapper = shallow(<Question {...anyProps} options={mockOptions} text={questionText} />);

    expect(wrapper.find(".question-text").text()).toEqual(questionText);
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