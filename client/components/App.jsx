import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Test from './Test.jsx';

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider> 
        <Test/>
      </MuiThemeProvider>  
    );
  }
}

export default App;