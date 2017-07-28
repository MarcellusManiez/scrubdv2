/* eslint react/prop-types: 0 */

import React from 'react';
import YouTube from 'react-youtube';
// import axios from 'axios';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addComment, updateCurrentComment } from '../actions/commentActions';
import { fetchVideoWithComments } from '../actions/videoActions';
import CommentGraph from '../components/Graph.jsx';
import CommentBox from '../components/CommentBox.jsx';
import Nav from '../components/Nav.jsx';
// import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import styles from '../styles/video_player.css';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: null,
    };

    this.createPlayer = this.createPlayer.bind(this);
    this.getPlayerTime = this.getPlayerTime.bind(this);
    // this.getVideoInfoById = this.getVideoInfoById.bind(this);
    // this.getVideoComments = this.getVideoComments.bind(this);
    this.addComment = this.addComment.bind(this);
    this.checkForCommentsAtCurrentTime = this.checkForCommentsAtCurrentTime.bind(this);
  }


  componentDidMount() {
    const videoID = this.props.match.params.video_id;

    this.props.dispatch(fetchVideoWithComments(videoID));

    // axios.all([this.getVideoInfoById(), this.getVideoComments()])
    //   .then((results) => {
    //     const video = results[0].data;
    //     const commentsObject = {};
    //     const commentGraphData = [];
    //     const commentArray = results[1].data;

    //     commentArray.forEach((comment) => {
    //       if (commentsObject[comment.comment_timestamp]) {
    //         commentsObject[comment.comment_timestamp].push(comment);
    //       }
    //       commentsObject[comment.comment_timestamp] = [comment];
    //     });

    //     for (let i = 0; i < video.video_duration; i++) {
    //       if (commentsObject[`${i}.00`]) {
    //         commentGraphData.push(commentsObject[`${i}.00`].length);
    //       } else {
    //         commentGraphData.push(0);
    //       }
    //     }

    //     this.setState({
    //       currentVideo: video,
    //       commentsByTimestamp: commentsObject,
    //       commentGraphData,
    //     });
    // });
  }

  getPlayerTime() {
    // round time to 2 decimal places
    const time = Math.round(this.state.player.getCurrentTime() * 100) / 100;
    return time;
  }

  // getVideoInfoById() {
  //   return axios.get(`/api/getVideo/${this.props.match.params.video_id}`, {
  //     params: {
  //       why: 'Do i have to do this?',
  //     },
  //   });
  // }

  // getVideoComments() {
  //   return axios.get(`/api/getVideoComments/${this.props.match.params.video_id}`);
  // }

  checkForCommentsAtCurrentTime() {
    const time = `${Math.round(this.getPlayerTime())}.00`;

    if (this.props.videoComments[time]) {
      this.props.dispatch(updateCurrentComment(this.props.videoComments[time][0]));
    }
  }

  addComment(comment) {
    // const commentCopy = this.props.commentGraphData.slice();
    // const timestamp = parseInt(comment.data.comment_timestamp, 10);
    // comment.data.user_name = localStorage.getItem('user');

    // commentCopy[timestamp] = (commentCopy[timestamp] + 1) || 1;

    this.props.dispatch(addComment(comment));

    // this.setState({
    //   commentGraphData: commentCopy,
    //   currentComment: comment.data,
    // });
  }

  createPlayer(e) {
    this.setState({
      player: e.target,
    });
  }


  render() {
    return (this.props.currentVideo) ?
      (
        <div>
          <Nav />
          <div className={styles.player_page}>
            <div className={styles.player_container}>
              <YouTube
                videoId={this.props.currentVideo.video_url}
                opts={playerOpts}
                onReady={this.createPlayer}
                onPlay={() => (() => { intervalHandler = setInterval(() => this.checkForCommentsAtCurrentTime(), 1000); })()}
                onPause={() => clearInterval(intervalHandler)}
              />
              <CommentGraph data={this.props.commentGraphData} />
              <CommentBox
                getPlayerTime={this.getPlayerTime}
                currentComment={this.props.currentComment}
                video_id={this.props.currentVideo.video_id}
                addComment={this.addComment}
              />
            </div>
          </div>

        </div>
      ) :
      (
        <div>
          <Nav />
          <div className={styles.player_page}>
        Loading video...
          </div>
        </div>
      );
  }
}


// export default VideoPlayer;
let intervalHandler = 0;

const playerOpts = {
  playerVars: {
    autoplay: 0,
    controls: 1,
    rel: 0,
  },

  height: '426.5',
  width: '700',
};

function mapStateToProps(state) {
  return {
    currentVideo: state.videos.currentVideo,
    commentGraphData: state.comments.commentGraphData,
    currentComment: state.comments.currentComment,
    videoComments: state.comments.videoComments,
  };
}

export default connect(mapStateToProps)(VideoPlayer);

