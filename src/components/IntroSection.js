import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  width: 33%;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 900px;

  @media (max-width: 1023px) {
    width: 60%;
    height: 800px;
    justify-content: center;
  }

  @media (max-width: 767px) {
    width: 80%;
    height: 500px;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  font-weight: 600;
  color: white;

  @media (max-width: 1023px) {
    font-size: 55px;
  }

  @media (max-width: 767px) {
    font-size: 35px;
  }
`;
const Paragraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: #e5e5e5;

  @media (max-width: 1023px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, #665dcd 0%, #5fa4e6 45%, #d2ab67 100%);
  border: none;
  font-size: 18px;
  color: white;
  height: 58px;
  width: 190px;
  cursor: pointer;

  @media (max-width: 1023px) {
    font-size: 16px;
    width: 150px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    width: 130px;
    height: 38px;
  }
`;

export default function IntroSection() {
  return (
    <Section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Title>
          Balancing <br /> Crypto Markets
        </Title>
        <Paragraph>
          Our fully automated proprietary quantitative trading software provides
          24/7 liquidity to 170+ crypto assets across 25+ centralized spot and
          derivative crypto exchanges.
        </Paragraph>
        <Button>GET IN TOUCH</Button>
      </div>
    </Section>
  );
}
