import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "10px"
  },
  variants: {
    solid: {
      // bg: 'yellow.400',
      // color: 'text.100',
      // _hover: {
      //   bg: 'yellow.500',
      //   boxShadow: '10px 10px yellow.400'
      // }
    }
  },
  defaultProps: {
    variant: "solid"
  }
};
