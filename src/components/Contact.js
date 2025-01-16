/* eslint-disable no-undef */
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 500px;
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 1023px) {
    margin-top: 150px;
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, #665dcd 0%, #5fa4e6 45%, #d2ab67 100%);
  border: none;
  font-size: 20px;
  color: white;
  height: 58px;
  width: 190px;
  cursor: pointer;

  @media (max-width: 1023px) {
    width: 20%;
    height: 10%;
    font-size: 16px;
  }

  @media (max-width: 767px) {
    width: 35%;
    font-size: 14px;
  }
`;

const Img = styled.img`
  position: absolute;
  left: 250px;
  top: 100px;

  @media (max-width: 1023px) {
    top: 150px;
    left: -100px;
  }

  @media (max-width: 767px) {
    width: 100%;
    top: 4%;
    left: 0.1%;
  }
`;

const Img2 = styled.img`
  position: absolute;
  right: 700px;
  top: 0px;

  @media (max-width: 1023px) {
    top: 45%;
    right: 5%;
    width: 30%;
  }

  @media (max-width: 767px) {
    width: 60%;
    top: 10%;
    right: 0%;
  }
`;

const Img3 = styled.img`
  position: absolute;
  right: 300px;
  top: -100px;

  @media (max-width: 1023px) {
    width: 60%;
    top: 5%;
    right: 0%;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const Img4 = styled.img`
  position: absolute;
  right: 450px;
  top: 150px;

  @media (max-width: 1023px) {
    top: 30px;
    right: 200px;
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
  width: 30%;
  font-size: 20px
  color: #e5e5e5;

  @media (max-width: 1023px) {
   width: 75%;
    font-size: 16px;
  }

  @media (max-width: 767px) {
   width: 90%;
    font-size: 14px;
  }

`;

export default function Contact() {
  return (
    <Section>
      <Img src={`${process.env.PUBLIC_URL}/assets/blue.png`} alt="" />
      <Img2 src={`${process.env.PUBLIC_URL}/assets/y.png`} alt="" />
      <Img3 src={`${process.env.PUBLIC_URL}/assets/violet.png`} alt="" />
      <Img4 src={`${process.env.PUBLIC_URL}/assets/yy.png`} alt="" />
      <>
        <H1>Contact Us</H1>
        <Paragraph>
          We are always open to discuss new value-adding partnerships. Do reach
          out if you are an exchange or a project looking for liquidity; an
          algorithmic trader or a software developer looking to improve the
          markets with us or just have a great idea you can’t wait to share with
          us!
        </Paragraph>
        <Button>GET IN TOUCH</Button>
      </>
    </Section>
  );
}
