import { auth } from '@/firebase/clientApp';
import { firebaseAuthErrors } from '@/firebase/firebaseErrors';
import { Box, Button, Flex, Image, useToast } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

interface OAuthButtons {
  closeModal: () => void;
}

const OAuthButtons: FC<OAuthButtons> = ({closeModal}) => {
  const toast = useToast()
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleClick = async () => {
    await signInWithGoogle();
  };
  
  useEffect(() => {
    if (user) {
      toast({
        title: 'Success',
        status: 'success',
        duration: 3000,
        isClosable: true
      });
      closeModal();
    }
  }, [user]);
  
  useEffect(() => {
    if (error) {
      toast({
        title: firebaseAuthErrors[error.message as keyof typeof firebaseAuthErrors],
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
  }, [error]);
  
  return (
    <Box>
      <Button onClick={handleClick} isLoading={loading} bg={'whiteAlpha.900'} color={'black'} colorScheme={''} w={'full'}>
        <Flex alignItems={'center'} gap={5}>
          <Image src={'images/google.png'} w={25} h={25} />
          <Box>
            Continue with google
          </Box>
        </Flex>
      </Button>
      <Flex mt={3} alignItems={'center'} gap={5} justifyContent={'space-between'}>
        <Box h={'1px'} w={'full'} bg={'white'} />
        OR
        <Box h={'1px'} w={'full'} bg={'white'} />
      </Flex>
    </Box>
  );
};

export default OAuthButtons;