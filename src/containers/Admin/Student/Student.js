import React, { useState } from 'react';
import { PrimaryBtn, ModalWrap } from '../../../components';
import Create from './Create';
import List from './List';

const Student = () => {
  const [ lgShow, setLgShow ] = useState(false);
  const [ newStudent, setNewStudent ] = useState({});
  const [ listOfStudents, setListOfStudents ] = useState([]);

  const onSubmit = () => {
    const newListOfStudents = [ ...listOfStudents ];
    newListOfStudents.push(newStudent);
    setListOfStudents(newListOfStudents);
  };

  return (
    <div>
      Student <br />
      <br />
      <PrimaryBtn text='Add a student' onClick={() => setLgShow(!lgShow)} />
      <List listOfStudents={listOfStudents} />
      <ModalWrap title='Add a student' text='Add' onClick={onSubmit} lgShow={lgShow} setLgShow={setLgShow}>
        <Create setNewStudent={setNewStudent} />
      </ModalWrap>
    </div>
  );
};

export default Student;
