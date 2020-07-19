import React, { useState } from 'react';
import { Input, H1, PrimaryBtn, SecondaryBtn } from '../../components';

import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  const onInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'username':
        return value.length < 1 ? (setError('Please provide your username'), setUsername('')) : setUsername(value);
      case 'password':
        return value.length < 1 ? (setError('Please provide your password'), setPassword('')) : setPassword(value);
      default:
        break;
    }
  };

  const onLoginSubmit = () => {
    if (username && password !== '') {
      setIsAuthenticated(true);
    } else {
      setError('Please provide your username and password');
    }
  };

  return (
    <div className='login'>
      <H1 text='Please Login' />
      {error ? <p>{error}</p> : ''}
      <Input type='text' name='username' text='Username' focus={true} onChange={(e) => onInputChange(e)} />
      <Input type='password' name='password' text='Password' onChange={(e) => onInputChange(e)} />
      <PrimaryBtn text='Login' onClick={onLoginSubmit} />
      <SecondaryBtn text='Reset' />
    </div>
  );
};

export default Login;
