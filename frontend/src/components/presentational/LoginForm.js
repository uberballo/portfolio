import React, {useState} from 'react'

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

const LoginForm = () =>{
    const username = useField('text')
    const password = useField('password')
    return (
      <form>
        <div className='form-group'>
          <label for='usernameInput'>Username</label>
          <input
            className='form-control'
            id='usernameInput'
            placeholder='Enter username'
            {...username}
          />
        </div>
        <div className='form-group'>
          <label for='passwordInput'>Password</label>
          <input
            className='form-control'
            id='passwordInput'
            placeholder='Password'
            {...password}
          />
        </div>
        <button type='submit' class='btn btn-primary'>
          Submit
        </button>
      </form>
    );
}

export default LoginForm