import * as React from 'react';
import { Quiz, QuizProps } from './Quiz';
import { getQuiz } from './quizProvider';

// tslint:disable-next-line:no-empty-interface
export interface QuizContainerProps {
}

export interface QuizContainerState {
    quizProps: QuizProps | null;
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
        getQuiz("fakeId").then((quizProps) => {
            this.setState({quizProps});
        });
    }

    public render() {
        const { quizProps } = this.state;
        const isLoading = !quizProps;

        return (
            <div>
                {
                    isLoading 
                        ? (quizProps && <Quiz {...quizProps} /> ) 
                        : (<div className="loading-container">{this.loadingText}</div>)
                }
            </div>
        );
    }
}