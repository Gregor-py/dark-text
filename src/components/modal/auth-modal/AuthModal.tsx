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

const AuthModal: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const view = useTypedSelector((state) => state.authModal.view);
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      
      <Modal
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
            {view === 'login' && <LoginForm />}
            {view === 'signup' && <SignUpForm />}
          </ModalBody>
        
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;