import React from "react";
import NavbarLinks from "./NavbarLinks";
import styled from "styled-components";
import defaultTheme from "../styles/theme";

const StyledNavbar = styled.div`
  background: ${({ theme }) => theme.white["100"]};
  box-sizing: border-box;
  box-shadow: 0px 0px 2px 0px rgba(37, 42, 49, 0.16), 0px -2px 4px 0px rgba(37, 42, 49, 0.12);
  padding: 20px 0;
  > div {
    max-width: 1100px;
    padding: 0 20px;
    margin: 0 auto;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <div>
        <NavbarLinks />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
