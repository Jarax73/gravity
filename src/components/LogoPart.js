import React from "react";
import styled from "styled-components";

export default function LogoPart() {
  return (
    <Section>
      <ImgSection>
        <ImgContainer>
          <Img src="/assets/middle-left-2.png" alt="" />
          <div>
            <Img2 src="/assets/near.png" alt="" />
            <Img3 src="/assets/solana.png" alt="" />
            <Img4 src="/assets/mena.png" alt="" />
          </div>
        </ImgContainer>
        <SectionTitle>
          <H1>Our Partners & Friends</H1>
        </SectionTitle>
      </ImgSection>
      <PartnerFirmContainer>
        <FirstSection>
          <FirmContainer>
            <FirmImg src="/assets/bithumb@2x.png.png" alt="" />
            <FirmLegend>Bithumb</FirmLegend>
          </FirmContainer>
          <FirmContainer>
            <FirmImg src="/assets/bitbank@2x.png.png" alt="" />
            <FirmLegend>Bitbank</FirmLegend>
          </FirmContainer>
          <FirmContainer>
            <FirmImg src="/assets/binance@2x.png.png" alt="" />
            <FirmLegend>Binance</FirmLegend>
          </FirmContainer>
        </FirstSection>
        <SecongSection>
          <FirmContainer>
            <FirmImg src="/assets/bitstamp@2x.png.png" alt="" />
            <FirmLegend>Bitstamp</FirmLegend>
          </FirmContainer>
          <FirmContainer>
            <FirmImg src="/assets/coinbase@2x.png.png" alt="" />
            <FirmLegend>Coinbase</FirmLegend>
          </FirmContainer>
          <FirmContainer>
            <FirmImg src="/assets/bitfinex@2x.png.png" alt="" />
            <FirmLegend>Bitfinex</FirmLegend>
          </FirmContainer>
        </SecongSection>
      </PartnerFirmContainer>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 300px;
  margin-bottom: 300px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 890px;

  @media (max-width: 1023px) {
    height: 720px;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media (max-width: 767px) {
    margin-top: 100px;
    flex-direction: column;
    height: 100%;
    gap: 100px;
  }
`;

const ImgSection = styled.div`
  gap: 300;
  display: flex;
  gap: 350px;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 767px) {
    gap: 220px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  left: -550px;
  top: -150px;

  @media (max-width: 1023px) {
    left: -300px;
    width: 200%;
  }

  @media (max-width: 767px) {
    width: 200%;
    left: -200px;
  }
`;

const Img2 = styled.img`
  position: absolute;
  left: -30px;
  top: 70px;

  @media (max-width: 1023px) {
    left: 30px;
    width: 60px;
  }

  @media (max-width: 767px) {
    width: 50px;
    left: 80px;
    top: -15px;
  }
`;

const Img3 = styled.img`
  position: absolute;
  left: -80px;
  top: 200px;

  @media (max-width: 1023px) {
    width: 70px;
    left: -30px;
  }

  @media (max-width: 767px) {
    width: 60px;
    left: -15px;
    top: 100px;
  }
`;

const Img4 = styled.img`
  position: absolute;
  left: 65px;
  top: 150px;

  @media (max-width: 1023px) {
    width: 70px;
    left: 125px;
  }

  @media (max-width: 767px) {
    width: 60px;
    top: 60px;
    left: 120px;
  }
`;

const SectionTitle = styled.div`
  width: 60%;

  @media (max-width: 1023px) {
    width: 70%;
  }

  @media (max-width: 767px) {
    width: 250px;
  }
`;
const H1 = styled.h1`
  font-weight: 500;
  font-size: 58px;
  text-align: left;

  @media (max-width: 1023px) {
    font-size: 50px;
  }

  @media (max-width: 767px) {
    font-size: 36px;
  }
`;

const PartnerFirmContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-self: flex-start;
`;

const FirmContainer = styled.div`
  width: 190px;
  height: 190px;
  border: 1px solid #415572;
  background: linear-gradient(
    to bottom,
    rgba(65, 85, 114, 0.15),
    rgba(27, 27, 30, 0.1)
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1023px) {
    width: 150px;
    height: 150px;
  }
`;

const FirmImg = styled.img``;

const FirmLegend = styled.p`
  color: #999;
  font-size: 11px;
  text-transform: uppercase;
`;

const SecongSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-self: flex-end;
`;
