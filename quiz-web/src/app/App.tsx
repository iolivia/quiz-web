import * as React from 'react';
import './../styles/App.css';

import { initializeFontAwesomeLibrary } from '../styles/fontAwesome';

import { QuestionProps } from './../components/Question';
import { Quiz } from './../components/Quiz';

export class App extends React.Component {

  public componentWillMount() {
    initializeFontAwesomeLibrary();
  }

  public render() {

    return (
      <Quiz title="Quiz title" questions={this.buildQuestions(10)}/>
    );
  }

  private buildQuestions = (count: number) => {

    const text = "What is the best fruit?";
    const options = [
      {
        isCorrect: true,
        text: "Apples",
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
    const question: QuestionProps = {
      isAnswered: false,
      options,
      text,
    };

    const questions = [];
    for (let i = 0; i < count; i++) {
      questions.push(question);
    }

    return questions;
  }
}