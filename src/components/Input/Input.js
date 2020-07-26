import React from 'react';
import { InputGroup, FormControl } from '../BootstrapWrap';

const Input = ({ text, focus, name, onChange, type, required, value }) => {
  return (
    <React.Fragment>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          <InputGroup.Text id='basic-addon1'>{text}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type={type}
          name={name}
          placeholder={text}
          value={value}
          aria-label={text}
          aria-describedby='basic-addon1'
          autoFocus={focus}
          onChange={onChange}
          required={required}
        />
      </InputGroup>
    </React.Fragment>
  );
};

export default Input;
