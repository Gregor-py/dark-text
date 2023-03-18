import LoginForm from '@/components/modal/auth-modal/LoginForm';
import OAuthButtons from '@/components/modal/auth-modal/OAuthButtons';
import SignUpForm from '@/components/modal/auth-modal/SignUpForm';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setIsOpen } from '@/store/auth-modal/AuthModalSlice';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import ResetPasswordForm from './ResetPasswordForm';

const AuthModal: FC = () => {
  const dispatch = useDispatch();
  const { view, isOpen } = useTypedSelector((state) => state.authModal);
  const onClose = () => dispatch(setIsOpen(false));
  return (
    <>
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
            {view !== 'resetPassword' && <OAuthButtons closeModal={() => onClose()} />}
            
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