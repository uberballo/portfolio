import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../presentational/Header';
import CodeCard from '../presentational/CodeCard';
import About from '../presentational/About';

const temp = {
  id: 1,
  title: 'koodi1',
  language: 'Java',
  url: 'github.com',
  description: 'kuvaus1',
  code: 'for looppi',
  createdAt: '2020-02-06T13:07:07.049Z',
  updatedAt: '2020-02-06T13:07:07.049Z'
};

const HomePageContainer = () => {
  return (
    <div className='HomePageContainer'>
      <Router>
        <Header />
        <body>
          <Route exact path='/' render={() => <CodeCard data={temp} />} />
          <Route path='/about' render={() => <About />} />
      </body>
        </Router>
    </div>
  );
};

export default HomePageContainer;
