import { auth } from '@/firebase/clientApp';
import { validateEmailPattern } from '@/helpers/formHelpers';
import { setView } from '@/store/auth-modal/AuthModalSlice';
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  useToast
} from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

interface LoginForm {
  email: string;
}

const ResetPasswordForm: FC = () => {
    const dispatch = useDispatch();
    const toast = useToast();
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting }
    } = useForm<LoginForm>();
    const [sendPasswordResetEmail, loading, error] =
      useSendPasswordResetEmail(auth);
    
    useEffect(() => {
      if (error) {
        toast({
          title: 'The account with this email does not exist',
          status: 'error',
          duration: 3000,
          isClosable: true
        });
      }
    }, [error]);
    
    const onSubmit: SubmitHandler<LoginForm> = async (data) => {
      await sendPasswordResetEmail(data.email);
      if (!error?.message) {
        toast({
          title: 'Check your email',
          status: 'success',
          duration: 3000,
          isClosable: true
        });
      }
    };
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection={'column'} gap={5}>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor='name'>Enter the email associated with your account and we will send you a
              reset link</FormLabel>
            <Input
              id='email'
              placeholder='email'
              {...register('email', {
                required: 'This is required',
                pattern: {
                  value: validateEmailPattern,
                  message: 'Invalid email address'
                }
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
        </Flex>
        
        <Button w={'full'} mt={4} colorScheme='green' isLoading={isSubmitting || loading} type='submit'>
          Send reset mail
        </Button>
        
        <Flex mt={4} w={'full'} flexDirection={'column'}>
          <Center gap={1} mt={4}>
            <Text
              onClick={() => dispatch(setView('login'))}
              cursor={'pointer'}
              fontWeight={600}
              color={'blue.400'}
              textDecoration={'underline'}
            >
              Back to login
            </Text>
          </Center>
        </Flex>
      </form>
    );
  }
;

export default ResetPasswordForm;