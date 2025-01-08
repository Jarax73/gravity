import React from "react";
import styled from "styled-components";

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
`;

export default function CryptoMarketSection() {
  return (
    <div
      style={{
        paddingLeft: "370px",
        paddingRight: "370px",
        position: "relative",
      }}
    >
      <img
        src="/assets/background-blob-service-1.png"
        style={{
          position: "absolute",
          top: -850,
          right: 0,
        }}
      />
      <div
        style={{
          width: "620px",
          marginRight: "auto",
          marginLeft: "auto",
          marginBottom: "100px",
        }}
      >
        <h1 style={{ fontSize: "58px", fontWeight: "500" }}>
          Crypto Market Making
        </h1>
        <p style={{ fontSize: "20px" }}>
          We are a global crypto liquidity provider and algorithmic market
          maker. We trade digital assets listed on Centralized Exchanges in over
          15 countries worldwide.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{ width: "370px", display: "flex", flexDirection: "column" }}
        >
          <h2
            style={{ fontSize: "36px", fontWeight: "500", textAlign: "left" }}
          >
            Market Making for Crypto Projects
          </h2>
          <h3 style={{ fontSize: "20px", textAlign: "left" }}>
            Accelerate your token’s journey by boosting its liquidity
          </h3>
          <p style={{ textAlign: "left" }}>
            We invest in building long-term, sustainable relationships and
            support our projects in their growth journey with our services,
            industry expertise and network.
          </p>
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
        </div>
        <div
          style={{
            position: "relative",
            width: "420px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 0,
              position: "absolute",
            }}
          >
            <img
              src="/assets/token-4.png"
              alt="token 4"
              style={{ width: "54px", marginBottom: "-30px" }}
            />
            <img
              src="/assets/shadow-4.png"
              alt="shadow 4"
              style={{ width: "100px", marginTop: "-25px" }}
            />
            <img
              src="/assets/table-4.png"
              alt="table 4"
              style={{ width: "124px", marginTop: "0px", zIndex: 1 }}
            />
            <img
              src="/assets/bar-4.png"
              alt="bar 4"
              style={{ width: "124px", marginTop: "-60px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 0,
              position: "absolute",
              left: 80,
            }}
          >
            <img
              src="/assets/token-1.png"
              alt="token 1"
              style={{ width: "130px", marginBottom: "-30px", zIndex: 2 }}
            />
            <img
              src="/assets/shadow-1.png"
              alt="shadow 1"
              style={{ width: "160px", marginTop: "-85px" }}
            />
            <img
              src="/assets/table-1.png"
              alt="table 1"
              style={{ width: "190px", marginTop: "0px", zIndex: 1 }}
            />
            <img
              src="/assets/bar-1.png"
              alt="bar 1"
              style={{ width: "190px", marginTop: "-130px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 0,
              position: "absolute",
              bottom: 40,
            }}
          >
            <img
              src="/assets/token-3.png"
              alt="token 3"
              style={{ width: "86px", marginBottom: "-30px", zIndex: 2 }}
            />
            <img
              src="/assets/shadow-3.png"
              alt="shadow 3"
              style={{ width: "100px", marginTop: "-50px" }}
            />
            <img
              src="/assets/table-3.png"
              alt="table 3"
              style={{ width: "108px", marginTop: "0px", zIndex: 1 }}
            />
            <img
              src="/assets/bar-3.png"
              alt="bar 3"
              style={{ width: "108px", marginTop: "-50px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 0,
              position: "absolute",
              bottom: 0,
              right: 60,
            }}
          >
            <img
              src="/assets/token-2.png"
              alt="token 2"
              style={{ width: "116px", marginBottom: "-30px", zIndex: 2 }}
            />
            <img
              src="/assets/shadow-2.png"
              alt="shadow 2"
              style={{ width: "120px", marginTop: "-75px" }}
            />
            <img
              src="/assets/table-2.png"
              alt="table 2"
              style={{ width: "150px", marginTop: "0px", zIndex: 1 }}
            />
            <img
              src="/assets/bar-2.png"
              alt="bar 2"
              style={{ width: "150px", marginTop: "-80px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
