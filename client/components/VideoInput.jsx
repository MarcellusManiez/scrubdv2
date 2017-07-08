import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import SearchBar from 'material-ui-search-bar'
import axios from 'axios'; 

class VideoInput extends Component {
  constructor(props) {
    super (props) 

    this.state = {
      term: ''
    }  

    this.searchYouTube = this.searchYouTube.bind(this)
  }


  render () {
    return (
      <SearchBar
        value={this.state.term}
        hintText="Add a YouTube Video URL!"
        searchIcon={false}
        onChange={ () => this.setState({ term: event.target.value }) }
        onRequestSearch={ this.searchYouTube }
        style={{
          margin: '0 auto',
          maxHeight: '80%',
          minWidth: '90%'
        }}
      />
    );
  }
  
  searchYouTube () {
    const videoId = this.state.term.slice(32);
    
    axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'snippet',
        id: videoId,
        key: 'AIzaSyAu2IFGsMXjYy7jk_7HA92KDLvRdStIxVM'
      }
    }).then( videos => console.log(videos.data.items[0].snippet))
  }
}

export default VideoInput;
  

