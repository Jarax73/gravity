import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: linear-gradient(90deg, #665dcd 0%, #5fa4e6 45%, #d2ab67 100%);
  border: none;
  font-size: 19px;
  color: white;
  height: 58px;
  width: 190px;
  cursor: pointer;
`;

export default function Contact() {
  return (
    <div
      style={{
        height: "500px",
        marginTop: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* <div style={{  }}> */}
      <img
        src="/assets/blue.png"
        alt=""
        style={{ position: "absolute", left: 250, top: 100 }}
      />
      <img
        src="/assets/y.png"
        alt=""
        style={{ position: "absolute", right: 700, top: 0 }}
      />
      <img
        src="/assets/violet.png"
        alt=""
        style={{ position: "absolute", right: 300, top: -100 }}
      />
      <img
        src="/assets/yy.png"
        alt=""
        style={{ position: "absolute", right: 450, top: 150 }}
      />
      {/* </div> */}
      <div style={{}}>
        <h1 style={{ fontSize: "58px", fontWeight: "500" }}>Contact Us</h1>
        <p style={{ width: "623px", fontSize: "20px", color: "#E5E5E5" }}>
          We are always open to discuss new value-adding partnerships. Do reach
          out if you are an exchange or a project looking for liquidity; an
          algorithmic trader or a software developer looking to improve the
          markets with us or just have a great idea you can’t wait to share with
          us!
        </p>
        <Button>GET IN TOUCH</Button>
      </div>
    </div>
  );
}
