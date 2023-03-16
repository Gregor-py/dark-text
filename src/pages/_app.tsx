import { theme } from '@/chakra/theme';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '@/firebase/clientApp';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
