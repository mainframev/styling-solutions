import React from "react";
import Link from "next/link";
import { styled } from "@compiled/react";
import defaultTheme from "../styles/theme";

const StyledNavbarLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;

  > a {
    box-sizing: border-box;
    background: ${defaultTheme.product["400"]};
    font-size: 1rem;
    text-decoration: none;
    color: ${defaultTheme.white["100"]};
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
