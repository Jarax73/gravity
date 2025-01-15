import React from "react";
import styled from "styled-components";

const Section = styled.div`
  margin-top: 350px;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1023px) {
    margin-top: 150px;
    padding-left: 5%;
    padding-right: 5%;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 100px;
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
    width: 57%;
    height: 2px;
    margin-top: 10px;
    background: linear-gradient(90deg, #665dcd 0%, #5fa4e6 45%, #d2ab67 100%);
  }

  @media (max-width: 1023px) {
    &::after {
      width: 77%;
    }
  }

  @media (max-width: 767px) {
    &::after {
      width: 82%;
    }
  }
`;

const BackgroundContainer = styled.div`
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  left: -140px;
  top: -100px;
`;
const Img2 = styled.img`
  position: absolute;
  left: 180px;
  top: -100px;
`;

const H1 = styled.h1`
  font-size: 53px;
  width: 100%;
  text-align: left;

  @media (max-width: 1023px) {
    font-size: 45px;
  }

  @media (max-width: 767px) {
    font-size: 31px;
  }
`;

const ParagraphTeam = styled.div`
  width: 42%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    width: 55%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  text-align: left;
  color: #e5e5e5;

  @media (max-width: 1023px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export default function GravityTeam() {
  return (
    <Section>
      <div>
        <BackgroundContainer>
          <Img src="/assets/gravityb.png" alt="" />
          <Img2 src="/assets/gravityy.png" alt="" />
        </BackgroundContainer>
        <div>
          <H1>
            Join <br />
            Gravity Team
          </H1>
        </div>
      </div>
      <ParagraphTeam>
        <Paragraph>
          Join our community of innovators, problem solvers and owners who apply
          scientific discovery techniques to make crypto markets a better place
          for everyone.
        </Paragraph>
        <Paragraph>
          As we emphasize it in our name – Gravity Team, we are a team. A team
          of bright, talented people, each masters of their specialty, curious
          about the world and eager to solve the new exciting cryptocurrency
          market problems, build cool stuff and have fun whilst doing so!
        </Paragraph>
        <div>
          <Link href="#">
            Learn more about working with us
            <img
              src="/assets/a_after.png"
              alt="after"
              style={{ marginLeft: "10px" }}
            />
          </Link>
        </div>
      </ParagraphTeam>
    </Section>
  );
}
