import React from 'react';
import { Modal } from '../BootstrapWrap/index';
import PrimaryBtn from '../Button/PrimaryBtn';
import SecondaryBtn from '../Button/SecondaryBtn';

const ModalWrap = ({ text, title, children, lgShow, setLgShow, onClick }) => {
  return (
    <Modal size='lg' show={lgShow} onHide={() => setLgShow(false)} aria-labelledby='example-modal-sizes-title-lg'>
      <Modal.Header closeButton>
        <Modal.Title id='example-modal-sizes-title-lg'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <PrimaryBtn text={text} onClick={onClick} />
        <SecondaryBtn
          text='Close'
          onClick={() => {
            setLgShow(false);
          }}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWrap;
