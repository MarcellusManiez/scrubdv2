import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home.jsx';
import VideoPlayer from '../containers/VideoPlayer.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Login from '../containers/Login.jsx';

const MainRoutes = () => {

  
  return (
    <Router>
      <main>
        <Switch>
          <Route path='/login' component={Login} />
          <Route exact path='/' component={Home} />
          <PrivateRoute exact path='/home' component={Home} />
          <PrivateRoute path='/player/:video_id' component={VideoPlayer} />
          <Route component={Home} />
        </Switch>
      </main>
    </Router>
  );
};


export default MainRoutes;
