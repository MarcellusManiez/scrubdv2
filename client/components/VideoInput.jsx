import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import SearchBar from 'material-ui-search-bar'
import axios from 'axios'; 
import YOUTUBE_KEY from '../youtube_key.js'
import parse from 'date-fns/parse'

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
    );
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
    })
  }
}

export default VideoInput;
  


//TODO: move to helper function file
 
 function convertISO8601ToSeconds(input) {

  var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
  var hours = 0, minutes = 0, seconds = 0, totalseconds;

  if (reptms.test(input)) {
      var matches = reptms.exec(input);
      if (matches[1]) hours = Number(matches[1]);
      if (matches[2]) minutes = Number(matches[2]);
      if (matches[3]) seconds = Number(matches[3]);
      totalseconds = hours * 3600  + minutes * 60 + seconds;
  }

  return (totalseconds);
}




function getVideoIdFromUrl (string) {
  let id = string.split('v=')[1];
  const ampersandPosition = id.indexOf('&');
    
  if(ampersandPosition != -1) {
    id = id.substring(0, ampersandPosition);
  }
  
  return id;
}