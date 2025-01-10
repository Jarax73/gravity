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
        alt=""
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
        <p style={{ fontSize: "20px", color: "#E5E5E5" }}>
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
          <p style={{ textAlign: "left", color: "#E5E5E5" }}>
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

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "100px",
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

      <div style={{ marginTop: "300px", display: "flex", height: "750px" }}>
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
    </div>
  );
}
