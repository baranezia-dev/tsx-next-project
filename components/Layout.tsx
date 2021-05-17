import { Box, Container, Heading } from '@chakra-ui/layout';
import Head from 'next/head';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container h="100vh">
      <Heading as="h1">Project Section</Heading>

      <Box>{children}</Box>

      <Box pt="20">
        <p>Copyright 2021 - Project by Bara</p>
      </Box>
    </Container>
  );
};

export default Layout;
