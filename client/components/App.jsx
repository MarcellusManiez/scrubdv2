import React from 'react';
import Nav from './Nav.jsx';
import VideoPlayer from './VideoPlayer.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <Nav/>
        <VideoPlayer />
      </div>
    );
  }
}

export default App;
        
        