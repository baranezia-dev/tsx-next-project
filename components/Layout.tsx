import * as React from "react";
import { Container } from "@chakra-ui/react";
import Footer from "../components/Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Container maxW="container.xl" pt={8} centerContent>
        <main>
          <div>{children}</div>
        </main>
      </Container>
      <Footer />
    </>
  );
};
