import LoginForm from "@/components/modal/auth-modal/LoginForm";
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
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

interface SignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignUpFormProps {
  closeModal: () => void;
}

const SignUpForm: FC<SignUpFormProps> = ({ closeModal }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<SignUpForm>();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (user) {
      toast({
        title: "Account created.",
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
                required: "This is required",
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters"
                }
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

        <FormControl isInvalid={!!errors.confirmPassword}>
          <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>

          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="confirm password"
              {...register("confirmPassword", {
                required: "This is required",
                validate: (value: string) => {
                  if (watch("password") !== value) {
                    return "Your passwords do not match";
                  }
                }
              })}
            />
            <InputRightElement width="4.5rem">
              <Button
                colorScheme={!showConfirmPassword ? "green" : "red"}
                h="1.75rem"
                size="sm"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.confirmPassword && errors.confirmPassword.message}
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
        Sign up
      </Button>

      <Flex mt={4} w={"full"} flexDirection={"column"}>
        <Center gap={1} mt={4}>
          Already have an account?
          <Text
            onClick={() => dispatch(setView("login"))}
            cursor={"pointer"}
            fontWeight={600}
            color={"blue.400"}
            textDecoration={"underline"}
          >
            Login
          </Text>
        </Center>
      </Flex>
    </form>
  );
};

export default SignUpForm;
