import * as React from 'react';
import './../styles/App.css';

import { initializeFontAwesomeLibrary } from '../styles/fontAwesome';

import { Quiz, QuizProps } from './../components/Quiz';
import { getQuiz } from './../components/quizProvider';

// tslint:disable-next-line:no-empty-interface
export interface AppProps {
}

export interface AppState {
  quizProps: QuizProps | null;
}

export class App extends React.Component<AppProps, AppState> {

  private readonly loadingText: string = "Your quiz is loading ...";

  constructor(props: AppProps) {
    super(props);
    this.state = {
      quizProps: null
    };
  }

  public componentWillMount() {
    initializeFontAwesomeLibrary();
  }

  public componentDidMount() {
    getQuiz("test-quiz").then((quizProps) => {
      this.setState({ quizProps });
    })
  }

  public render() {

    const { quizProps } = this.state;

    return (
      <div className="container">
        { 
          quizProps 
            ? <Quiz {...quizProps} /> 
            : <div className="loading-container">
                {this.loadingText}
              </div> 
        }
      </div>
    );
  }
}