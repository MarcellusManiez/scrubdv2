import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from './Nav.jsx';

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider> 
        <Nav/>
      </MuiThemeProvider>  
    );
  }
}

export default App;