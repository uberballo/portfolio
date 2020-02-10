import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../presentational/Header';
import About from '../presentational/About';
import ProjectCardContainer from './ProjectCardContainer'
import LoginContainer from './LoginContainer'

const HomePageContainer = () => {
  return (
    <div className='HomePageContainer'>
      <Router>
        <Header />
          <Route exact path='/' render={() => <ProjectCardContainer />} />
          <Route path='/about' render={() => <About />} />
          <Route path='/admin' render={() => <LoginContainer/>} />
        </Router>
    </div>
  );
};

export default HomePageContainer;
