import * as React from 'react';
import QuestionOption, { QuestionOptionProps } from './QuestionOption';

export interface QuestionProps {
    text: string;
    options: QuestionOptionProps[];
}

// tslint:disable-next-line:no-empty-interface
export interface QuestionState {}

export default class Question extends React.Component<QuestionProps, QuestionState> {

    public render() {

        const { text, options } = this.props;

        return (
            <div className="question-container">

                {/* Question text */}
                <div className="question-text">
                    {text}
                </div>

                {/* Options */}
                <div className="question-options-container">
                    {this.buildOptions(options)}
                </div>

            </div>
        );
    }

    private buildOptions(options: QuestionOptionProps[]) {
        const optionElements = [];
        for (const option of options) {
            optionElements.push(<QuestionOption {...option} />);
        }

        return optionElements;
    }
}