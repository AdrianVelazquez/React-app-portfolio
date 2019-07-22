import React from "react";

const cardStyles = {
  backgroundColor: "white",
  borderRadius: "5px",
  marginTop: "15px"
};

const cardTitle = {
  margin: "0px 0px",
  padding: "20px 0px 10px 20px",
  float: "left",
  width: "100%"
};

const cardTitleImg = {
  borderRadius: "15px",
  border: "1px solid #e9ebee",
  float: "left"
};

const cardInfo = {
  margin: "0px 0px",
  padding: "20px",
  borderBottom: "1px solid #e9ebee",
  lineHeight: "1.4"
};

const cardFooter = {
  backgroundColor: "#f2f3f5",
  margin: "0px 0px"
};

const cardFooterHeaderContent = {
  margin: "0px 0px",
  padding: "10px 0px 0px 20px",
  color: "#606770"
};

const cardFooterDatesContent = {
  margin: "0px 0px",
  padding: "5px 0px 10px 20px",
  color: "#606770"
};

const CardContent = props => (
  <div style={cardStyles}>
    <div style={cardTitle}>
      <img
        src={props.content.imgUrl}
        width="30px"
        height="30px"
        style={cardTitleImg}
      />
      <h3 style={{ color: "#4267b2", margin: "7px 0px 15px 40px" }}>
        {props.content.title}
      </h3>
      <header>{props.content.header}</header>
    </div>
    <div style={cardInfo}>
      <img src={props.content.postImgUrl} width="100%" />
      <div id="card-info">
        <hr />
        <p>{props.content.info}</p>
        <p>{props.content.extendedInfo}</p>
        <p style={{ fontWeight: "400", fontStyle: "italic" }}>
          {props.content.stackInfo}
        </p>
        <p style={{ fontWeight: "600" }}>{props.content.projectsInfo}</p>
      </div>
    </div>
    <footer style={cardFooter}>
      <h3 style={cardFooterHeaderContent}>{props.content.footerTitle}</h3>
      <p style={cardFooterDatesContent}>{props.content.footerContent}</p>
    </footer>
  </div>
);

export default CardContent;
