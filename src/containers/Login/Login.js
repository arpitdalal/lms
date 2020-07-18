import React from 'react';
import { Input, H1, PrimaryBtn, SecondaryBtn } from '../../components';

import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  return (
    <div className='login'>
      <H1 text='Please Login' />
      <Input text='Username' focus={true} />
      <Input text='Password' />
      <PrimaryBtn
        text='Login'
        onClick={() => {
          setIsAuthenticated(true);
        }}
      />
      <SecondaryBtn text='Reset' />
    </div>
  );
};

export default Login;
