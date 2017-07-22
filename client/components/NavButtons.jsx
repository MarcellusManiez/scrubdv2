
import React from 'react';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import styles from '../styles/nav.css';
// import Login from '../containers/Login.jsx'

const NavButtons = ({ toggleModal, logout, history }) => (
  <nav className={styles.nav}>
    <ul className={styles.navbar}>
      <li className={styles.nav_item}>
        <Link to='/home'>Logo</Link>
      </li>
      <li className={styles.nav_item}>
        <Link to='/home'>Home</Link>
      </li>
      <li className={styles.nav_item} onClick={toggleModal}>Add Video</li>
      <li className={styles.nav_item} onClick={() => { logout(); history.push('/login'); }}>
          LOGOUT
      </li>
    </ul>
  </nav>
);


export default withRouter(NavButtons);
// <Link onClick={()=> logout()} to='/login'>Logout</Link>
