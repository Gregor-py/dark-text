import LoginForm from '@/components/modal/auth-modal/LoginForm';
import SignUpForm from '@/components/modal/auth-modal/SignUpForm';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import React, { FC } from 'react';
import ResetPasswordForm from './ResetPasswordForm';

const AuthModal: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const view = useTypedSelector((state) => state.authModal.view);
  return (
    <>
      <Button colorScheme={'blue'} onClick={onOpen}>Open Modal</Button>
      
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {view === 'signup' && 'Create your account'}
            {view === 'login' && 'Login'}
            {view === 'resetPassword' && 'Reset password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {view === 'login' && <LoginForm closeModal={onClose} />}
            {view === 'signup' && <SignUpForm closeModal={onClose} />}
            {view === 'resetPassword' && <ResetPasswordForm />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;