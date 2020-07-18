import React from 'react';

import BtnWrap from './Button';

const PrimaryBtn = ({ text, onClick }) => {
  return <BtnWrap variant='primary' text={text} onClick={onClick} />;
};

export default PrimaryBtn;
