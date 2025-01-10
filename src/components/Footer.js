import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        borderTop: "1px solid #999",
        paddingLeft: "370px",
        paddingRight: "370px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: "15px",
              textTransform: "uppercase",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Gravity Team
          </h1>
          <ul
            style={{
              listStyle: "none",
              textAlign: "left",
              fontSize: "14px",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a href="#" style={{ textDecoration: "none", color: "#BCBCBC" }}>
                About Us
              </a>
            </li>
            <li style={{ marginTop: "10px" }}>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#BCBCBC",
                }}
              >
                Work with Us
              </a>
            </li>
          </ul>
        </div>
        <p>
          <img src="/logo-light.png" alt="gravity logo" />
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "#BCBCBC" }}>Terms of Use & Privacy Policy</p>
        <p style={{ color: "#BCBCBC" }}>
          ©2022 Gravity Team. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
