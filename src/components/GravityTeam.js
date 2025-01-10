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
    width: 57%;
    height: 2px;
    margin-top: 10px;
    background: linear-gradient(90deg, #665dcd 0%, #5fa4e6 45%, #d2ab67 100%);
  }
`;

export default function GravityTeam() {
  return (
    <div
      style={{
        height: "400px",
        marginTop: "350px",
        paddingLeft: "370px",
        paddingRight: "370px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div style={{ position: "relative" }}>
          <img
            src="/assets/gravityb.png"
            alt=""
            style={{ position: "absolute", left: -140, top: -100 }}
          />
          <img
            src="/assets/gravityy.png"
            alt=""
            style={{ position: "absolute", left: 180, top: -100 }}
          />
        </div>
        <div>
          <h1 style={{ fontSize: "53px", width: "400px", textAlign: "left" }}>
            Join <br />
            Gravity Team
          </h1>
        </div>
      </div>
      <div
        style={{
          width: "510px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ fontSize: "19px", textAlign: "left", color: "#E5E5E5" }}>
          Join our community of innovators, problem solvers and owners who apply
          scientific discovery techniques to make crypto markets a better place
          for everyone.
        </p>
        <p style={{ fontSize: "19px", textAlign: "left", color: "#E5E5E5" }}>
          As we emphasize it in our name – Gravity Team, we are a team. A team
          of bright, talented people, each masters of their specialty, curious
          about the world and eager to solve the new exciting cryptocurrency
          market problems, build cool stuff and have fun whilst doing so!
        </p>
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
      </div>
    </div>
  );
}
