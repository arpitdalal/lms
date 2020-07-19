import React from 'react';
import { Input, DropdownWrap } from '../../../components';

const Create = () => {
  const courses = [ { id: 1, name: 'React' }, { id: 2, name: 'SQL' }, { id: 3, name: 'Nodejs' } ];

  return (
    <div className='addStudent'>
      <Input type='number' name='studentId' text='Student ID' focus={true} />
      <DropdownWrap title='Course name' options={courses} />
    </div>
  );
};

export default Create;
