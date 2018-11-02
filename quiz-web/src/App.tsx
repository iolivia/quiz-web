import * as React from 'react';
import './App.css';

import Question from './Question';

class App extends React.Component {
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
        text: "Apples"
      },
      {
        text: "Oranges"
      },
      {
        text: "Pears"
      },
      {
        text: "Other"
      }
    ];

    return <Question text={questionText} options={options} />;
  }
}

export default App;
