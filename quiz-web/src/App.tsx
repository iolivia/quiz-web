import * as React from 'react';
import './App.css';

import { initializeFontAwesomeLibrary } from './fontAwesome';

import Question from './Question';

class App extends React.Component {

  public componentWillMount() {
    initializeFontAwesomeLibrary();
  }

  public render() {

    return (
      <div className="quiz-container">

        {/* testing ground */}
        { this.buildQuestion() }
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

    return <Question text={questionText} options={options}/>;
  }
}

export default App;
