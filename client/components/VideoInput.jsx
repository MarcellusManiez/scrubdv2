import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import SearchBar from 'material-ui-search-bar'
import axios from 'axios'; 
import YOUTUBE_KEY from '../youtube_key.js'
import RaisedButton from 'material-ui/RaisedButton'
import { convertISO8601ToSeconds, getVideoIdFromUrl } from '../helperFunctions.js'

class VideoInput extends Component {
  constructor(props) {
    super (props) 

    this.state = {
      term: ''
    }  

    this.searchYouTube = this.searchYouTube.bind(this)
  }

  searchYouTube () {
    
    let videoId = getVideoIdFromUrl(this.state.term)
    this.setState( {term : ''} )
    
    axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        id: videoId,
        part: 'snippet,contentDetails',
        key: YOUTUBE_KEY
      }
    }).then( videos => {
      
      const video = videos.data.items[0].snippet
      const isoDuration = videos.data.items[0].contentDetails.duration;
      const videoDurationInSeconds = convertISO8601ToSeconds(isoDuration)
      
      
      const videoData = {
        user_name : localStorage.getItem('user'),
        video_title : video.title,
        video_url : videoId,
        thumbnail_url : video.thumbnails.default.url
      }
      
      videoData.video_duration =  videoDurationInSeconds;

      axios.post('/api/addVideo', {
        data: videoData
      })
      .then( _ => this.props.toggleModal() )
    })
  }

 
 
  render () {
    
    return (
      <div style={this.props.style}>
        <SearchBar
          value={this.state.term}
          hintText="Add a YouTube Video URL..."
          searchIcon={false}
          onChange={ () => this.setState({ term: event.target.value }) }
          onRequestSearch={ this.searchYouTube }
          style={{
            margin: '0 auto',
            maxHeight: '80%',
            minWidth: '90%'
          }}
        />
        <div style={{display: 'flex'}}>
          <RaisedButton label='Submit' onClick={ this.searchYouTube } style={{margin:'15px'}}/>
          <RaisedButton label='Cancel' secondary={true} onClick={ this.props.toggleModal } style={{margin:'15px'}}/>
        </div>
      </div>
    );
  }
  
}

export default VideoInput;