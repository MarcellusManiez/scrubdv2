import React from 'react';
import YouTube from 'react-youtube'

class VideoPlayer extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {

    const opts = {
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <YouTube videoId={'dQw4w9WgXcQ'} opts={opts} />
    );
  }
}

export default VideoPlayer;
