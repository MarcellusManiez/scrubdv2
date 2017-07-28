import React, { Component } from 'react';
import Nav from '../components/Nav.jsx'
import main from '../styles/main.css'
import VideoList from '../components/VideoList.jsx'
import axios from 'axios'

class Home extends Component {
  constructor () {
    super()

    this.state = {
      userVideos : [],
      allVideos : []
    }

    this.addVideoToState = this.addVideoToState.bind(this)
  }

  componentDidMount () {
    const user_id = localStorage.getItem('userId')

    axios.all([getVideosByUser(user_id), getAllVidoes(user_id)])
      .then( videos => {
          const userVideos = videos[0].data
          const allVideos = videos[1].data
          
          this.setState({ userVideos, allVideos })
        }
      )
  }


  addVideoToState (video) {
    const updatedVideos = this.state.userVideos.slice();
    updatedVideos.push(video);
    
    this.setState({
      userVideos: updatedVideos
    })
  }

  render () {
    const user = localStorage.getItem('user')

    return (
      <div>
        <Nav addVideoToState={this.addVideoToState}/>
        <div style={{marginTop: 65}}>
          <div style={profile}>
              This is your profile information!
          </div>
          <VideoList description={'Your videos...'} videos={this.state.userVideos}/>
          <VideoList description={'All videos...'} videos={this.state.allVideos}/>
        </div>
      </div>
    );
  }
};

export default Home;




  const getVideosByUser = (id) => {
    return axios.get(`/api/getVideosByUser/${id}`)
  }

  const getAllVidoes = (id) => {
    return axios.get(`/api/getAllVideos/${id}`)
  }


  const profile = {
    display:'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'gray',
    minHeight: 200
    }