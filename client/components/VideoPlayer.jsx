import React from 'react';
import YouTube from 'react-youtube'

class VideoPlayer extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {

    const opts = {
      playerVars: {
        autoplay: 0
      }
    };

    return (
      <YouTube videoId={'RleN-6uMF04'} opts={opts} />
    );
  }
}

export default VideoPlayer;
