import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    bg: {
      100: '#26273B', // cards bg
      200: '#1D253A', // sidebar bg
      300: '#1B1C31' // main bg
    },
    accent: {
      100: '#624EE3'
    }
  },
  fonts: {
    body: `'Open Sans', sans-serif`
  },
  styles: {
    global: () => ({
      body: {
        bg: 'bg.300'
      }
    })
  }
});