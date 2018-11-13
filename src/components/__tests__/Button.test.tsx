import { shallow } from 'enzyme';

import React from 'react';
import { Button } from './../Button';

const anyProps = {
    onClick: jest.fn(),
    text: "someText",
};

describe('Button', () => {

  it('should render', () => {
    const wrapper = shallow(<Button {...anyProps} />);
    expect(wrapper).not.toBe(null);
  });

  it('should call onClick when clicked', () => {
    const onClickHandler = jest.fn();
    const wrapper = shallow(<Button {...anyProps} onClick={onClickHandler} />);
    wrapper.simulate("click");

    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });

  it('should render passed in text', () => {
    const text = "buttonText";
    const wrapper = shallow(<Button {...anyProps} text={text} />);

    expect(wrapper.find(".button-container").text()).toEqual(text);
  });
});