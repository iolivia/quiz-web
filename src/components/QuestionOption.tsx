import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from './CodeRenderer';

export interface QuestionOptionProps {
    text: string;
    isCorrect: boolean;
    isSelected: boolean;
    isAnswered?: boolean;
    onToggleSelected: () => void;
}

export interface QuestionOptionState {
    isHovered: boolean;
}

export class QuestionOption extends React.Component<QuestionOptionProps, QuestionOptionState> {

    constructor(props: QuestionOptionProps) {
        super(props);
        this.state = {
            isHovered: false,
        };
    }

    public render() {

        const { text, isAnswered, isSelected, isCorrect } = this.props;
        const { isHovered } = this.state;

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
                    <ReactMarkdown source={text} renderers={{code: CodeBlock}} />
                </div>
                {isAnswered && <div className={answerMarkerClass} />}
            </div>
        );
    }

    private onClick = () => {
        if (!this.props.isAnswered) {
            this.props.onToggleSelected();
            this.setState({ isHovered: false }); 
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