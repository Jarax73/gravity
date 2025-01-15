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

export default function Partners() {
  return (
    <Section>
      <LogoPart />
      <h1 style={{ fontWeight: "500", fontSize: "58px" }}>
        We are in a good company
      </h1>
      <p style={{ width: "600px", fontSize: "20px", color: "#E5E5E5" }}>
        Our partnerships have delivered great value to our projects and we’re
        happy to share some of their feedback below
      </p>
      <div
        style={{
          width: "10%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <img src="/assets/arrowLeft.png" alt="" />
        <img src="/assets/arrowRight.png" alt="" />
      </div>
      <p
        style={{
          width: "678px",
          fontSize: "26px",
          fontWeight: "normal",
          color: "#E5E5E5",
        }}
      >
        Since 2019, Gravity team has been an astounding market maker for Bitkub.
        They have proven themselves to be one of the most consistent, committed
        and driven market makers on our exchange. Gravity Team has contributed
        high-quality volume and has proven to be very reliable and trustworthy
        partner. We strongly advocate Gravity Team as they have been an
        indispensable part of our market-making team.
      </p>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        Atthakrit Chimplapibul
      </p>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          fontSize: "14px",
        }}
      >
        Co-founder & CEO of Bitkub |
        <img
          src="/assets/bitkub-logo-light-trimmed.png.png"
          alt=""
          style={{ marginLeft: "10px" }}
        />
      </p>
      <p style={{ marginTop: "100px" }}>
        <img src="/assets/dots.png" alt="" />
      </p>
    </Section>
  );
}
