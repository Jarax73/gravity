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
`;

const Title = styled.h1`
  font-size: 74px;
  font-weight: 600;
  color: white;
`;
const Paragraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: #e5e5e5;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #665dcd 0%, #5fa4e6 45%, #d2ab67 100%);
  border: none;
  font-size: 19px;
  color: white;
  height: 58px;
  width: 190px;
  cursor: pointer;
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
