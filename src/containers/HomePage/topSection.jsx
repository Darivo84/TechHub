import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../../components/brandLogo/index';
import { Button } from '../../components/button';

// Image import
import TopSectionBgImg from '../../images/landing-page.jpg';

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionBgImg});
  background-position: 0px -150px;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(191, 96, 55, 0.2);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export function TopSection(props) {
  const { children } = props;

  return (
      <TopSectionContainer>
        <BackgroundFilter>
          { children }
          <TopSectionInnerContainer>
            <LogoContainer>
              <BrandLogo />
              <Button>Join Us Today</Button>
            </LogoContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    )
  }