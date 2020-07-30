import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavbarWrap from '../../components/Navbar/Navbar';
import Dashboard from './Dashboard';
import Student from './Student/Student';
import Course from './Course/Course';

const Home = ({ setIsAuthenticated }) => {
  return (
    <React.Fragment>
      <NavbarWrap setIsAuthenticated={setIsAuthenticated} />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/student' component={Student} />
        <Route path='/course' component={Course} />
      </Switch>
    </React.Fragment>
  );
};

export default Home;
