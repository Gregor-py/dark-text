import AuthModal from '@/components/modal/auth-modal/AuthModal';
import { Box, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <Flex>
      <Box>
        <AuthModal />
      </Box>
    </Flex>
  );
};

export default Header;