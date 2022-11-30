import React from "react";
import Link from "next/link";
import { styled } from "@linaria/react";
import { defaultTheme } from "../styles/theme";

const StyledNavbarLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;

  > a {
    box-sizing: border-box;
    background: #000;
    font-size: 1rem;
    text-decoration: none;
    color: #fff;
    transition: background 0.2s ease-in;
    padding: 10px 12px;
    border-radius: 6px;
    &:hover {
      background: ${defaultTheme.product["500"]};
    }
  }
`;

const NavbarLinks = () => {
  return (
    <StyledNavbarLinks>
      <Link href="/">Home</Link>
      <Link href="/second">Second Page</Link>
      <Link href="/third">Third Page</Link>
    </StyledNavbarLinks>
  );
};

export default NavbarLinks;
