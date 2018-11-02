import * as React from 'react';
import { Button } from './Button';
import Question from './Question';

// tslint:disable-next-line:no-empty-interface
export interface QuizProps {
}

// tslint:disable-next-line:no-empty-interface
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

                {/* Question */}
                {this.buildQuestion()}

                {/* Submit button */}
                <Button text="submit" onClick={this.onSubmit} />
            </div>
        );
    }

    private buildQuestion = () => {
    
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