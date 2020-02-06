import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../presentational/Header';
import About from '../presentational/About';
import CardContainer from '../container/CardContainer'

const HomePageContainer = () => {
  return (
    <div className='HomePageContainer'>
      <Router>
        <Header />
          <Route exact path='/' render={() => <CardContainer />} />
          <Route path='/about' render={() => <About />} />
        </Router>
    </div>
  );
};

export default HomePageContainer;
