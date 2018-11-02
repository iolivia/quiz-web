import * as React from 'react';
import './../styles/App.css';

import { initializeFontAwesomeLibrary } from '../styles/fontAwesome';

import { Quiz } from './../components/Quiz';

class App extends React.Component {

  public componentWillMount() {
    initializeFontAwesomeLibrary();
  }

  public render() {

    return (
      <Quiz />
    );
  }
}

export default App;
