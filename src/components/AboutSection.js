import React from "react";
import styled from "styled-components";
import useWindowSize from "../utils/useWindowSize";

const Section = styled.section`
  height: 900px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 100px auto;
`;

const Title = styled.h1`
  color: white;
  font-size: 56px;
  font-weight: 500;

  @media (max-width: 1023px) {
    font-size: 50px;
  }

  @media (max-width: 767px) {
    font-size: 36px;
  }
`;

const Paragraph = styled.p`
  color: white;
  font-size: 20px;
  width: 32%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1023px) {
    width: 51%;
    font-size: 18px;
  }

  @media (max-width: 767px) {
    width: 85%;
    font-size: 16px;
  }
`;

const Table = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 270px 270px 270px 270px;
  justify-content: center;
  margin-top: 100;

  @media (max-width: 1023px) {
    grid-template-columns: 210px 210px 210px;
    justify-content: center;
  }

  @media (max-width: 767px) {
    grid-template-columns: 45% 45%;
    justify-content: center;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 1px solid transparent;
`;
const CardsTitle = styled.h1`
  font-size: 38px;
  font-weight: 500;

  @media (max-width: 1023px) {
   font-size: 26px;
  }

  @media (max-width: 767px) {
    font-size: 20px
`;

const CardsParagraph = styled.p`
  font-weight: 18px;

  @media (max-width: 1023px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const data = [
  {
    id: 0,
    title: "~$100 billion",
    paragraph: "cumulative trading volume to date",
  },
  {
    id: 1,
    title: "0.8 %",
    paragraph: "of the global crypto spot trading volume",
  },
  {
    id: 2,
    title: "~30",
    paragraph: "Gravity Teammates (& growing)",
  },
  {
    id: 3,
    title: "25+",
    paragraph: "leading global and local crypto exchanges",
  },
  {
    id: 4,
    title: "2017",
    paragraph: "start, crypto-natives",
  },
  {
    id: 5,
    title: "1,200+",
    paragraph: "of the global crypto spot trading volume",
  },
  {
    id: 6,
    title: "24/7",
    paragraph: "liquidty",
  },
  {
    id: 7,
    title: "5 billion+",
    paragraph: "trades done to date",
  },
];

export default function AboutSection() {
  const width = useWindowSize();
  return (
    <Section>
      <div>
        <Title>About Gravity Team</Title>
        <Paragraph>
          At Gravity Team, we are on the mission to balance the supply and
          demand across crypto markets worldwide. We are a crypto native market
          maker founded by traders, developers, and innovators who are strong
          believers and supporters of the future of decentralization and digital
          assets.
        </Paragraph>
      </div>

      <Table>
        {data &&
          data.map((d) => (
            <Cards
              key={d.id}
              style={{
                background:
                  d.id === 1 &&
                  "linear-gradient(90deg, #665dcd 0%, #5fa4e6 45%, #d2ab67 100%)",
                borderImage:
                  "linear-gradient(90deg, #665dcd, #5fa4e6, #d2ab67) 1",
                borderLeft:
                  width > 1023 && (d.id === 0 || d.id === 4)
                    ? "none"
                    : "1px solid transparent",
                borderRight:
                  width > 1023 && (d.id === 3 || d.id === 7)
                    ? "none"
                    : "1px solid transparent",
                borderTop:
                  width > 1023 && (d.id === 0 || d.id === 3)
                    ? "none"
                    : "1px solid transparent",
                borderBottom:
                  width > 1023 && (d.id === 4 || d.id === 7)
                    ? "none"
                    : "1px solid transparent",
              }}
            >
              <CardsTitle>{d.title}</CardsTitle>
              <CardsParagraph>{d.paragraph}</CardsParagraph>
            </Cards>
          ))}
      </Table>
    </Section>
  );
}
