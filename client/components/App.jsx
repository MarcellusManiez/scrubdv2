import React, { Component } from 'react';
import Nav from './Nav.jsx';
import MainRoutes from './MainRoutes.jsx'
import styles from '../styles/main.css'

const App = () => {
  return (
    <div>
      <Nav />
      <MainRoutes className={styles.container}/>
    </div>
  );
}

export default App;
        

