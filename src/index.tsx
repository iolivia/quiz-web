import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/App';
import { register } from './app/registerServiceWorker';
import './styles/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
register();
