import * as React from 'react';
import { QuestionOption, QuestionOptionProps } from './QuestionOption';

export interface QuestionProps {
    isAnswered: boolean;
    text: string;
    options: QuestionOptionProps[];
}

// tslint:disable-next-line:no-empty-interface
export interface QuestionState {
}

export class Question extends React.Component<QuestionProps, QuestionState> {

    public render() {

        const { text, options } = this.props;

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
            const optionElement = <QuestionOption key={i} {...option} isAnswered={this.props.isAnswered} />;
            optionElements.push(optionElement);
        }

        return optionElements;
    }
}