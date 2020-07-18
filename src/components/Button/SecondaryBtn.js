import React from 'react';

import Button from './Button';

const SecondaryBtn = ({ text }) => {
  return <Button variant='secondary' text={text} className='ml-4' />;
};

export default SecondaryBtn;
