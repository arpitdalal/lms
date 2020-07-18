import React from 'react';

import Button from './Button';

const PrimaryBtn = ({ text, onClick }) => {
  return <Button variant='primary' text={text} onClick={onClick} />;
};

export default PrimaryBtn;
