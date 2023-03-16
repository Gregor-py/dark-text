import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { FC } from 'react';

const UserMenu: FC = () => {
  return (
    <Menu>
      <MenuButton>
        {/*<Image />*/}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;