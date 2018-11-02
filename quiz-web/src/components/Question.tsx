import * as React from 'react';
import { Button } from './Button';
import QuestionOption, { QuestionOptionProps } from './QuestionOption';

export interface QuestionProps {
    text: string;
    options: QuestionOptionProps[];
}

export interface QuestionState {
    isAnswered: boolean;
}

export default class Question extends React.Component<QuestionProps, QuestionState> {

    public constructor(props: QuestionProps) {
        super(props);
        this.state = {
            isAnswered: false
        };
    }
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

                {/* Question submit button */}
                <Button text="submit" onClick={this.onSubmit}/>
            </div>
        );
    }

    private buildOptions(options: QuestionOptionProps[]) {
        const optionElements = [];
        for (let i = 0; i < options.length; i++) {
            const option = options[i];
            const optionElement = <QuestionOption key={i} {...option} isAnswered={this.state.isAnswered} />;
            optionElements.push(optionElement);
        }

        return optionElements;
    }

    private onSubmit = () => {
        this.setState({isAnswered: true});
    }
}