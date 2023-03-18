import { auth } from '@/firebase/clientApp';
import { Avatar, Flex, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import React, { FC } from 'react';
import { MdKeyboardArrowDown, MdLogout } from 'react-icons/md';

interface UserMenu {
  avatarSrc: string | null;
  userName: string | null;
}

const UserMenu: FC<UserMenu> = ({ avatarSrc, userName }) => {
  const handleLogOut = async () => {
    await signOut(auth);
  };
  return (
    <Menu>
      <MenuButton>
        <Flex alignItems={'center'}>
          <Avatar name={userName ? userName : ''} src={avatarSrc ? avatarSrc : ''} />
          <Icon as={MdKeyboardArrowDown} w={8} h={8} />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleLogOut} transition={'all .3s ease'} _hover={{ bg: 'bg.300' }}>
          <Flex alignItems={'center'} gap={4}>
            Log Out
            <Icon as={MdLogout} w={5} h={5} />
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;