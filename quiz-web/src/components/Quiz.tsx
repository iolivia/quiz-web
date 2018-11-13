import * as React from 'react';
import { Button } from './Button';
import { Question, QuestionProps } from './Question';
import { QuestionOptionProps } from './QuestionOption';

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
                        { !isAnswered && <Button text="submit" onClick={this.onSubmit} /> }
                    </div>

                    {/* Results */}
                    <div className="quiz-results">
                        {
                            isAnswered && 
                            <div className="quiz-results-container">
                                <h3>Quiz results</h3>
                                <div className="quiz-results-inner">
                                    Questions answered correctly: {score}/{questions.length}
                                    <br />
                                    Percentage: {this.calculatePercentage()}%
                                </div>
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
            const question = (
                <Question 
                    {...questionProps} 
                    key={i} 
                    isAnswered={this.state.isAnswered} 
                    onOptionChanged={this.onOptionChanged} 
                />);
            questions.push(question);
        }
        return questions;
    }

    private onSubmit = () => {
        this.setState({ isAnswered: true, score: this.calculateScore() });
    }

    private onOptionChanged = (questionProps: QuestionOptionProps) => {
        questionProps.isSelected = !questionProps.isSelected;

        this.forceUpdate();
    }

    private calculateScore = () : number => {
        let score = 0;

        // Go through all the questions
        for(const question of this.state.questions) {
            // Count correctly answered options vs total options
            const correctlyAnsweredOptions = question.options.filter((option) => (option.isCorrect ? option.isSelected : !option.isSelected));
            if (correctlyAnsweredOptions.length === question.options.length) {
                // get a point
                score += 1;
            }
        }

        return score;
    }

    private calculatePercentage = () : number => {
        const { score, questions } = this.state;

        const percentage = Math.round((score / questions.length) * 100);
        return percentage;
    }
}