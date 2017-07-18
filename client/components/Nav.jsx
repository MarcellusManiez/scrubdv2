import React, { Component } from 'react';
import VideoInput from './VideoInput.jsx'
import Modal from './Modal.jsx'
// import RaisedButton from 'material-ui/RaisedButton'
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
          <p>Please enter a valid YouTube URL</p>
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
        <nav className={styles.nav}>
          <ul className={styles.navbar}>
            <li className={styles.nav_item} onClick={() => console.log('lets go')}>LOGO</li>       
            <li className={styles.nav_item}>Home</li>       
            <li className={styles.nav_item} onClick={this.toggleModal}>Add Video</li>
            <li className={styles.nav_item}>Logout</li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Nav;


     

