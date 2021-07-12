import React from 'react';
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { TopSection } from './topSection';
import { Marginer } from "../../components/marginer";
import { Navbar } from '../../components/navbar/index';
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import { Services } from "./services";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;

export function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Navbar />
      </TopSection>
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer>
          <Services />
        </ContentContainer>
        <Marginer direction="vertical" margin="5em" />
        <Marginer direction="vertical" margin="5em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  )
}