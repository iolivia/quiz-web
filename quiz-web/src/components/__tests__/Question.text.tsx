import { shallow } from 'enzyme';

import React from 'react';
import Question from '../Question';
import QuestionOption, { QuestionOptionProps } from '../QuestionOption';

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
      text: "someText"
    };
    for(let i = 0; i < count; i++) {
      options.push(optionProps);
    }

    return options;
  };

  it('should render', () => {
    const wrapper = shallow(<Question {...anyProps} />);
    expect(wrapper).not.toBe(null);
  });

  it('should render the same number of options as given', () => {
    const numberOfOptions = 10;
    const options = createOptions(numberOfOptions);
    const wrapper = shallow(<Question {...anyProps} options={options} />);
    expect(wrapper.find(QuestionOption).length).toBe(numberOfOptions);
  });

});