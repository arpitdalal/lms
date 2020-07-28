import React, { useState, useEffect } from 'react';
import { PrimaryBtn, ModalWrap } from '../../../components';
import Create from './Create';
import List from './List';

const Student = () => {
  const [ lgShow, setLgShow ] = useState(false);
  const [ newStudent, setNewStudent ] = useState({});
  const [ listOfStudents, setListOfStudents ] = useState([
    {
      studentId: 10,
      studentName: 'John',
      studentEmail: 'john@gmail.com',
      courseCategory: 2,
      courseName: 4
    }
  ]);

  useEffect(
    () => {
      setNewStudent({});
    },
    [ lgShow, setNewStudent ]
  );

  const onSubmit = () => {
    const newListOfStudents = [ ...listOfStudents ];
    newListOfStudents.push(newStudent);
    setListOfStudents(newListOfStudents);
  };

  const editStudent = (student) => {
    setLgShow(true);
    setNewStudent(student);
  };

  return (
    <div>
      Student <br />
      <br />
      <PrimaryBtn text='Add a student' onClick={() => setLgShow(!lgShow)} />
      <List listOfStudents={listOfStudents} onClick={(student) => editStudent(student)} />
      <ModalWrap title='Add a student' text='Add' onClick={onSubmit} lgShow={lgShow} setLgShow={setLgShow}>
        <Create newStudent={newStudent} setNewStudent={setNewStudent} />
      </ModalWrap>
    </div>
  );
};

export default Student;
