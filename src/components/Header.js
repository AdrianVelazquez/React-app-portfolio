import React from "react";
import me from "../images/me.jpg";
import fb from "../images/fb.png";
import resume from "../assets/resume.pdf";

const headerStyles = {
  width: "100%",
  height: "43px",
  color: "whitesmoke",
  backgroundColor: "#4267b2",
  borderBottom: "1px solid #29487d",
  position: "fixed",
  zIndex: "1"
};

const navStyles = {
  width: "1000px",
  height: "20px",
  padding: "5px 0",
  margin: "0 auto"
};

const navImgStyles = {
  paddingTop: "5px",
  borderRadius: "50%",
  overFlow: "hidden",
  float: "right"
};

const navIconStyles = {
  paddingTop: "5px",
  overFlow: "hidden",
  float: "left"
};

const navPStyles = {
  margin: "10px 10px",
  overFlow: "hidden",
  float: "left",
  verticalAlign: "super"
};

function Header() {
  return (
    <header style={headerStyles}>
      <nav style={navStyles}>
        <img
          style={navIconStyles}
          src={fb}
          alt="Adrian Velazquez profile picture"
          width="24px"
          height="24px"
        />
        <p style={navPStyles}>Portfolio of Adrian Velazquez</p>
        <a
          href="mailto:hire.adrianv@gmail.com"
          target="_top"
          style={{ verticalAlign: "super" }}
        >
          Email
        </a>
        <a
          href={resume}
          download="Adrian Velazquez.pdf"
          style={{ borderRight: "1px solid #385898", verticalAlign: "super" }}
        >
          Resume
        </a>
        <a
          href="#"
          style={{ borderRight: "1px solid #385898", verticalAlign: "super" }}
        >
          Adrian
        </a>
        <img
          style={navImgStyles}
          src={me}
          alt="Adrian Velazquez profile picture"
          width="24px"
          height="24px"
        />
      </nav>
    </header>
  );
}

export default Header;
