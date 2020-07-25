import React, { useState } from 'react';
import { PrimaryBtn, ModalWrap } from '../../../components';
import Create from './Create';

const Student = () => {
  const [ lgShow, setLgShow ] = useState(false);
  const [ newStudent, setNewStudent ] = useState({});

  const onSubmit = () => {
    console.log(newStudent);
  };

  return (
    <div>
      Student <br />
      <br />
      <PrimaryBtn text='Add a student' onClick={() => setLgShow(!lgShow)} />
      <ModalWrap title='Create New Course' text='Add' onClick={onSubmit} lgShow={lgShow} setLgShow={setLgShow}>
        <Create setNewStudent={setNewStudent} />
      </ModalWrap>
    </div>
  );
};

export default Student;
