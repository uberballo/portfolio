import React from 'react';

const LoginForm = ({ username, password, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Username</label>
        <input
          className='form-control'
          id='usernameInput'
          placeholder='Enter username'
          data-cy='username'
          {...username}
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          className='form-control'
          id='passwordInput'
          placeholder='Password'
          data-cy='password'
          {...password}
        />
      </div>
      <button type='submit' className='btn btn-primary' data-cy='submit'>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
