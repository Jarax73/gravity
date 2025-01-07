import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  height: 120px;
`;

const Line = styled.li`
  list-style-type: none;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: #577bc1;
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  align-items: center;
  gap: 20;
  // background: linear-gradient(90deg, #665dcd 0%, #5fa4e6 45%, #d2ab67 100%);
  background-color: #141619;
  color: white;
  width: 150px;
  height: 50px;
`;

export default function NavBar() {
  return (
    <Nav>
      <p>
        <img src="/logo-light.png" alt="gravity logo" />
      </p>
      <ul
        style={{
          display: "flex",
          gap: 15,
        }}
      >
        <Line>
          <Link href="#">ABOUT US</Link>
        </Line>
        <Line>
          <Link href="#">OUR SERVICES</Link>
        </Line>
        <Line>
          <Link href="#">WORK WITH US</Link>
        </Line>
        <Line>
          <Link href="#">BLOG</Link>
        </Line>
      </ul>
      <div>
        <Button>
          <img src="/button_before.png" alt="button" />
          GET IN TOUCH
        </Button>
      </div>
    </Nav>
  );
}
