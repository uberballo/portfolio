import React, {useState} from 'react'
import LoginService from '../../sevices/logInService'

const useField = type => {
  const [value, setValue] = useState('')

  const onChange = event => {
    setValue(event.target.value)
  }
  return {
    type,
    value,
    onChange
  }
}


const LoginForm = ({setLoggedIn}) =>{
    const username = useField('text')
    const password = useField('password')

const handleSubmit= async (e) =>{
  e.preventDefault()
  const response = await LoginService.logIn(username.value, password.value)
  setLoggedIn(response && response.loggedIn)
}


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