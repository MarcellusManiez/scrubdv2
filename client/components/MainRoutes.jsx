import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../containers/Home.jsx'
import VideoPlayer from '../containers/VideoPlayer.jsx'
import PrivateRoute from './PrivateRoute.jsx' 
import Login from '../containers/Login.jsx' 

const MainRoutes = () => {
  return (
  <main>
    <Router>
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute exact path='/' component={Home}/>
        <PrivateRoute exact path='/home' component={Home}/>
        <PrivateRoute path='/player/:video_id' component={VideoPlayer}/>
      </Switch>
    </Router>
  </main>
  );
};


export default MainRoutes;
        


