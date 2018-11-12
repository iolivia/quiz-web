import * as React from 'react';
import { QuestionOption, QuestionOptionProps } from './QuestionOption';

export interface QuestionProps {
    isAnswered: boolean;
    text: string;
    options: QuestionOptionProps[];
}

export interface QuestionState {
    options: QuestionOptionProps[];
}

export class Question extends React.Component<QuestionProps, QuestionState> {

    public constructor(props: QuestionProps) {
        super(props);
        this.state = {
            options: props.options
        };
    }

    public render() {

        const { text } = this.props;
        const { options } = this.state;

        return (
            <div className="question-container">

                {/* Question body */}
                <div>

                    {/* Question text */}
                    <div className="question-text">
                        {text}
                    </div>

                    {/* Options */}
                    <div className="question-options-container">
                        {this.buildOptions(options)}
                    </div>

                </div>
            </div>
        );
    }

    private buildOptions(options: QuestionOptionProps[]) {
        const optionElements = [];
        for (let i = 0; i < options.length; i++) {
            const option = options[i];
            const optionElement = (
                <QuestionOption 
                    key={i} 
                    {...option} 
                    isAnswered={this.props.isAnswered} 
                    onToggleSelected={this.onToggleSelected.bind(this, i)} 
                />);
            optionElements.push(optionElement);
        }

        return optionElements;
    }

    private onToggleSelected = (questionPropsIndex: number) => {
        const questionProps = this.state.options[questionPropsIndex];
        questionProps.isSelected = !questionProps.isSelected;

        this.forceUpdate();
    }
}