import React from 'react'
import styled from 'styled-components';

// Image import
import navLogo from '../../images/logos/logo300_orange.png';

const NavLogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : '340px')};
  height: ${({ size }) => (size ? size + "px" : '340px')};
  img {
    width: 100%;
    height: 100%;
  }
`;

export function NavLogo(props) {
  const { logoSize } = props;

  return (
    <NavLogoImage size={logoSize}>
      <img src={navLogo} alt="Navigation Logo" />
    </NavLogoImage>
  )
}
