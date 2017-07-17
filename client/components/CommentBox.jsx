import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class CommentBox extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  render () {
    const comment = this.props.currentComment

    if (comment === null || comment === undefined) {
      return (
        <div>
          <TextField
            hintText='Comment...'
           />
        </div>
      )
    } else {
      return (
        <div>
          <TextField />
          <Card style={{ width: '700px'}}>
            <CardHeader
              title={`${comment.user_name} @ ${comment.comment_timestamp}`}
              subtitle={comment.message}
              avatar="https://api.adorable.io/avatars/285/Barton Young.png"
            />
          </Card>   
        </div>  
      )
    } 
  }
} 

export default CommentBox;


function renderComment( comment ) {
}


