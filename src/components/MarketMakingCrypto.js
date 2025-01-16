import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ImgSection = styled.div`
  position: relative;
`;

const Img1 = styled.img`
  position: absolute;
  left: -100px;
  top: 0;

  @media (max-width: 767px) {
    width: 150%;
    top: 5%;
    left: -50%;
  }
`;

const Img2 = styled.img`
  position: absolute;
  left: 0;
  z-index: 1;

  @media (max-width: 1023px) {
    width: 380px;
    right: 0;
  }

  @media (max-width: 767px) {
    width: 100%;
    position: relative;
  }
`;
const Img3 = styled.img`
  position: absolute;
  top: 200px;

  @media (max-width: 1023px) {
    width: 380px;
  }

  @media (max-width: 767px) {
    width: 100%;
    left: 0;
  }
`;

const Aside = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    width: 45%;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 100px;
  }
`;

const H2 = styled.h2`
  font-size: 36px;
  font-weight: 500;
  text-align: left;

  @media (max-width: 1023px) {
    font-size: 32px;
  }

  @media (max-width: 767px) {
    font-size: 26px;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  text-align: left;
  color: #e5e5e5;

  @media (max-width: 1023px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const H3 = styled.h3`
  font-size: 20px;
  text-align: left;

  @media (max-width: 1023px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const Link = styled.a`
  position: relative;
  text-decoration: none;
  color: white;
  text-align: left;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 27%;
    height: 2px;
    margin-top: 10px;
    background: linear-gradient(90deg, #665dcd 0%, #5fa4e6 45%, #d2ab67 100%);
  }

  @media (max-width: 1023px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 14px;

    &::after {
      width: 23%;
    }
  }
`;

export default function MarketMakingCrypto() {
  return (
    <Section>
      <div>
        <ImgSection>
          <Img1 src="/assets/div.png" alt="div" />
          <Img2 src="/assets/exchange-screens-new.png" alt="exchange" />
          <Img3 src="/assets/grid.png" alt="grid" />
        </ImgSection>
      </div>
      <Aside>
        <H2>Market Making for Crypto Exchanges</H2>
        <H3>
          Attract more traders and projects with deep order books & liquidity
        </H3>
        <Paragraph>
          Our world-class market making services are proven to help local and
          emerging exchanges win traders and gain market-leading positions of up
          to 90% market dominance.
        </Paragraph>
        <div>
          <Link href="#">
            Learn more
            <img
              src="/assets/a_after.png"
              alt="after"
              style={{ marginLeft: "10px" }}
            />
          </Link>
        </div>
      </Aside>
    </Section>
  );
}
