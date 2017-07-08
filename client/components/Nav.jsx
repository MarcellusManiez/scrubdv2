import React from 'react';
// import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
// import AppBar from 'material-ui/Appbar';
// import MenuItem from 'material-ui/MenuItem';
import VideoInput from './VideoInput.jsx'
import styles from '../styles/nav.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navbar}>
        <li className={styles.nav_item} onClick={() => console.log('lets go')}>LOGO</li>       
        <li className={styles.nav_item}>Home</li>       
        <li className={styles.video_input_box}>
          <VideoInput />
        </li>       
        <li className={styles.nav_item}>Logout</li>
      </ul>
    </nav>
  );
};

export default Nav;


     
