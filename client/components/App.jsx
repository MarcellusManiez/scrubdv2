import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from './Nav.jsx';
import VideoPlayer from './VideoPlayer.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <MuiThemeProvider> 
          <Nav/>
        </MuiThemeProvider>  
        <MuiThemeProvider>
          <VideoPlayer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;