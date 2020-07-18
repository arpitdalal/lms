import React from 'react';
import { InputGroup, FormControl } from '../BootstrapWrap';

const Input = ({ text, focus }) => {
  return (
    <React.Fragment>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          <InputGroup.Text id='basic-addon1'>{text}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder='Username' aria-label='Username' aria-describedby='basic-addon1' autoFocus={focus} />
      </InputGroup>
    </React.Fragment>
  );
};

export default Input;
