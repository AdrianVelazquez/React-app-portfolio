/*
==================================== dependencies & imports
*/
import React from "react";
import { Back, TimelineLite } from "gsap/TweenMax";
import stack_html_icon from "../images/stack_html_icon.png";
import stack_js_icon from "../images/stack_js_icon.png";
import stack_jquery_icon from "../images/stack_jquery_icon.png";
import stack_json_icon from "../images/stack_json_icon.png";
import stack_node_icon from "../images/stack_node_icon.png";
import stack_npm_icon from "../images/stack_npm_icon.png";
import stack_git_icon from "../images/stack_git_icon.png";
import stack_ai_icon from "../images/stack_ai_icon.png";
import stack_wp_icon from "../images/stack_wp_icon.png";
import stack_wc_icon from "../images/stack_wc_icon.png";
import { ReactComponent as Css } from "../images/stack_css_icon.svg";
import { ReactComponent as Greensock } from "../images/stack_greensock_icon.svg";
import { ReactComponent as ReactIcon } from "../images/icon.svg";
import { ReactComponent as Photoshop } from "../images/stack_ps_icon.svg";

/*
==================================== component styles
*/
const stackStyles = {
  width: "25%",
  float: "left",
  margin: "-211px 0px 0px 0px",
  backgroundColor: "white",
  borderRadius: "5px",
  border: "1px solid #e9ebee",
  overflow: "hidden"
};

const ulStyles = {
  listStyleType: "none",
  padding: "0",
  margin: "0"
};

const liStyles = {
  padding: "15px 0px 15px 20px",
  fontWeight: "bold",
  fontSize: "14px",
  borderBottom: "1px solid #e9ebee"
};

const liImgStyles = {
  verticalAlign: "middle",
  paddingRight: "10px"
};

/*
==================================== component jsx
*/
function Stack() {
  return (
    <div className="stack-container" style={stackStyles}>
      <ul className="stack-ul" style={ulStyles}>
        <li className="stack-item" style={liStyles}>
          <img
            src={stack_html_icon}
            style={liImgStyles}
            alt="html_icon"
            width="45px"
            height="45px"
          />
          .html
        </li>
        <li className="stack-item" style={liStyles}>
          <Css width="45px" height="45px" style={liImgStyles} />
          .css
        </li>
        <li className="stack-item" style={liStyles}>
          <img
            src={stack_js_icon}
            style={liImgStyles}
            alt="js_icon"
            width="45px"
            height="45px"
          />
          .js
        </li>
        <li className="stack-item" style={liStyles}>
          <img
            src={stack_jquery_icon}
            style={liImgStyles}
            alt="jquery_icon"
            width="45px"
            height="45px"
          />
          .jquery
        </li>
        <li className="stack-item" style={liStyles}>
          <img
            src={stack_json_icon}
            style={liImgStyles}
            alt="json_icon"
            width="45px"
            height="45px"
          />
          .json
        </li>
        <li className="stack-item" style={liStyles}>
          <img
            src={stack_node_icon}
            style={liImgStyles}
            alt="node_icon"
            width="45px"
            height="45px"
          />
          .node
        </li>
        <li className="stack-item" style={liStyles}>
          <img
            src={stack_npm_icon}
            style={liImgStyles}
            alt="npm_icon"
            width="45px"
            height="45px"
          />
          .npm
        </li>
        <li className="stack-item" style={liStyles}>
          <Greensock width="45px" height="45px" style={liImgStyles} />
          .greensock
        </li>
        <li className="stack-item" style={liStyles}>
          <ReactIcon width="45px" height="45px" style={liImgStyles} />
          .react
        </li>
        <li className="stack-item" style={liStyles}>
          <img
            src={stack_git_icon}
            style={liImgStyles}
            alt="git_icon"
            width="45px"
            height="45px"
          />
          .git
        </li>
        <li className="stack-item" style={liStyles}>
          <Photoshop width="45px" height="45px" style={liImgStyles} />
          .psd
        </li>
        <li className="stack-item" style={liStyles}>
          <img
            src={stack_ai_icon}
            style={liImgStyles}
            alt="ai_icon"
            width="45px"
            height="45px"
          />
          .ai
        </li>
        <li className="stack-item" style={liStyles}>
          <img
            src={stack_wp_icon}
            style={liImgStyles}
            alt="wp_icon"
            width="45px"
            height="45px"
          />
          .wordpress
        </li>
        <li className="stack-item" style={liStyles}>
          <img
            src={stack_wc_icon}
            style={liImgStyles}
            alt="wc_icon"
            width="45px"
            height="45px"
          />
          .woocommerce
        </li>
      </ul>
    </div>
  );
}

/*
==================================== animation setup
*/
var tl = tl || new TimelineLite();
var stack = document.getElementsByClassName("stack-item");

/*
==================================== animations
*/
function anim() {
  let tl = new TimelineLite();
  tl.staggerFrom(
    stack,
    0.75,
    { x: -100, opacity: 0, ease: Back.easeOut.config(1.1) },
    0.2
  );

  return tl;
}

/*
==================================== main timeline
*/
function setItOff() {
  tl.add(anim);
}

// call animation
setItOff();

export default Stack;
