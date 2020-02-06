import React, { useState } from 'react';
import LoginForm from '../presentational/LoginForm';
import AdminContainer from './AdminContainer'

const LoginContainer = () => {
  //Temporary. Fix logging in
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className='container mt-5'>{loggedIn ? <AdminContainer/> : <LoginForm setLoggedIn={setLoggedIn}/>}</div>
  );
};

export default LoginContainer;
