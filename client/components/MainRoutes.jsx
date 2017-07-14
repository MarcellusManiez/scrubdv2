import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../containers/Home.jsx'
import VideoPlayer from '../containers/VideoPlayer.jsx'
import PrivateRoute from './PrivateRoute.jsx' 
import Login from '../containers/Login.jsx' 
import styles from '../styles/main.css'

const MainRoutes = () => {
  return (
  <main className={styles.container}>
    <Router>
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute exact path='/' component={Home}/>
        <PrivateRoute exact path='/home' component={Home}/>
        <PrivateRoute exact path='/player' component={VideoPlayer}/>
      </Switch>

    </Router>
  </main>
  );
};


export default MainRoutes;


// import React from 'react'
// import ReactDOM from 'react-dom'
// import axios from 'axios';
// import LandingPage from './Landing.jsx' 
// import Events from './Events.jsx' 
// import EventDetail from './EventDetail.jsx' 
// import PrivateRoute from './PrivateRoute.jsx' 
// import { BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';

// class Routes extends React.Component {

//   render () {

//     return (
//       <Router>
//         <Switch>  
//           <Route exact path='/' component={LandingPage}/>
//           <PrivateRoute exact path='/events' component={Events}/>
//           <PrivateRoute path='/events/:id' component={EventDetail}/>
//         </Switch>
//      </Router>
//     )
//   }
// }

// export default Routes;

        


