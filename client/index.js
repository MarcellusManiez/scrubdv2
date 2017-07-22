import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import styles from './styles/main.css'; // base styles to remove margin

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>, document.getElementById('root'));
