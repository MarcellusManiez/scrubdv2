import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import styles from './styles/main.css' //base styles to remove margin

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>, document.getElementById('root'));