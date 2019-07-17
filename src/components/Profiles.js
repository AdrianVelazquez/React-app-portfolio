import React from "react";
import me from "../images/me.jpg";
import { ReactComponent as Tools } from "../images/tools.svg";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as Github } from "../images/github.svg";

const profileStyles = {
  width: "16%",
  height: "100%",
  // position: "fixed",
  zIndex: "1",
  top: "0",
  left: "0",
  overFlowX: "hidden",
  margin: "60px 1% 0 0",
  float: "left",
  clear: "both"
};

const ulStyles = {
  listStyleType: "none",
  padding: "0"
};

const liStyles = {
  height: "28px",
  lineHeight: "28px",
  textOverflow: "ellipsis",
  padding: "5px"
};

const liaStyles = {
  paddingLeft: "10px",
  color: "#16161d",
  verticalAlign: "super"
};

const liImgStyles = {
  verticalAlign: "middle"
};

function Profiles() {
  return (
    <div id="profiles" style={profileStyles}>
      <ul className="profile-ul" style={ulStyles}>
        <li style={liStyles}>
          <img
            src={me}
            style={liImgStyles}
            alt="me"
            width="25px"
            height="25px"
          />
          <p style={{ margin: "-26px 0px 0px 35px" }}>Adrian</p>
        </li>
        <li style={liStyles}>
          <Linkedin width="25px" height="25px" />
          <a
            href="https://www.linkedin.com/in/avelazquez585/"
            target="_blank"
            rel="noopener noreferrer"
            style={liaStyles}
          >
            LinkedIn
          </a>
        </li>
        <li style={liStyles}>
          <Github width="25px" height="25px" />
          <a
            href="https://github.com/AdrianVelazquez"
            target="_blank"
            rel="noopener noreferrer"
            style={liaStyles}
          >
            Github
          </a>
        </li>
        <li style={liStyles}>
          <Twitter width="25px" height="25px" />
          <a
            href="https://twitter.com/RiotMindStudios"
            target="_blank"
            rel="noopener noreferrer"
            style={liaStyles}
          >
            Twitter
          </a>
        </li>
        <li style={liStyles}>
          <Tools width="25px" height="25px" />
          <a
            href="https://hireadrianv.wixsite.com/adrianvelazquez"
            target="_blank"
            rel="noopener noreferrer"
            style={liaStyles}
          >
            Banner Dev
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Profiles;
