/* eslint-disable no-undef */
import React from "react";
import LogoPart from "./LogoPart";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20%;
  padding-right: 20%;

  @media (max-width: 1023px) {
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 100px;
  }
`;

const H1 = styled.h1`
  font-weight: 500;
  font-size: 58px;

  @media (max-width: 1023px) {
    font-size: 50px;
  }

  @media (max-width: 767px) {
    font-size: 36px;
  }
`;

const Paragraph = styled.p`
  width: 600px;
  font-size: 20px;
  color: #e5e5e5;

  @media (max-width: 1023px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    width: 90%;
    font-size: 16px;
  }
`;

const ArrowContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 767px) {
    width: 30%;
    & img {
      width: 40px;
    }
  }
`;

const Comment = styled.p`
  width: 678px;
  font-size: 26px;
  color: #e5e5e5 @media (max-width: 1023px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    width: 90%;
    font-size: 18px;
  }
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #e5e5e5;

  @media (max-width: 1023px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const Grade = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;

  @media (max-width: 767px) {
    & img {
      width: 85px;
    }
  }
`;

const Dots = styled.div`
  margin-top: 100px;

  @media (max-width: 767px) {
    margin-top: 50px;

    & img {
      width: 55px;
    }
  }
`;

export default function Partners() {
  return (
    <Section>
      <LogoPart />
      <H1>We are in a good company</H1>
      <Paragraph>
        Our partnerships have delivered great value to our projects and we’re
        happy to share some of their feedback below
      </Paragraph>
      <ArrowContainer>
        <img src={`${process.env.PUBLIC_URL}/assets/arrowLeft.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/assets/arrowRight.png`} alt="" />
      </ArrowContainer>
      <Comment>
        Since 2019, Gravity team has been an astounding market maker for Bitkub.
        They have proven themselves to be one of the most consistent, committed
        and driven market makers on our exchange. Gravity Team has contributed
        high-quality volume and has proven to be very reliable and trustworthy
        partner. We strongly advocate Gravity Team as they have been an
        indispensable part of our market-making team.
      </Comment>
      <Name>Atthakrit Chimplapibul</Name>
      <Grade>
        Co-founder & CEO of Bitkub |
        <img
          src={`${process.env.PUBLIC_URL}/assets/bitkub-logo-light-trimmed.png.png`}
          alt=""
          style={{ marginLeft: "10px" }}
        />
      </Grade>
      <Dots>
        <img src={`${process.env.PUBLIC_URL}/assets/dots.png`} alt="" />
      </Dots>
    </Section>
  );
}
