import React, { useState } from 'react';
import { PrimaryBtn, ModalWrap } from '../../../components';
import Create from './Create';

const Student = () => {
  const [ lgShow, setLgShow ] = useState(false);

  return (
    <div>
      Student <br />
      <br />
      <PrimaryBtn text='Add a student' onClick={() => setLgShow(!lgShow)} />
      <ModalWrap title='Create New Course' lgShow={lgShow} setLgShow={setLgShow}>
        <Create />
      </ModalWrap>
    </div>
  );
};

export default Student;
