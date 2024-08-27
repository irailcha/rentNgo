import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {ModalTitle, ModalContactLink, ModalContact} from './EnterModal.style';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EnterModal = ({isOpen, onClose}) => {


  return (
    <div>
      <Modal
         open={isOpen}
         onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

           <ModalTitle>Contact us to rent a car</ModalTitle>

          <ModalContact >
          <ModalContactLink href="tel:+1234567890">+1234567890</ModalContactLink>
          <ModalContactLink href="example@example.com">example@example.com</ModalContactLink>
          </ModalContact>
        </Box>
      </Modal>
    </div>
  );
}
export default EnterModal;