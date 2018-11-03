import * as React from 'react';
import { Button } from './Button';
import Question from './Question';

// tslint:disable-next-line:no-empty-interface
export interface QuizProps {
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
        return (
            <div className="quiz-container">

                {/* Header */}
                <div className="quiz-header">
                    <h2>Quiz title</h2>
                </div>

                <div className="quiz-container-inner">
                    {/* Question */}
                    <div className="quiz-questions">
                        {this.buildQuestions(10)}
                    </div>

                    {/* Submit button */}
                    <div className="quiz-buttons">
                        <Button text="submit" onClick={this.onSubmit} />
                    </div>
                </div>
            </div>
        );
    }

    private buildQuestions = (count: number) => {
        const questions = [];
        for(let i = 0; i < count; i++) {
            questions.push(this.buildQuestion(i));
        }
        return questions;
    }

    private buildQuestion = (key: number) => {
    
        const questionText = "What is the best fruit?";
        const options = [
          {
            isCorrect: true,
            text: "Apples"
          },
          {
            isCorrect: true,
            text: "Oranges"
          },
          {
            isCorrect: false,
            text: "Pears"
          },
          {
            isCorrect: false,
            text: "Other"
          }
        ];
    
        return ( 
            <Question 
                key={key}
                text={questionText} 
                options={options} 
                isAnswered={this.state.isAnswered}
            /> 
        );
      }
    
      private onSubmit = () => {
        this.setState({isAnswered: true});
    }
}