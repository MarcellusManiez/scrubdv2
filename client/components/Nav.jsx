import React, { Component } from 'react';
import VideoInput from './VideoInput.jsx'
import Modal from './Modal.jsx'
import NavButtons from './NavButtons.jsx'
import styles from '../styles/nav.css'

class Nav extends Component {
  constructor (props) {
    super (props)

    this.state = {
      openModal: false
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal () {
    this.setState( { openModal : !this.state.openModal } )
  }

  render () {
    return (
      <header>
        <Modal isOpen={this.state.openModal} toggleModal={this.toggleModal}>
          <p>Please enter a valid YouTube URL...</p>
          <VideoInput
            toggleModal={this.toggleModal} 
            style={{ 
              width: '100%',
              height: '30%',
              display: 'flex', 
              justifyContent: 'space-around', 
              alignItems: 'center', 
              flexDirection: 'column'
            }}
          />  
        </Modal> 
        <NavButtons toggleModal={this.toggleModal} /> 
      </header>
    );
  }
};

export default Nav;


     

