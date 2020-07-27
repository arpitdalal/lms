import React, { useState, useEffect } from 'react';
import { Input, DropdownWrap } from '../../../components';

const Create = ({ setNewStudent, newStudent }) => {
  const [ courseId, setCourseId ] = useState(newStudent.courseCategory || 0);
  const [ student, setStudent ] = useState(newStudent);

  useEffect(
    () => {
      setNewStudent(student);
    },
    [ student, setNewStudent ]
  );

  const courseCategory = [ { id: 1, name: 'Frontend' }, { id: 2, name: 'Backend' }, { id: 3, name: 'Database' } ];
  const courses = [
    { id: 1, courseCategoryId: 1, name: 'React' },
    { id: 2, courseCategoryId: 1, name: 'Angular' },
    { id: 3, courseCategoryId: 1, name: 'Vue' },
    { id: 4, courseCategoryId: 2, name: 'Nodejs' },
    { id: 5, courseCategoryId: 2, name: 'PHP' },
    { id: 6, courseCategoryId: 3, name: 'MongoDB' },
    { id: 7, courseCategoryId: 3, name: 'MySQL' }
  ];

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
        value={student.studentId}
        onChange={(e) => setStudentObject(e.target.name, e.target.value)}
      />
      <Input
        type='text'
        name='studentName'
        text='Student name'
        value={student.studentName}
        onChange={(e) => setStudentObject(e.target.name, e.target.value)}
      />
      <Input
        type='email'
        name='studentEmail'
        text='Student email'
        value={student.studentEmail}
        onChange={(e) => setStudentObject(e.target.name, e.target.value)}
      />
      <DropdownWrap
        name='courseCategory'
        title='Course Category'
        options={courseCategory}
        value={student.courseCategory}
        setSelectedValue={(value) => {
          setCourseId(value);
        }}
        onChange={(key, value) => setStudentObject(key, value)}
      />
      <DropdownWrap
        name='courseName'
        title='Course name'
        value={student.courseName}
        options={courses.filter((course) => course.courseCategoryId === courseId)}
        onChange={(key, value) => setStudentObject(key, value)}
      />
    </div>
  );
};

export default Create;
