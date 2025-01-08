import React from "react";
import styled from "styled-components";
import useWindowSize from "../utils/useWindowSize";

const Section = styled.section`
  height: 900px;
  color: white;
  margin-left: 370px;
  margin-right: 370px;
  padding-left: 194px;
  padding-right: 194px;
`;

const Title = styled.h1`
  color: white;
  font-size: 56px;
  font-weight: 500;
`;

const Paragraph = styled.p`
  color: white;
  font-size: 20px;
  width: 529px;
  margin-left: auto;
  margin-right: auto;
`;

export default function AboutSection() {
  const width = useWindowSize();
  return (
    <Section>
      <Title>About Gravity Team</Title>
      <Paragraph>
        At Gravity Team, we are on the mission to balance the supply and demand
        across crypto markets worldwide. We are a crypto native market maker
        founded by traders, developers, and innovators who are strong believers
        and supporters of the future of decentralization and digital assets.
      </Paragraph>

      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
          marginTop: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: width < 789 ? "wrap" : "nowrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "235px",
              height: "130px",
              padding: "25px",
              border: "1px solid transparent",
              borderLeft: width < 789 ? "1px solid transparent" : "none",
              borderTop: width < 789 ? "1px solid transparent" : "none",
              borderImage:
                "linear-gradient(90deg, #665dcd, #5fa4e6, #d2ab67) 1",
            }}
          >
            <h1 style={{ fontSize: "38px", fontWeight: "500" }}>
              ~$100 billion
            </h1>
            <p style={{ fontSize: "18px" }}>
              cumulative trading volume to date
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "235px",
              height: "130px",
              padding: "25px",
              border: "1px solid transparent",
              borderTop: width < 789 ? "1px solid transparent" : "none",
              background:
                "linear-gradient(90deg, #665dcd 0%, #5fa4e6 45%, #d2ab67 100%)",
              borderImage:
                "linear-gradient(90deg, #665dcd, #5fa4e6, #d2ab67) 1",
            }}
          >
            <h1 style={{ fontSize: "38px", fontWeight: "500" }}>0.8 %</h1>
            <p style={{ fontSize: "18px" }}>
              of the global crypto spot trading volume
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "235px",
              height: "130px",
              padding: "25px",
              border: "1px solid transparent",
              borderTop: width < 789 ? "1px solid transparent" : "none",
              borderImage:
                "linear-gradient(90deg, #665dcd, #5fa4e6, #d2ab67) 1",
            }}
          >
            <h1 style={{ fontSize: "38px", fontWeight: "500" }}>~30</h1>
            <p style={{ fontSize: "18px" }}>Gravity Teammates (& growing)</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "235px",
              height: "130px",
              padding: "25px",
              border: "1px solid transparent",
              borderRight: width < 789 ? "1px solid transparent" : "none",
              borderTop: width < 789 ? "1px solid transparent" : "none",
              borderImage:
                "linear-gradient(90deg, #665dcd, #5fa4e6, #d2ab67) 1",
            }}
          >
            <h1 style={{ fontSize: "38px", fontWeight: "500" }}>25+</h1>
            <p style={{ fontSize: "18px" }}>
              leading global and local crypto exchanges
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: width < 789 ? "wrap" : "nowrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "235px",
              height: "130px",
              padding: "25px",
              borderLeft: width < 789 ? "1px solid transparent" : "none",
              borderBottom: width < 789 ? "1px solid transparent" : "none",
              border: "1px solid transparent",
              borderImage:
                "linear-gradient(90deg, #665dcd, #5fa4e6, #d2ab67) 1",
            }}
          >
            <h1 style={{ fontSize: "38px", fontWeight: "500" }}>2017</h1>
            <p style={{ fontSize: "18px" }}>start, crypto-natives</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "235px",
              height: "130px",
              padding: "25px",
              border: "1px solid transparent",
              borderBottom: width < 789 ? "1px solid transparent" : "none",
              borderImage:
                "linear-gradient(90deg, #665dcd, #5fa4e6, #d2ab67) 1",
            }}
          >
            <h1 style={{ fontSize: "38px", fontWeight: "500" }}>1,200+</h1>
            <p style={{ fontSize: "18px" }}>
              of the global crypto spot trading volume
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "235px",
              height: "130px",
              padding: "25px",
              border: "1px solid transparent",
              borderBottom: width < 789 ? "1px solid transparent" : "none",
              borderImage:
                "linear-gradient(90deg, #665dcd, #5fa4e6, #d2ab67) 1",
            }}
          >
            <h1 style={{ fontSize: "38px", fontWeight: "500" }}>24/7</h1>
            <p style={{ fontSize: "18px" }}>liquidty</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "235px",
              height: "130px",
              padding: "25px",
              border: "1px solid transparent",
              borderRight: width < 789 ? "1px solid transparent" : "none",
              borderBottom: width < 789 ? "1px solid transparent" : "none",
              borderImage:
                "linear-gradient(90deg, #665dcd, #5fa4e6, #d2ab67) 1",
            }}
          >
            <h1 style={{ fontSize: "38px", fontWeight: "500" }}>5 billion+</h1>
            <p style={{ fontSize: "18px" }}>trades done to date</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
