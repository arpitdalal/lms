import React, { useState } from 'react';
import { FormControl, InputGroup, Dropdown, DropdownButton } from '../BootstrapWrap';

const DropdownWrap = ({ name, title, options, setSelectedValue, onChange, value }) => {
  const selectedDropdownValue = options.filter((option) => option.id === value);
  const [ dropdownValue, setDropdownValue ] = useState((selectedDropdownValue[0] || []).name);

  const onDropdownCLick = (e) => {
    setDropdownValue(e.target.innerText);
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
      <FormControl aria-describedby='basic-addon1' value={dropdownValue} />
    </InputGroup>
  );
};

export default DropdownWrap;
