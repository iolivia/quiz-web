import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

export interface QuestionOptionProps {
    text: string;
}

// tslint:disable-next-line:no-empty-interface
export interface QuestionOptionState {
    isHovered: boolean;
    isSelected: boolean;
}

export default class QuestionOption extends React.Component<QuestionOptionProps, QuestionOptionState> {

    constructor(props: QuestionOptionProps) {
        super(props);
        this.state = {
            isHovered: false,
            isSelected: false,
        };
    }

    public render() {

        const { text } = this.props;
        const { isSelected, isHovered } = this.state;

        const icon = isSelected || isHovered  ? "check-circle" : "circle";

        return (
            <div 
                className="question-option-container" 
                onClick={this.onClick} 
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                >
                <FontAwesomeIcon icon={["far", icon]} />
                <div className="question-option-text">
                    {text}
                </div>
            </div>
        );
    }

    private onClick = () => {
        this.setState({ isSelected: !this.state.isSelected, isHovered: false });
    }

    private onMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    private onMouseLeave = () => {
        this.setState({ isHovered: false });
    }
}