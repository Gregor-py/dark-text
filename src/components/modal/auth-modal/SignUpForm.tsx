import { setView } from '@/store/auth-modal/AuthModalSlice';
import { Button, Center, Flex, FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

interface SignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: FC = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<SignUpForm>();
  const onSubmit: SubmitHandler<SignUpForm> = data => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection={'column'} gap={5}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor='name'>Email</FormLabel>
          <Input
            id='email'
            placeholder='email'
            {...register('email', {
              required: 'This is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        
        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input
            id='password'
            placeholder='password'
            {...register('password', {
              required: 'This is required'
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        
        <FormControl isInvalid={!!errors.confirmPassword}>
          <FormLabel htmlFor='confirmPassword'>Confirm password</FormLabel>
          <Input
            id='confirmPassword'
            placeholder='confirm password'
            {...register('confirmPassword', {
              required: 'This is required',
              validate: (value: string) => {
                if (watch('password') !== value) {
                  return 'Your passwords do not match';
                }
              }
            })}
          />
          <FormErrorMessage>
            {errors.confirmPassword && errors.confirmPassword.message}
          </FormErrorMessage>
        </FormControl>
      </Flex>
      
      <Button w={'full'} mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Sign up
      </Button>
      
      <Flex mt={4} w={'full'} flexDirection={'column'}>
        <Center gap={1} mt={4}>
          Already have an account?
          <Text
            onClick={() => dispatch(setView('login'))}
            cursor={'pointer'}
            fontWeight={600}
            color={'blue.400'}
            textDecoration={'underline'}
          >
            Login
          </Text>
        </Center>
      </Flex>
    </form>
  );
};

export default SignUpForm;