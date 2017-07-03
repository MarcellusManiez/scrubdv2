import React from 'react';
// import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
// import AppBar from 'material-ui/Appbar';
// import MenuItem from 'material-ui/MenuItem';
import Search from './Search.jsx'
import styles from '../styles/nav.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <div className={styles.nav_item} onClick={() => console.log('lets go')}>LOGO</div>       
        <div className={styles.nav_item}>Home</div>       
        <div className={styles.nav_item}>Add Video</div>       
        <div className={styles.search_box}>
          <Search />
        </div>       
        <div className={styles.nav_item}>Logout</div>
      </div>
    </nav>
  );
};

export default Nav;


     
