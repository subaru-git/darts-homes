import React, { FC } from 'react';
import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { useAuth } from '@/contexts/AuthContext';
import { GoogleLogin, Logout } from '@/lib/Auth';

const UserMenu: FC = () => {
  const user = useAuth();
  return (
    <>
      {user ? (
        <Menu>
          <MenuButton>
            <Avatar name={user.name} src={user.photoURL} size={'sm'} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={Logout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Popover>
          <PopoverTrigger>
            <Button colorScheme={'blue'} size={{ base: 'sm', md: 'md' }}>
              Login
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader border={0} fontWeight='semibold'>
              Login
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <Flex justifyContent={'center'}>
                <GoogleLoginButton onClick={GoogleLogin} aria-label={'login with google'} />
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
};

export default UserMenu;
