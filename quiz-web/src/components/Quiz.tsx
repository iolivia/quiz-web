import * as React from 'react';
import { Button } from './Button';
import { Question, QuestionProps } from './Question';

export interface QuizProps {
    title: string;
    questions: QuestionProps[];
}

export interface QuizState {
    questions: QuestionProps[];
    isAnswered: boolean;
    score: number;
}

export class Quiz extends React.Component<QuizProps, QuizState> {

    constructor(props: QuizProps) {
        super(props);
        this.state = {
            isAnswered: false,
            questions: props.questions,
            score: 0
        };
    }

    public render() {

        const { title } = this.props;
        const { isAnswered, score, questions } = this.state;

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

                    {/* Score */}
                    <div className="quiz-score">
                        {
                            isAnswered && 
                            <div>
                                {score}
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }

    private buildQuestions = (questionsProps: QuestionProps[]) => {
        const questions = [];
        for (let i = 0; i < questionsProps.length; i++) {
            const questionProps = questionsProps[i];
            questions.push(<Question {...questionProps} key={i} isAnswered={this.state.isAnswered} />);
        }
        return questions;
    }

    private onSubmit = () => {
        let score = 0;
        for(const question of this.state.questions) {
            const correctlyAnsweredOptions = question.options.filter((option) => option.isSelected && option.isCorrect);
            if (correctlyAnsweredOptions.length === question.options.length) {
                // get a point
                score += 1;
            }
        }
        this.setState({ isAnswered: true, score });
    }
}