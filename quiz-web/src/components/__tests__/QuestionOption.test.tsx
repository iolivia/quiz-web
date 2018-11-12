import { shallow } from 'enzyme';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { QuestionOption } from '../QuestionOption';

describe('QuestionOption', () => {

  const anyProps = {
    isCorrect: true,
    isSelected: false,
    onToggleSelected: jest.fn(),
    text: "someText",
  };
  
  const uncheckedIcon = "circle";
  const checkedIcon = "check-circle";
  
  const correctMarkerClassName = ".question-option-answer-correct";
  const incorrectMarkerClassName = ".question-option-answer-incorrect";

  it('should render', () => {
    const wrapper = shallow(<QuestionOption {...anyProps} />);

    expect(wrapper).not.toBe(null);
  });

  describe('when not answered', () => {

    it('should not be hovered initially', () => {
      const wrapper = shallow<QuestionOption>(<QuestionOption {...anyProps} />);
      
      expect(wrapper.state().isHovered).toEqual(false);
    });

    it('should be selected onClick', () => {
      const wrapper = shallow<QuestionOption>(<QuestionOption {...anyProps} />);
      wrapper.simulate("click");
      wrapper.update();

      expect(anyProps.onToggleSelected).toHaveBeenCalledTimes(1);
    });

    it('should be not hovered onClick', () => {
      const wrapper = shallow<QuestionOption>(<QuestionOption {...anyProps} />);
      wrapper.setState({ isHovered: true });
      wrapper.simulate("click");
      wrapper.update();

      expect(wrapper.state().isHovered).toEqual(false);
    });

    it('should be hovered onMouseEnter', () => {
      const wrapper = shallow<QuestionOption>(<QuestionOption {...anyProps} />);
      wrapper.find(".question-option-container").simulate("mouseEnter");
      wrapper.update();
      
      expect(wrapper.state().isHovered).toEqual(true);
    });

    it('should not be hovered onMouseLeave', () => {
      const wrapper = shallow<QuestionOption>(<QuestionOption {...anyProps} />);
      wrapper.simulate("mouseLeave");
      wrapper.update();

      expect(wrapper.state().isHovered).toEqual(false);
    });

    it('should contain unchecked box when not selected', () => {
      const wrapper = shallow(<QuestionOption {...anyProps} />);
      wrapper.setState({isSelected: false});
      wrapper.update();

      const icon = wrapper.find(FontAwesomeIcon);
      expect(icon.props().icon[1]).toEqual(uncheckedIcon);
    });

    it('should contain unchecked box when not selected', () => {
      const wrapper = shallow(<QuestionOption {...anyProps} />);

      const icon = wrapper.find(FontAwesomeIcon);
      expect(icon.props().icon[1]).toEqual(uncheckedIcon);
    });

    it('should contain checked box when hovered', () => {
      const wrapper = shallow(<QuestionOption {...anyProps} />);
      wrapper.setState({isHovered: true});
      wrapper.update();

      const icon = wrapper.find(FontAwesomeIcon);
      expect(icon.props().icon[1]).toEqual(checkedIcon);
    });

    it('should contain unchecked box when not hovered', () => {
      const wrapper = shallow(<QuestionOption {...anyProps} />);
      wrapper.setState({isHovered: false});
      wrapper.update();

      const icon = wrapper.find(FontAwesomeIcon);
      expect(icon.props().icon[1]).toEqual(uncheckedIcon);
    });

  });

  describe('when answered', () => {

    it('should contain correct marker when selected and correct', () => {
      const props = {
        ...anyProps,
        isAnswered: true,
        isCorrect: true,
        isSelected: true
      };
      const wrapper = shallow(<QuestionOption {...props} />);

      expect(wrapper.find(correctMarkerClassName).length).toBe(1);
      expect(wrapper.find(incorrectMarkerClassName).length).toBe(0);
    });

    it('should contain incorrect marker when selected and not correct', () => {
      const props = {
        ...anyProps,
        isAnswered: true,
        isCorrect: false,
        isSelected: true
      };
      const wrapper = shallow(<QuestionOption {...props} />);

      expect(wrapper.find(correctMarkerClassName).length).toBe(0);
      expect(wrapper.find(incorrectMarkerClassName).length).toBe(1);
    });

    it('should contain incorrect marker when not selected and correct', () => {
      const props = {
        ...anyProps,
        isAnswered: true,
        isCorrect: true
      };
      const wrapper = shallow(<QuestionOption {...props} />);

      expect(wrapper.find(correctMarkerClassName).length).toBe(0);
      expect(wrapper.find(incorrectMarkerClassName).length).toBe(1);
    });

    it('should contain correct marker when not selected and not correct', () => {
      const props = {
        ...anyProps,
        isAnswered: true,
        isCorrect: false
      };
      const wrapper = shallow(<QuestionOption {...props} />);

      expect(wrapper.find(correctMarkerClassName).length).toBe(1);
      expect(wrapper.find(incorrectMarkerClassName).length).toBe(0);
    });

  });
});