import { shallow } from 'enzyme';

import React from 'react';
import QuestionOption from '../QuestionOption';

const anyProps = {
  isCorrect: true,
  text: "someText",
};

describe('QuestionOption', () => {
  it('should render', () => {
    const component = shallow(<QuestionOption {...anyProps}/>);
  
    expect(component).not.toBe(null);
  });
});