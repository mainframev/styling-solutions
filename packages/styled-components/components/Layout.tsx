import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const StyledMain = styled.main`
  height: 100%;
  max-width: 1100px;
  padding: 2rem 20px;
  margin: 0 auto;
`;

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Navbar />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default Layout;
