import React from 'react';
import { InputGroup, FormControl } from './BootstrapWrap';

const Input = (props) => {
  return (
    <React.Fragment>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          <InputGroup.Text id='basic-addon1'>{props.text}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder='Username' aria-label='Username' aria-describedby='basic-addon1' />
      </InputGroup>
    </React.Fragment>
  );
};

export default Input;
