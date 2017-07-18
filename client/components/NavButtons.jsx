
import React from 'react';
import { Link } from 'react-router-dom'
import styles from '../styles/nav.css'

const NavButtons = ( {toggleModal} ) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navbar}>
        <li className={styles.nav_item}>
          <Link to='/home'>Logo</Link>
        </li>       
        <li className={styles.nav_item}>
          <Link to='/home'>Home</Link>
        </li>       
        <li className={styles.nav_item} onClick={toggleModal}>Add Video</li>
        <li className={styles.nav_item}>
          <Link to='/login'>Logout</Link>
        </li>
      </ul>
    </nav>
  )
}


export default NavButtons