import { Box, Flex } from "@chakra-ui/react";
import React, { FC } from "react";

interface ButtonsGroup {
  children: React.ReactNode;
  separatorRight?: boolean;
  separatorLeft?: boolean;
}

const ButtonsGroup: FC<ButtonsGroup> = ({
  children,
  separatorRight = false,
  separatorLeft = false
}) => {
  return (
    <Flex alignItems={"center"} gap={2}>
      <Box
        h={5}
        w={"2px"}
        borderRadius={10}
        bg={"blue.500"}
        display={separatorLeft ? "block" : "none"}
      />
      {children}
      <Box
        h={5}
        w={"1.8px"}
        borderRadius={10}
        bg={"blue.500"}
        display={separatorRight ? "block" : "none"}
      />
    </Flex>
  );
};

export default ButtonsGroup;
