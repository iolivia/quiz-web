import * as React from 'react';

import { QuizData } from '../data/QuizData';
import { getQuiz } from '../data/quizProvider';
import { Quiz } from './Quiz';

// tslint:disable-next-line:no-empty-interface
export interface QuizContainerProps {
}

export interface QuizContainerState {
    quizProps: QuizData | null;
}

export class QuizContainer extends React.Component<QuizContainerProps, QuizContainerState> {
    private readonly loadingText: string = "Your quiz is loading ...";

    public constructor(props: QuizContainerProps) {
        super(props);
        this.state = {
            quizProps: null
        };
    }

    public componentDidMount() {
        getQuiz("fakeId").then(this.onQuizData);
    }

    public render() {
        const { quizProps } = this.state;
        const isLoading = !quizProps;

        return (
            <div>
                {
                    !isLoading 
                        ? (quizProps && <Quiz data={quizProps} /> ) 
                        : (<div className="loading-container">{this.loadingText}</div>)
                }
            </div>
        );
    }

    public onQuizData = (quizProps: QuizData) => {
        this.setState({ quizProps });
    }
}