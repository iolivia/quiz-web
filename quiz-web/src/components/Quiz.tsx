import * as React from 'react';
import { Button } from './Button';
import Question, { QuestionProps } from './Question';

export interface QuizProps {
    title: string;
    questions: QuestionProps[];
}

export interface QuizState {
    isAnswered: boolean;
}

export class Quiz extends React.Component<QuizProps, QuizState> {

    constructor(props: QuizProps) {
        super(props);
        this.state = {
            isAnswered: false
        };
    }

    public render() {

        const { title, questions } = this.props;

        return (
            <div className="quiz-container">

                {/* Header */}
                <div className="quiz-header">
                    <h2>{title}</h2>
                </div>

                <div className="quiz-container-inner">
                    {/* Question */}
                    <div className="quiz-questions">
                        {this.buildQuestions(questions)}
                    </div>

                    {/* Submit button */}
                    <div className="quiz-buttons">
                        <Button text="submit" onClick={this.onSubmit} />
                    </div>
                </div>
            </div>
        );
    }

    private buildQuestions = (questionsProps: QuestionProps[]) => {
        const questions = [];
        for (let i = 0; i < questionsProps.length; i++) {
            const questionProps = questionsProps[i];
            questions.push(<Question {...questionProps} key={i} />);
        }
        return questions;
    }

    private onSubmit = () => {
        this.setState({ isAnswered: true });
    }
}