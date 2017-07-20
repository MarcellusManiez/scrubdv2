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

  render () {
    const user = localStorage.getItem('user')

    return (
      <div>
        <Nav />
        <div style={{marginTop: 65}}>
          <div 
            style={{
              display:'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              backgroundColor: 'gray',
              minHeight: 200
              }}>
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