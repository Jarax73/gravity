import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  color: white;
  // justify-content: space-between;
  align-items: center;
  height: 120px;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  flex: 1;
  font-size: 15px;
  &:hover {
    color: #577bc1;
  }
`;
const Button = styled.button`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  border: none;
  cursor: pointer;
  align-items: center;
  background-color: #141619;
  color: white;
  width: 150px;
  height: 50px;
  font-size: 15px;
`;

export default function NavBar() {
  return (
    <Nav>
      <p
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <img src="/logo-light.png" alt="gravity logo" />
      </p>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          flex: 1,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <li>
          <Link href="#">ABOUT US</Link>
        </li>
        <li>
          <Link href="#">OUR SERVICES</Link>
        </li>
        <li>
          <Link href="#">WORK WITH US</Link>
        </li>
        <li>
          <Link href="#">BLOG</Link>
        </li>
      </ul>

      <Button>
        <img
          style={{ marginRight: "10px" }}
          src="/button_before.png"
          alt="button"
        />
        GET IN TOUCH
      </Button>
    </Nav>
  );
}
