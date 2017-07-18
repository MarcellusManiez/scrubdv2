
import React, { Component } from 'react';
import styles from '../styles/login.css'
import Nav from '../components/Nav'
import main from '../styles/main.css'

class Login extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className={main.container}>
          <h1>LOGIN!</h1>
        </div>
      </div>
    )
  }
}

export default Login;

        
