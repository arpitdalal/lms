import React, { useState, useEffect } from 'react';
import { PrimaryBtn, ModalWrap, Input } from '../../../components';
import Create from './Create';
import List from './List';

const Student = () => {
  const [ isCreate, setIsCreate ] = useState(true);
  const [ lgShow, setLgShow ] = useState(false);
  const [ newStudent, setNewStudent ] = useState({});
  const [ originalListOfStudents, setOriginalListOfStudents ] = useState([
    {
      id: 1,
      studentId: 10,
      studentName: 'John',
      studentEmail: 'john@gmail.com',
      courseCategory: 2,
      courseName: 4
    },
    {
      id: 2,
      studentId: 125,
      studentName: 'Mike',
      studentEmail: 'mike@mikeharrington.com',
      courseCategory: 1,
      courseName: 1
    }
  ]);
  const [ listOfStudents, setListOfStudents ] = useState([
    {
      id: 1,
      studentId: 10,
      studentName: 'John',
      studentEmail: 'john@gmail.com',
      courseCategory: 2,
      courseName: 4
    },
    {
      id: 2,
      studentId: 125,
      studentName: 'Mike',
      studentEmail: 'mike@mikeharrington.com',
      courseCategory: 1,
      courseName: 1
    }
  ]);

  useEffect(
    () => {
      setNewStudent({});
    },
    [ lgShow, setNewStudent ]
  );

  const onNewStudent = () => {
    const newListOfStudents = [ ...listOfStudents ];
    newListOfStudents.push(newStudent);
    setListOfStudents(newListOfStudents);
  };

  const onEditStudent = () => {
    const newStudents = listOfStudents.map((student) => {
      return student.id === newStudent.id ? newStudent : student;
    });

    setListOfStudents(newStudents);
    setIsCreate(true);
  };

  const editStudent = (student) => {
    setLgShow(true);
    setNewStudent(student);
    setIsCreate(false);
  };

  const filterStudents = (e) => {
    const value = e.target.value;
    const filteredStudents = originalListOfStudents.filter((student) =>
      student.studentName.toLowerCase().includes(value.toLowerCase())
    );

    setListOfStudents(value === '' ? originalListOfStudents : filteredStudents);
  };

  return (
    <div>
      Student <br />
      <br />
      <PrimaryBtn text='Add a student' onClick={() => setLgShow(!lgShow)} />
      <div style={{ maxWidth: '600px', margin: '0 auto', marginTop: '10px' }}>
        <Input type='text' name='filter' text='Filter By Name' autofocus={true} onChange={filterStudents} />
      </div>
      <List listOfStudents={listOfStudents} onClick={(student) => editStudent(student)} />
      <ModalWrap
        title='Add a student'
        text='Add'
        onClick={isCreate ? onNewStudent : onEditStudent}
        lgShow={lgShow}
        setLgShow={setLgShow}
        setIsCreate={setIsCreate}
      >
        <Create newStudent={newStudent} setNewStudent={setNewStudent} />
      </ModalWrap>
    </div>
  );
};

export default Student;
