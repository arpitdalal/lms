import React, { useState } from 'react';
import { FormControl, InputGroup, Dropdown, DropdownButton } from '../BootstrapWrap';

const DropdownWrap = ({ name, title, options, setSelectedValue, onChange }) => {
  const [ value, setValue ] = useState('');

  const onDropdownCLick = (e) => {
    setValue(e.target.innerText);
    setSelectedValue && setSelectedValue(Number(e.target.id));

    onChange(e.target.name, Number(e.target.id));
  };

  return (
    <InputGroup className='mb-3'>
      <DropdownButton as={InputGroup.Prepend} variant='outline-secondary' title={title} id='input-group-dropdown-1'>
        {(options || []).map((option) => {
          return (
            <Dropdown.Item key={option.id} name={name} id={option.id} href='#' onClick={(e) => onDropdownCLick(e)}>
              {option.name}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
      <FormControl aria-describedby='basic-addon1' value={value} />
    </InputGroup>
  );
};

export default DropdownWrap;
