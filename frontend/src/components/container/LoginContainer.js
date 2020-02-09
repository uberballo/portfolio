import React, { useState, useEffect } from 'react';
import LoginForm from '../presentational/LoginForm';
import AdminContainer from './AdminContainer';
import LoginService from '../../sevices/logInService';
import useField from '../../helpers/useField'
import AdminService from '../../sevices/adminService'
import adminService from '../../sevices/adminService';


const LoginContainer = () => {
  const username = useField('text');
  const password = useField('password');

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    const loggedAdminJSON = window.localStorage.getItem('admin')
    if (loggedAdminJSON){
      const loggedAdmin = JSON.parse(loggedAdminJSON)
      setLoggedIn(loggedAdmin.admin)
      adminService.setToken(loggedAdmin.token)
    }
  },[])

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await LoginService.logIn(username.value, password.value);
    if (response&& response.token){
      console.log(response)
      setLoggedIn(true)
      AdminService.setToken(response.token)
      window.localStorage.setItem('admin',JSON.stringify(response))
    }
  };

  return (
    <div className='container mt-5'>
      {loggedIn ? (
        <AdminContainer loggedIn={loggedIn}/>
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
