import * as React from 'react';
import './../styles/App.css';

import { QuizContainer } from '../components/QuizContainer'
import { initializeFontAwesomeLibrary } from '../styles/fontAwesome';

// tslint:disable-next-line:no-empty-interface
export interface AppProps {
}

// tslint:disable-next-line:no-empty-interface
export interface AppState {
}

export class App extends React.Component<AppProps, AppState> {

  public componentWillMount() {
    initializeFontAwesomeLibrary();
  }

  public render() {

    return (
      <div className="container">
        <QuizContainer />
      </div>
    );
  }
}