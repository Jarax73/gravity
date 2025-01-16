import React from "react";
import styled from "styled-components";
import MarketMaking from "./MarketMaking";
import MarketMakingCrypto from "./MarketMakingCrypto";

const Section = styled.section`
  padding-left: 20%;
  padding-right: 20%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1023px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  @media (max-width: 767px) {
    // padding-left: 20%;
    // padding-right: 20%;
  }
`;

const Market = styled.div`
  width: 55%;
  margin-bottom: 100px;

  @media (max-width: 1023px) {
    width: 70%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const TitleMarket = styled.h1`
  font-size: 58px;
  font-weight: 500;

  @media (max-width: 1023px) {
    font-size: 50px;
  }

  @media (max-width: 767px) {
    font-size: 36px;
  }
`;

const ParagraphMarket = styled.p`
  font-size: 20px;
  color: #e5e5e5;

  @media (max-width: 1023px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: -810px;
  right: 0;

  @media (max-width: 1023px) {
    width: 150%;
    top: -200px;
    right: 10%;
  }

  @media (max-width: 767px) {
    width: 200%;
    top: 0%;
    right: 0%;
  }
`;

export default function CryptoMarketSection() {
  return (
    <Section>
      <BackgroundImage src="/assets/background-blob-service-1.png" alt="" />
      <Market>
        <TitleMarket>Crypto Market Making</TitleMarket>
        <ParagraphMarket>
          We are a global crypto liquidity provider and algorithmic market
          maker. We trade digital assets listed on Centralized Exchanges in over
          15 countries worldwide.
        </ParagraphMarket>
      </Market>

      <MarketMaking />

      <MarketMakingCrypto />
    </Section>
  );
}
