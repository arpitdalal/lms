import React, { useState } from 'react';
import List from './List';
import { PrimaryBtn, ModalWrap } from '../../../components';
import Create from './Create';

const Course = () => {
  const [ lgShow, setLgShow ] = useState(false);
  const [ course, setCourse ] = useState({});

  return (
    <div>
      Course <br />
      <br />
      <PrimaryBtn text='Create New Course' onClick={() => setLgShow(!lgShow)} />
      <List />
      <ModalWrap title='Create New Course' lgShow={lgShow} setLgShow={setLgShow}>
        <Create setCourse={setCourse} />
      </ModalWrap>
    </div>
  );
};

export default Course;
