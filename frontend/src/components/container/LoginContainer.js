import React, { useState } from 'react';
import LoginForm from '../presentational/LoginForm';
import AdminContainer from './AdminContainer';
import LoginService from '../../sevices/logInService';

const useField = type => {
  const [value, setValue] = useState('');

  const onChange = event => {
    setValue(event.target.value);
  };
  return {
    type,
    value,
    onChange
  };
};

const LoginContainer = () => {
  const username = useField('text');
  const password = useField('password');
  //Temporary. Fix logging in
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await LoginService.logIn(username.value, password.value);
    console.log(response)
    setLoggedIn(response&& response.token);
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
