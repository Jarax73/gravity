import React from "react";
import styled from "styled-components";
import MarketMaking from "./MarketMaking";
// import useWindowSize from "../utils/useWindowSize";

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

const Section = styled.section`
  padding-left: 20%;
  padding-right: 20%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1023px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  @media (max-width: 767px) {
    // padding-left: 20%;
    // padding-right: 20%;
  }
`;

const Market = styled.div`
  width: 55%;
  margin-bottom: 100px;

  @media (max-width: 1023px) {
    width: 70%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const TitleMarket = styled.h1`
  font-size: 58px;
  font-weight: 500;

  @media (max-width: 1023px) {
    font-size: 50px;
  }

  @media (max-width: 767px) {
    font-size: 36px;
  }
`;

const ParagraphMarket = styled.p`
  font-size: 20px;
  color: #e5e5e5;

  @media (max-width: 1023px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: -810px;
  right: 0;

  @media (max-width: 1023px) {
    width: 250%;
    top: -550px;
    right: -300px;
  }

  @media (max-width: 767px) {
    width: 350%;
    top: -200px;
    right: -350px;
  }
`;

export default function CryptoMarketSection() {
  // const width = useWindowSize();

  return (
    <Section>
      <BackgroundImage src="/assets/background-blob-service-1.png" alt="" />
      <Market>
        <TitleMarket>Crypto Market Making</TitleMarket>
        <ParagraphMarket>
          We are a global crypto liquidity provider and algorithmic market
          maker. We trade digital assets listed on Centralized Exchanges in over
          15 countries worldwide.
        </ParagraphMarket>
      </Market>

      <MarketMaking />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "100px",
          width: "100%",
        }}
      >
        <div>
          <div style={{ position: "relative" }}>
            <img
              src="/assets/div.png"
              alt="div"
              style={{ position: "absolute", left: -100, top: 0 }}
            />
            <img
              src="/assets/exchange-screens-new.png"
              alt="exchange"
              style={{ position: "absolute", left: 0, zIndex: 1 }}
            />
            <img
              src="/assets/grid.png"
              alt="grid"
              style={{ position: "absolute", top: 200 }}
            />
          </div>
        </div>
        <div
          style={{ width: "370px", display: "flex", flexDirection: "column" }}
        >
          <h2
            style={{ fontSize: "36px", fontWeight: "500", textAlign: "left" }}
          >
            Market Making for Crypto Exchanges
          </h2>
          <h3 style={{ fontSize: "20px", textAlign: "left" }}>
            Attract more traders and projects with deep order books & liquidity
          </h3>
          <p style={{ textAlign: "left", color: "#E5E5E5" }}>
            Our world-class market making services are proven to help local and
            emerging exchanges win traders and gain market-leading positions of
            up to 90% market dominance.
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
      </div>

      <div
        style={{
          marginTop: "300px",
          display: "flex",
          width: "100%",
          height: "750px",
        }}
      >
        <div
          style={{
            width: "100%",
            gap: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div style={{ position: "relative" /*border: "1px solid white"*/ }}>
            <img
              src="/assets/middle-left-2.png"
              alt=""
              style={{
                position: "absolute",
                left: -550,
                top: -150,
              }}
            />
            <div>
              <img
                src="/assets/near.png"
                alt=""
                style={{
                  // width: "73px",
                  position: "absolute",
                  left: -30,
                  top: 70,
                }}
              />
              <img
                src="/assets/solana.png"
                alt=""
                style={{
                  // width: "96px",
                  position: "absolute",
                  left: -80,
                  top: 200,
                }}
              />
              <img
                src="/assets/mena.png"
                alt=""
                style={{
                  // width: "72px",
                  position: "absolute",
                  left: 65,
                  top: 150,
                }}
              />
            </div>
          </div>
          <div style={{ width: "400px" }}>
            <h1
              style={{ fontWeight: "500", fontSize: "60px", textAlign: "left" }}
            >
              Our Partners & Friends
            </h1>
          </div>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 25,
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{
                width: "190px",
                height: "190px",
                border: "1px solid #415572",
                background:
                  "linear-gradient(to bottom, rgba(65, 85, 114, 0.15), rgba(27, 27, 30, 0.10))",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/assets/bithumb@2x.png.png" alt="" style={{}} />
              <p style={{ color: "#999" }}>Bithumb</p>
            </div>
            <div
              style={{
                width: "190px",
                height: "190px",
                border: "1px solid #415572",
                background:
                  "linear-gradient(to bottom, rgba(65, 85, 114, 0.15), rgba(27, 27, 30, 0.10))",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/assets/bitbank@2x.png.png" alt="" style={{}} />
              <p style={{ color: "#999" }}>Bitbank</p>
            </div>
            <div
              style={{
                width: "190px",
                height: "190px",
                border: "1px solid #415572",
                background:
                  "linear-gradient(to bottom, rgba(65, 85, 114, 0.15), rgba(27, 27, 30, 0.10))",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/assets/binance@2x.png.png" alt="" style={{}} />
              <p style={{ color: "#999" }}>Binance</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 25,
              alignSelf: "flex-end",
            }}
          >
            <div
              style={{
                width: "190px",
                height: "190px",
                border: "1px solid #415572",
                background:
                  "linear-gradient(to bottom, rgba(65, 85, 114, 0.15), rgba(27, 27, 30, 0.10))",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/assets/bitstamp@2x.png.png" alt="" style={{}} />
              <p style={{ color: "#999" }}>Bitstamp</p>
            </div>
            <div
              style={{
                width: "190px",
                height: "190px",
                border: "1px solid #415572",
                background:
                  "linear-gradient(to bottom, rgba(65, 85, 114, 0.15), rgba(27, 27, 30, 0.10))",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/assets/coinbase@2x.png.png" alt="" style={{}} />
              <p style={{ color: "#999" }}>Coinbase</p>
            </div>
            <div
              style={{
                width: "190px",
                height: "190px",
                border: "1px solid #415572",
                background:
                  "linear-gradient(to bottom, rgba(65, 85, 114, 0.15), rgba(27, 27, 30, 0.10))",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/assets/bitfinex@2x.png.png" alt="" style={{}} />
              <p style={{ color: "#999" }}>Bitfinex</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
