import { Box, Center, Flex, Icon, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { MdHome } from 'react-icons/md';

const Sidebar: FC = () => {
  interface NavItem {
    href: string;
    icon: IconType;
  }
  
  const navItems: NavItem[] = [
    { href: '/', icon: MdHome }
  ];
  
  return (
    <Flex
      bg={'bg.200'}
      flexDirection={'column'}
      alignItems={'center'} height={'100%'}
      position={'fixed'}
      left={0}
    >
      <Box borderColor={'#313155'} borderBottom={'1px'} w={'full'} pb={3}>
        <Center>
          <Image mt={3} w={12} h={12} src={'images/logo.png'} />
        </Center>
      </Box>
      <Flex grow={1} mt={2} flexDirection={'column'} p={3} justifyContent={'center'} alignItems={'center'} gap={3}>
        {navItems.map(navItem => (
          <Link key={navItem.href} href={navItem.href}>
            <Center
              _hover={{ bg: 'accent.100' }}
              transition={'all 0.2s ease'}
              p={2}
              borderRadius={'full'}
              role={'group'}
            >
              <Icon
                as={navItem.icon} boxSize={7} _groupHover={{ color: 'white' }} transition={'all 0.2s ease'} />
            </Center>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Sidebar;