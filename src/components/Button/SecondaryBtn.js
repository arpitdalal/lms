import React from 'react';

import Button from './Button';

const SecondaryBtn = ({ text, onClick }) => {
  return <Button variant='secondary' onClick={onClick} text={text} className='ml-4' />;
};

export default SecondaryBtn;
