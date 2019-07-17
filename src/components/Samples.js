import React from "react";
import mini_zip from "../samples/Mini_Cooper.zip";
import sample_mini_icon from "../images/sample_mini_icon.png";
import tmobile_zip from "../samples/TMobile.zip";
import sample_tmobile_icon from "../images/sample_tmobile_icon.png";
import google_zip from "../samples/Google.zip";
import sample_google_icon from "../images/sample_google_icon.png";
import android_zip from "../samples/Android.zip";
import sample_android_icon from "../images/sample_android_icon.png";
import liz_zip from "../samples/Elizabeth_Arden.zip";
import sample_liz_icon from "../images/sample_liz_icon.jpg";
import riot from "../assets/business_model.pdf";
import sample_riot_icon from "../images/sample_riot_icon.png";

const samplesStyles = {
  width: "16%",
  height: "100%",
  zIndex: "1",
  top: "0",
  left: "0",
  overFlowX: "hidden",
  margin: "0 1% 0 0",
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

function Samples() {
  return (
    <div id="samples" style={samplesStyles}>
      <h4 style={{ color: "#616770", marginBottom: "5px" }}>Projects</h4>
      <ul className="samples-ul" style={ulStyles}>
        <li style={liStyles}>
          <img src={sample_mini_icon} alt="me" width="25px" height="25px" />
          <a href={mini_zip} download="Mini_Cooper.zip" style={liaStyles}>
            Mini Cooper
          </a>
        </li>

        <li style={liStyles}>
          <img src={sample_tmobile_icon} alt="me" width="25px" height="25px" />
          <a href={tmobile_zip} download="TMobile.zip" style={liaStyles}>
            T-Mobile
          </a>
        </li>

        <li style={liStyles}>
          <img src={sample_google_icon} alt="me" width="25px" height="25px" />
          <a href={google_zip} download="Google.zip" style={liaStyles}>
            Google
          </a>
        </li>

        <li style={liStyles}>
          <img src={sample_android_icon} alt="me" width="25px" height="25px" />
          <a href={android_zip} download="Android.zip" style={liaStyles}>
            Android
          </a>
        </li>

        <li style={liStyles}>
          <img src={sample_liz_icon} alt="me" width="25px" height="25px" />
          <a href={liz_zip} download="Elizabeth_Arden.zip" style={liaStyles}>
            Elizabeth Arden
          </a>
        </li>

        <li style={liStyles}>
          <img src={sample_riot_icon} alt="me" width="25px" height="25px" />
          <a href={riot} download="Business_Model.pdf" style={liaStyles}>
            Riot Mind Studios
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Samples;
