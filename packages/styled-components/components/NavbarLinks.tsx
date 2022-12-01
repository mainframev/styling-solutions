import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

const StyledNavbarLinks = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 12px;

    > a {
      box-sizing: border-box;
      background: ${theme.product["400"]};
      font-size: 1rem;
      text-decoration: none;
      color: ${theme.white["100"]};
      transition: background 0.2s ease-in;
      padding: 10px 12px;
      border-radius: 6px;
      &:hover {
        background: ${theme.product["500"]};
      }
    }
  `};
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
