import React, { useState } from 'react';
import List from './List';
import { PrimaryBtn, ModalWrap } from '../../../components';
import Create from './Create';

const Course = () => {
  const [ lgShow, setLgShow ] = useState(false);
  const [ newCourse, setNewCourse ] = useState({});

  const onSubmit = () => {
    console.log(newCourse);
  };

  return (
    <div>
      Course <br />
      <br />
      <PrimaryBtn text='Create New Course' onClick={() => setLgShow(!lgShow)} />
      <List />
      <ModalWrap title='Create New Course' onClick={onSubmit} lgShow={lgShow} setLgShow={setLgShow}>
        <Create setNewCourse={setNewCourse} />
      </ModalWrap>
    </div>
  );
};

export default Course;
