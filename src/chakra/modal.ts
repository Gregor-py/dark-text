import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const helpers = createMultiStyleConfigHelpers(['modal', 'dialog'])

export const Modal = helpers.defineMultiStyleConfig({
  baseStyle: {
    dialog: {
      bg: 'bg.200'
    }
  },
})