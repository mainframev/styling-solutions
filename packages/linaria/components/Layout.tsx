import React from "react";
import Navbar from "../components/Navbar";
import { styled } from "@linaria/react";
import { containerMixin } from "../styles/mixins";

// we cannot interpolate containerMixin here as we get used to do in styled-components
const StyledMain = styled.main`
  margin-top: 2rem;
  height: 100%;
`;

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Navbar />
      <StyledMain className={containerMixin}>{children}</StyledMain>
    </>
  );
};

export default Layout;
