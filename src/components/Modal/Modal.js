import React from 'react';
import { Modal } from '../BootstrapWrap/index';
import PrimaryBtn from '../Button/PrimaryBtn';
import SecondaryBtn from '../Button/SecondaryBtn';

const ModalWrap = ({ title, children, lgShow, setLgShow }) => {
  return (
    <Modal size='lg' show={lgShow} onHide={() => setLgShow(false)} aria-labelledby='example-modal-sizes-title-lg'>
      <Modal.Header closeButton>
        <Modal.Title id='example-modal-sizes-title-lg'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <PrimaryBtn text='Submit' />
        <SecondaryBtn text='Close' />
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWrap;
