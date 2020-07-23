import React, { useState, useEffect } from 'react';
import { Input, DropdownWrap } from '../../../components';

const Create = ({ setNewStudent }) => {
  const [ student, setStudent ] = useState({});

  useEffect(
    () => {
      setNewStudent(student);
    },
    [ setNewStudent, student ]
  );

  const courses = [ { id: 1, name: 'Frontend' }, { id: 2, name: 'Backend' }, { id: 3, name: 'Database' } ];

  const setStudentObject = (key, value) => {
    setStudent({ ...student, [key]: value });
  };

  return (
    <div className='addStudent'>
      <Input
        type='number'
        name='studentId'
        text='Student ID'
        focus={true}
        onChange={(e) => setStudentObject(e.target.name, e.target.value)}
      />
      <Input
        type='text'
        name='studentName'
        text='Student name'
        onChange={(e) => setStudentObject(e.target.name, e.target.value)}
      />
      <Input
        type='email'
        name='studentEmail'
        text='Student email'
        onChange={(e) => setStudentObject(e.target.name, e.target.value)}
      />
      <DropdownWrap
        name='courseName'
        title='Course name'
        options={courses}
        onChange={(key, value) => setStudentObject(key, value)}
      />
    </div>
  );
};

export default Create;
