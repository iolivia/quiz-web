import * as React from 'react';
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
                <button onClick={this.onSubmit}>
                    submit
                </button>

            </div>
        );
    }

    private buildOptions(options: QuestionOptionProps[]) {
        const optionElements = [];
        for (const option of options) {
            optionElements.push(<QuestionOption {...option} isAnswered={this.state.isAnswered} />);
        }

        return optionElements;
    }

    private onSubmit = () => {
        this.setState({isAnswered: true});
        console.log("on submit");
    }
}