import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  color: white;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  height: 120px;

  @media (max-width: 1023px) {
    padding-left: 5%;
    padding-right: 5%;
    align-items: center;
    height: 80px;
  }

  @media (max-width: 767px) {
    padding-left: 0%;
    padding-right: 0%;
    align-items: center;
    height: 80px;
    position: relative;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1023px) {
    flex: 2;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  flex: 1;
  font-size: 15px;
  &:hover {
    color: #577bc1;
  }

  @media (max-width: 1023px) {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    font-size: 10px;
  }
`;

const Logo = styled.img`
  width: 30%;

  @media (max-width: 1023px) {
    width: 50%;
  }

  @media (max-width: 767px) {
    margin-left: 2%;
    width: 100px;
  }
`;

const Navigation = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1023px) {
    flex: 3;
  }

  @media (max-width: 767px) {
    height: 200%;
    align-items: space-around;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    padding-top: 60px;
    padding-right: 50px;
    padding-left: 50px;
    padding-bottom: 60px;
    background-color: #141619;
    box-shadow: 2px 15px 35px 15px black;
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
  height: 50px;
  font-size: 15px;

  @media (max-width: 1023px) {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    font-size: 10px;
    justify-content: flex-start;
  }
`;

const BtnImg = styled.img`
  margin-right: 10px;

  @media (max-width: 767px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10;
    height: 20px;
    padding-right: 10px;
  }
`;

export default function NavBar() {
  const [active, setActive] = useState(false);
  console.info("here", window.innerWidth);
  return (
    <Nav>
      <p
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Logo src="/logo-light.png" alt="gravity logo" />
      </p>

      {!active && window.innerWidth < 768 ? (
        <div>
          <Hamburger onClick={() => setActive(true)}>
            <div style={{ border: "1px solid #bcbcbc", width: "30px" }}></div>
            <div style={{ border: "1px solid #bcbcbc", width: "30px" }}></div>
            <div style={{ border: "1px solid #bcbcbc", width: "30px" }}></div>
          </Hamburger>
        </div>
      ) : (
        <>
          {window.innerWidth < 768 && (
            <div
              style={{
                width: "30px",
                fontSize: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid white",
                zIndex: 1,
                position: "absolute",
                top: 25,
                right: 10,
              }}
              onClick={() => setActive(false)}
            >
              X
            </div>
          )}
          <Navigation>
            <List>
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
            </List>

            <Button>
              <BtnImg src="/button_before.png" alt="button" />
              GET IN TOUCH
            </Button>
          </Navigation>
        </>
      )}
    </Nav>
  );
}
