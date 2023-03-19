import { auth } from "@/firebase/clientApp";
import { firebaseAuthErrors } from "@/firebase/firebaseErrors";
import { validateEmailPattern } from "@/helpers/formHelpers";
import { setView } from "@/store/auth-modal/AuthModalSlice";
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast
} from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

interface LoginForm {
  email: string;
  password: string;
}

interface LoginFormProps {
  closeModal: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ closeModal }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm<LoginForm>();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      toast({
        title: "You have successfully logged in.",
        status: "success",
        duration: 3000,
        isClosable: true
      });
      closeModal();
    }
  }, [closeModal, toast, user]);

  useEffect(() => {
    if (error) {
      toast({
        title:
          firebaseAuthErrors[error.message as keyof typeof firebaseAuthErrors],
        status: "error",
        duration: 3000,
        isClosable: true
      });
    }
  }, [error, toast]);

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection={"column"} gap={5}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="name">Email</FormLabel>
          <Input
            id="email"
            placeholder="email"
            {...register("email", {
              required: "This is required",
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
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="password"
              {...register("password", {
                required: "This is required"
              })}
            />
            <InputRightElement width="4.5rem">
              <Button
                colorScheme={!showPassword ? "green" : "red"}
                h="1.75rem"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
      </Flex>

      <Button
        w={"full"}
        mt={4}
        colorScheme="green"
        isLoading={isSubmitting || loading}
        type="submit"
      >
        Login
      </Button>

      <Flex mt={4} w={"full"} flexDirection={"column"}>
        <Center gap={1} mt={4}>
          New here?
          <Text
            onClick={() => dispatch(setView("signup"))}
            cursor={"pointer"}
            fontWeight={600}
            color={"blue.400"}
            textDecoration={"underline"}
          >
            Sign up
          </Text>
        </Center>
      </Flex>
      <Flex mt={2} w={"full"} flexDirection={"column"}>
        <Center gap={1} mt={0}>
          Forgot password?
          <Text
            onClick={() => dispatch(setView("resetPassword"))}
            cursor={"pointer"}
            fontWeight={600}
            color={"blue.400"}
            textDecoration={"underline"}
          >
            Reset password
          </Text>
        </Center>
      </Flex>
    </form>
  );
};
export default LoginForm;
