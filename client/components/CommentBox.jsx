import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { indigo500 } from 'material-ui/styles/colors';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import axios from 'axios';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.submitComment = this.submitComment.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }


  submitComment() {
    const timestamp = this.props.getPlayerTime();
    const user_name = localStorage.getItem('user');
    const message = this.state.term;
    const video_id = this.props.video_id;

    axios.post('/api/addComment', { user_name, timestamp, message, video_id })
      .then(c => this.props.addComment(c));
  }

  handleTextChange(e) {
    e.preventDefault();
    const term = e.target.value;

    this.setState({ term });
  }

  onKeyPress(e) {
    if (e.charCode === 13) { // enter key pressed
      e.preventDefault();
      this.submitComment(this.state.term);
      this.setState({ term: '' });
    }
  }

  render() {
    const comment = this.props.currentComment;

    return comment === null ?
      (
        <List>
          <ListItem
            style={styles.list_item}
            primaryText={
              <TextField
                value={this.state.term}
                onKeyPress={this.onKeyPress}
                onChange={this.handleTextChange}
                fullWidth
                style={styles.textField}
                underlineShow={false}
              />
            }
            rightIcon={
              <CommunicationChatBubble
                onTouchTap={this.submitComment}
                color={'#03A9F4'}
                hoverColor={'blue'}
              />
            }
          />
        </List>
      )
      :
      (
        <div>
          <List>
            <ListItem
              style={styles.list_item}
              primaryText={
                <TextField
                  value={this.state.term}
                  onChange={this.handleTextChange}
                  onKeyPress={this.onKeyPress}
                  fullWidth
                  style={styles.textField}
                  underlineShow={false}
                />
              }
              rightIcon={
                <CommunicationChatBubble
                  onTouchTap={this.submitComment}
                  color={'#03A9F4'}
                  hoverColor={'blue'}
                />
              }
            />
          </List>
          <Card style={{ width: '700px' }}>
            <CardHeader
              title={`${comment.user_name} @ ${comment.comment_timestamp}`}
              subtitle={comment.message}
              avatar='https://api.adorable.io/avatars/285/Barton Young.png'
            />
          </Card>
        </div>
      );
  }
}

export default CommentBox;

const styles = {


  textField_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '700px',
    backgroundColor: 'gray',
    borderRadius: '2px',
  },


  list_item: {
    backgroundColor: '#D3D3D3',
  },

  textField: {
    maxHeight: '25px',
    backgroundColor: 'white',
    borderRadius: '2px',
  },
};
