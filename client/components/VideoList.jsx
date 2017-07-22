
import React from 'react';
import { Link } from 'react-router-dom';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const VideoList = ({ videos, description }) => (
  <div style={styles.root}>
    <GridList style={styles.gridList}>
      <Subheader style={{ fontSize: '1.8em', color: 'black' }}>{description}</Subheader>
      { videos.map(vid =>
        (<GridTile
          key={vid.video_id}
          title={vid.video_title}
          containerElement={<Link to={`/player/${vid.video_id}`} />}
        >
          <img src={vid.thumbnail_url} />
        </GridTile>),
      )
      }
    </GridList>
  </div>
);

export default VideoList;


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    height: 450,
  },
};

{ /* <div style={styles.root}>
      <GridList style={styles.gridList}>  
        <Subheader style={{fontSize:'1.8em', color: 'black'}}>{description}</Subheader>
        { videos.map( vid => 
            <GridTile
              key={vid.video_id}
              title={vid.video_title}
              containerElement={<Link to={`/player/${vid.video_id}`}/>}
            >
              <img src={vid.thumbnail_url} />
            </GridTile>
          ) 
        }
      </GridList>
    </div>*/ }


{ /* <div style={styles.root}>
      {
        videos.map( v => 
          <div style={{display: 'flex', height: 200, justifyContent: 'center'}}>
            <img src={v.thumbnail_url}/>
          </div>
        )
      }
    </div>*/ }
