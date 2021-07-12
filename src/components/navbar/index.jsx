import React from 'react';
import styled from 'styled-components';
import { NavLogo } from '../navLogo';
import { Button } from '../button';
import { Marginer } from "../marginer";

const NavbarContainer = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
`;

const MenuContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AtagLinks = styled.a`
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    color: #bf6037;
  }
`;

const VerticalSeparator = styled.div`
  height: 33%;
  width: 1px;
  background-color: #fff;
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <NavLogo logoSize={100} />
      <MenuContainer>
        <AtagLinks>Specialists</AtagLinks>
        <Marginer direction="horizontal" margin={10} />
        <VerticalSeparator />
        <Marginer direction="horizontal" margin={10} />
        <Button size={13}>Register</Button>
        <Marginer direction="horizontal" margin={8} />
        <AtagLinks>Login</AtagLinks>
      </MenuContainer>
    </NavbarContainer>
  )
}
