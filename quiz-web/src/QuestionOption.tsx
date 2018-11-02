import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

export interface QuestionOptionProps {
    text: string;
    isCorrect: boolean;
    isAnswered?: boolean;
}

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

        const { text, isAnswered, isCorrect } = this.props;
        const { isSelected, isHovered } = this.state;

        const icon = isSelected || isHovered  ? "check-circle" : "circle";
        const answerMarker = isCorrect 
                                ? (isSelected ? "correct" : "incorrect")
                                : (isSelected ? "incorrect" : "correct");
        const answerMarkerClass = "question-option-answer-" + answerMarker;

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
                {isAnswered && <div className={answerMarkerClass} />}
            </div>
        );
    }

    private onClick = () => {
        if (!this.props.isAnswered) {
            this.setState({ isSelected: !this.state.isSelected, isHovered: false });
        }
    }

    private onMouseEnter = () => {
        if (!this.props.isAnswered) {
            this.setState({ isHovered: true });
        }
    }

    private onMouseLeave = () => {
        if (!this.props.isAnswered) {
            this.setState({ isHovered: false });
        }
    }
}