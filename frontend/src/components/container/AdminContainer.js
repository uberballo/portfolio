import React, { useState } from 'react';
import LoginForm from '../presentational/LoginForm';

const AdminContainer = () => {
  //Temporary. Fix logging in
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='container mt-5'>{loggedIn ? null : <LoginForm />}</div>
  );
};

export default AdminContainer;
