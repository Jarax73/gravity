import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 767px) {
    height: 100%;
    flex-direction: column;
  }
`;

const Description = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    width: 45%;
  }

  @media (max-width: 767px) {
    width: 100%;
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

const Paragraph = styled.p`
  text-align: left;
  font-size: 20px
  color: #e5e5e5;

  @media (max-width: 1023px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const D3 = styled.div`
  position: relative;
  width: 35%;

  @media (max-width: 1023px) {
    width: 45%;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    display: none;
  }
`;

const Bloc1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  @media (max-width: 767px) {
    position: relative;
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

const Img1 = styled.img`
  width: 54px;
  margin-bottom: -30px;

  @media (max-width: 767px) {
    width: 35px;
    margin-bottom: 0;
  }
`;

const Img2 = styled.img`
  width: 100px;
  margin-top: -25px;

  @media (max-width: 767px) {
    width: 40px;
  }
`;

const Img3 = styled.img`
  width: 124px;
  margin-top: 0px;
  z-index: 1;

  @media (max-width: 767px) {
    width: 80px;
  }
`;

const Img4 = styled.img`
  width: 124px;
  margin-top: -60px;

  @media (max-width: 767px) {
    width: 80px;
    margin-top: -40px;
  }
`;

const Img5 = styled.img`
  width: 130px;
  margin-bottom: -30px;
  z-index: 2;

  @media (max-width: 767px) {
    width: 80px;
  }
`;

const Img6 = styled.img`
  width: 160px;
  margin-top: -85px;

  @media (max-width: 767px) {
    width: 100px;
    margin-top: -50px;
  }
`;

const Img7 = styled.img`
  width: 190px;
  margin-top: 0px;
  z-index: 1;

  @media (max-width: 767px) {
    width: 150px;
  }
`;

const Img8 = styled.img`
  width: 190px;
  margin-top: -130px;

  @media (max-width: 767px) {
    width: 150px;
    margin-top: -100px;
  }
`;

const Img9 = styled.img`
  width: 86px;
  margin-bottom: -30px;
  z-index: 2;

  @media (max-width: 767px) {
    width: 60px;
  }
`;

const Img10 = styled.img`
  width: 100px;
  margin-top: -50px;

  @media (max-width: 767px) {
    width: 80px;
  }
`;

const Img11 = styled.img`
  width: 108px;
  margin-top: 0px;
  z-index: 1;

  @media (max-width: 767px) {
    width: 80px;
    margin-right: -100px;
  }
`;

const Img12 = styled.img`
  width: 108px;
  margin-top: -50px;
`;

const Img13 = styled.img`
  width: 116px;
  margin-bottom: -30px;
  z-index: 2;

  @media (max-width: 1023px) {
    margin-bottom: -5px;
    margin-right: -40px;
  }
`;

const Img14 = styled.img`
  width: 120px;
  margin-top: -75px;

  @media (max-width: 1023px) {
    margin-top: -100px;
    margin-right: -40px;
  }
`;

const Img15 = styled.img`
  width: 150px;
  margin-top: 0px;
  z-index: 1;

  @media (max-width: 1023px) {
    margin-bottom: 0px;
    margin-right: -40px;
  }
`;

const Img16 = styled.img`
  width: 150px;
  margin-top: -80px;

  @media (max-width: 1023px) {
    margin-bottom: -30px;
    margin-right: -40px;
  }
`;

export default function MarketMaking() {
  return (
    <Section>
      <Description>
        <H2>Market Making for Crypto Projects</H2>
        <H3>Accelerate your token’s journey by boosting its liquidity</H3>
        <Paragraph>
          We invest in building long-term, sustainable relationships and support
          our projects in their growth journey with our services, industry
          expertise and network.
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
      </Description>
      <D3>
        <Bloc1>
          <Img1 src="/assets/token-4.png" alt="token 4" />
          <Img2 src="/assets/shadow-4.png" alt="shadow 4" />
          <Img3 src="/assets/table-4.png" alt="table 4" />
          <Img4 src="/assets/bar-4.png" alt="bar 4" />
        </Bloc1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: 80,
          }}
        >
          <Img5 src="/assets/token-1.png" alt="token 1" />
          <Img6 src="/assets/shadow-1.png" alt="shadow 1" />
          <Img7 src="/assets/table-1.png" alt="table 1" />
          <Img8 src="/assets/bar-1.png" alt="bar 1" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 40,
          }}
        >
          <Img9 src="/assets/token-3.png" alt="token 3" />
          <Img10 src="/assets/shadow-3.png" alt="shadow 3" />
          <Img11 src="/assets/table-3.png" alt="table 3" />
          <Img12 src="/assets/bar-3.png" alt="bar 3" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            right: 60,
          }}
        >
          <Img13 src="/assets/token-2.png" alt="token 2" />
          <Img14 src="/assets/shadow-2.png" alt="shadow 2" />
          <Img15 src="/assets/table-2.png" alt="table 2" />
          <Img16 src="/assets/bar-2.png" alt="bar 2" />
        </div>
      </D3>
    </Section>
  );
}
