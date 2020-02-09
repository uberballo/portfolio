import React, { useState } from 'react';
import LoginForm from '../presentational/LoginForm';
import AdminContainer from './AdminContainer';
import LoginService from '../../sevices/logInService';
import useField from '../../helpers/useField'
import AdminService from '../../sevices/adminService'


const LoginContainer = () => {
  const username = useField('text');
  const password = useField('password');

  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await LoginService.logIn(username.value, password.value);
    if (response&& response.token){
      console.log(response)
      setLoggedIn(true)
      AdminService.setToken(response.token)
    }
  };

  return (
    <div className='container mt-5'>
      {loggedIn ? (
        <AdminContainer />
      ) : (
        <LoginForm
          username={username}
          password={password}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default LoginContainer;
