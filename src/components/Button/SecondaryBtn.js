import React from 'react';

import BtnWrap from './Button';

const SecondaryBtn = ({ text }) => {
  return <BtnWrap variant='secondary' text={text} className='ml-4' />;
};

export default SecondaryBtn;
