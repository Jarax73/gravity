import React from "react";

const styles = {
  a: {
    textDecoration: "none",
    color: "white",
  },
  li: {
    listStyleType: "none",
  },
};

export default function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        color: "white",
        justifyContent: "space-between",
        alignItems: "center",
        height: "120px",
      }}
    >
      <p>
        <img src="/logo-light.png" alt="gravity logo" />
      </p>
      <ul
        style={{
          display: "flex",
          gap: 15,
        }}
      >
        <li style={styles.li}>
          <a style={styles.a} href="#">
            ABOUT US
          </a>
        </li>
        <li style={styles.li}>
          <a style={styles.a} href="#">
            OUR SERVICES
          </a>
        </li>
        <li style={styles.li}>
          <a style={styles.a} href="#">
            WORK WITH US
          </a>
        </li>
        <li style={styles.li}>
          <a style={styles.a} href="#">
            BLOG
          </a>
        </li>
      </ul>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <img src="/button_before.png" alt="button" />
        <p>GET IN TOUCH</p>
      </div>
    </div>
  );
}
