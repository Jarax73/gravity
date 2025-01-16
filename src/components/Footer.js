/* eslint-disable no-undef */
import React from "react";
import styled from "styled-components";

const Section = styled.div`
  border-top: 1px solid #999;
  padding-left: 20%;
  padding-right: 20%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 1023px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  @media (max-width: 767px) {
  }
`;

const FirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 25%;

  & p{
    margin: 0;
  }

 

  @media(max-width: 1023px){
   & img {
      width: 100%;
    }

    & p {
    width: 20%; 
    margin: 0;
    padding: 0;
  }
  }

  @media (max-width: 767px) {
    & img {
      width: 100%;
    }

    & p {
    width: 40%; 
    margin: 0;
    padding: 0;
  }
`;

const First = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FirstTitle = styled.h1`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: left;
  margin: 0;
`;

const FirstList = styled.ul`
  list-style: none;
  text-align: left;
  font-size: 14px;
  margin: 0;
  padding: 0;

  & a {
    text-decoration: none;
    color: #bcbcbc;
  }
`;

const SecondSection = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export default function Footer() {
  return (
    <Section>
      <FirstSection>
        <First>
          <FirstTitle>Gravity Team</FirstTitle>
          <FirstList>
            <li>
              <a href="/">About Us</a>
            </li>
            <li style={{ marginTop: "10px" }}>
              <a href="/">Work with Us</a>
            </li>
          </FirstList>
        </First>
        <p>
          <img
            src={`${process.env.PUBLIC_URL}/logo-light.png`}
            alt="gravity logo"
          />
        </p>
      </FirstSection>
      <SecondSection>
        <p style={{ color: "#BCBCBC" }}>Terms of Use & Privacy Policy</p>
        <p style={{ color: "#BCBCBC" }}>
          ©2022 Gravity Team. All Rights Reserved
        </p>
      </SecondSection>
    </Section>
  );
}
