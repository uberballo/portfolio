import React from 'react';

import codeService from './sevices/codeService';
import HomePageContainer from './components/container/HomePageContainer';
import './App.css';

function App() {
  codeService.getCode();
  return (
    <div className='App'>
      <HomePageContainer/>
    </div>
  );
}

export default App;
