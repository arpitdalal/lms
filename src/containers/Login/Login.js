import React, { useState } from 'react';
import { Input, H1, PrimaryBtn, SecondaryBtn } from '../../components';
import validation from '../../utils/validation';

import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [ credentials, setCredentials ] = useState({ username: '', password: '' });
  const [ errors, setErrors ] = useState({ username: '', password: '', error: '' });

  const onInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'username':
        return value.length < 1
          ? (setErrors({ ...errors, username: 'Please provide your username!' }),
            setCredentials({ ...credentials, username: '' }))
          : (setCredentials({ ...credentials, username: value }), setErrors({ ...errors, username: '', error: '' }));

      case 'password':
        return value.length < 1
          ? (setErrors({ ...errors, password: 'Please provide your password!' }),
            setCredentials({ ...credentials, password: '' }))
          : (setCredentials({ ...credentials, password: value }), setErrors({ ...errors, password: '', error: '' }));

      default:
        break;
    }
  };

  const onSubmit = () => validation(setIsAuthenticated, credentials, errors, setErrors);

  return (
    <div className='login'>
      <H1 text='Please Login' />
      {errors.error ? <p>{errors.error}</p> : ''}
      <Input
        type='text'
        name='username'
        text='Username'
        focus={true}
        value={credentials.username}
        onChange={(e) => onInputChange(e)}
        required={true}
      />
      {errors.username ? <p>{errors.username}</p> : ''}
      <Input
        type='password'
        name='password'
        text='Password'
        value={credentials.password}
        onChange={(e) => onInputChange(e)}
        required={true}
      />
      {errors.password ? <p>{errors.password}</p> : ''}
      <PrimaryBtn text='Login' onClick={onSubmit} />
      <SecondaryBtn text='Reset' />
    </div>
  );
};

export default Login;
