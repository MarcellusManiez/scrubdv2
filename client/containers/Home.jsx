import React from 'react';
import Nav from '../components/Nav.jsx'
import main from '../styles/main.css'

const Home = (props) => {
  return (
     <div>
        <Nav />
        <div className={main.container}>
          <h1>Welcome home!</h1>
        </div>
      </div>
  );
};

export default Home;