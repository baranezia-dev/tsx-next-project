import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ChakraProvider, theme } from '@chakra-ui/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
