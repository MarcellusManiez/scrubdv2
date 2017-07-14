import React from 'react';
import YouTube from 'react-youtube';
import styles from '../styles/video_player.css'
import { Sparklines, SparklinesLine, SparklinesCurve, SparklinesBars } from 'react-sparklines'
import axios from 'axios';
 
class VideoPlayer extends React.Component {
  constructor (props) {
    super (props)
    console.log(props.match.params.video_id)
    this.state = {
      player: null,
      currentVideo: null,
      comments: [],
      playing: false,
    };

    this.createPlayer = this.createPlayer.bind(this)
    this.getPlayerTime = this.getPlayerTime.bind(this)
    this.checkTimes = this.checkTimes.bind(this)
    this.getVideoInfoById = this.getVideoInfoById.bind(this)
    this.getVideoComments = this.getVideoComments.bind(this)
  }


  componentDidMount () {
    const video_id = this.props.match.params.video_id
 
    Promise.all( [this.getVideoInfoById(), this.getVideoComments()] )
    .then( results => {
      const video = results[0].data

      this.setState( { 
        currentVideo : video,
        comments : results[1] 
      })
    });
  }

  render () {
    const opts = {
      playerVars: {
        autoplay: 0
      },
      rel: 0,
      height: '426.5',
      width: '700'
    };

    const sampleData = [0,0,4,5,3,10,11,0,0,0,0,0,0,5,0,0,3,5,6,0,10,13,14,15,16,0,0,3,0,2];
    
    return this.state.currentVideo ? 
      (
        <div className={styles.player_page}>
          <div className={styles.player_container}>
            <YouTube 
              videoId={this.state.currentVideo.video_url} 
              opts={opts} 
              onReady={ this.createPlayer } 
              onPlay={ () => { 
                this.setState({playing: true}), 
                (( ) => { handle = setInterval( _ => this.checkTimes(), 1000) })(); 
                } 
              }
              onPause={ () => { this.setState({playing: false}), clearInterval(handle) } }
            />
            <button className={styles.click_button} onClick={ ()=>{clearInterval() } }>CLICK ME</button>
            <Sparklines data={sampleData} style={{width:'700px', height: '60px'}}>
              <SparklinesLine style={{ fill: "red" }} />
            </Sparklines>
          </div>
        </div>
      ) : (
        <div className={styles.player_page}>
          LOADING!!!
        </div>
      )
  }

  createPlayer (e) {
    this.setState({
      player: e.target
    })
  }

  checkTimes() {
    if (this.state.playing) {
      let time = Math.round(this.getPlayerTime())
      console.log(time)
    }
    return;
  }

  getPlayerTime () {
    //round time to 2 decimal places
    const time = Math.round(this.state.player.getCurrentTime() * 100) / 100;
    return time;
  }

  getVideoInfoById () {
    return axios.get(`/api/getVideo/${this.props.match.params.video_id}`, {
      params : {
        why: 'Do i have to do this?'
      }
    })
  }


  getVideoComments () {
    return axios.get(`/api/getVideoComments/${this.props.match.params.video_id}`)
  }
}


export default VideoPlayer;

 
let handle = 0;