import React from 'react'

const LoginForm = ({username, password, handleSubmit}) =>{



    return (
      <form onSubmit={ handleSubmit}>
        <div className='form-group'>
          <label >Username</label>
          <input
            className='form-control'
            id='usernameInput'
            placeholder='Enter username'
            {...username}
          />
        </div>
        <div className='form-group'>
          <label >Password</label>
          <input
            className='form-control'
            id='passwordInput'
            placeholder='Password'
            {...password}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    );
}

export default LoginForm