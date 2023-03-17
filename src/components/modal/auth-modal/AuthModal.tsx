import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setView } from '@/store/auth-modal/AuthModalSlice';
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import React, { FC, useRef } from 'react';
import { useDispatch } from 'react-redux';

const AuthModal: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const view = useTypedSelector((state) => state.authModal.view);
  const dispatch = useDispatch();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
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
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>
            
            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
  
            <Flex mt={4} w={'full'} flexDirection={'column'}>
              <Flex justifyContent={'end'}>
                <Button colorScheme='blue' mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </Flex>
              <Center gap={1} mt={4}>
                New here?
                <Text
                  onClick={()=> dispatch(setView('signup'))}
                  cursor={'pointer'}
                  fontWeight={600}
                  color={'blue.400'}
                  textDecoration={'underline'}>
                  Sign up
                </Text>
              </Center>
            </Flex>
          </ModalBody>
          
          
          
          
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;