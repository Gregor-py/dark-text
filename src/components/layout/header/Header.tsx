import UserMenu from "@/components/layout/header/UserMenu";
import AuthModal from "@/components/modal/auth-modal/AuthModal";
import { auth } from "@/firebase/clientApp";
import { setIsOpen } from "@/store/auth-modal/AuthModalSlice";
import { Button, Flex, Icon, Spacer } from "@chakra-ui/react";
import React, { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdLogin } from "react-icons/md";
import { useDispatch } from "react-redux";

const Header: FC = () => {
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);

  return (
    <>
      <Flex alignItems={"center"} h={70}>
        <Spacer />
        {!user || loading ? (
          <Button
            onClick={() => dispatch(setIsOpen(true))}
            colorScheme={"blue"}
          >
            <Flex alignItems={"center"} gap={2}>
              <Icon as={MdLogin} w={25} h={25} />
              Login
            </Flex>
          </Button>
        ) : (
          <UserMenu userName={user.displayName} avatarSrc={user.photoURL} />
        )}
      </Flex>
      <AuthModal />
    </>
  );
};

export default Header;
