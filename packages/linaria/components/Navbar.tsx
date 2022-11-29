import React from "react";
import NavbarLinks from "./NavbarLinks";
import { styled } from "@linaria/react";
import { containerMixin } from "../styles/mixins";

const StyledNavbar = styled.div`
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0px 0px 2px 0px rgba(37, 42, 49, 0.16), 0px -2px 4px 0px rgba(37, 42, 49, 0.12);
  padding: 20px 0; 
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className={containerMixin}>
        <NavbarLinks />
      </div>
    </StyledNavbar>
  )
};

export default Navbar;
