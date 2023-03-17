import { validateEmailPattern } from '@/helpers/formHelpers';
import { setView } from '@/store/auth-modal/AuthModalSlice';
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input, InputGroup,
  InputRightElement,
  Text
} from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = data => console.log(data);
  
  const [showPassword, setShowPassword] = useState(false)
  
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
                value: validateEmailPattern,
                message: "Invalid email address"
              }
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
  
        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={showPassword ? 'text' : 'password'}
              id='password'
              placeholder='password'
              {...register('password', {
                required: 'This is required'
              })}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
      </Flex>
      
      <Button w={'full'} mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Login
      </Button>
      
      <Flex mt={4} w={'full'} flexDirection={'column'}>
        <Center gap={1} mt={4}>
          New here?
          <Text
            onClick={() => dispatch(setView('signup'))}
            cursor={'pointer'}
            fontWeight={600}
            color={'blue.400'}
            textDecoration={'underline'}
          >
            Sign up
          </Text>
        </Center>
      </Flex>
    </form>
  );
};

export default LoginForm;