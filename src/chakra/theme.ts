import { Button } from '@/chakra/button';
import { extendTheme } from '@chakra-ui/react';
import { Menu } from './menu';
import { Modal } from './modal';

export const theme = extendTheme({
  colors: {
    text: {
      100: '#FEFEFE',
      200: '#ADBAC3'
    },
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
        bg: 'bg.300',
        color: 'text.200'
      }
    })
  },
  components: {
    Button,
    Modal,
    Menu
  }
});