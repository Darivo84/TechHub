import React from 'react';
import styled from 'styled-components';

// Image import
import Logo from '../../images/logos/logo300_white.png';

const BrandLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : '340px')};
  height: ${({ size }) => (size ? size + "px" : '340px')};
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "50px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 700;
  margin: 0px 25px ;
`;

export function BrandLogo(props) {
  const { logoSize, textSize } = props;

  return (
    <BrandLogoContainer>
      <LogoImage size={logoSize}>
        <img src={Logo} alt="My Tech Hub Logo" />
      </LogoImage>
      <LogoTitle size={textSize}>your tech solution</LogoTitle>
    </BrandLogoContainer>
  )
}
