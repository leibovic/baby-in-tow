import React from "react";

const Detail = ({ location }) => {
  if (!location.name) {
    return <div></div>;
  }

  let indoorOutdoorMessage;
  if (location.indoor && location.outdoor) {
    indoorOutdoorMessage = "Indoor / Outdoor";
  } else if (location.indoor) {
    indoorOutdoorMessage = "Indoor";
  } else if (location.outdoor) {
    indoorOutdoorMessage = "Outdoor";
  } else {
    indoorOutdoorMessage = "";
  }

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "calc(100% - 40px)",
        backgroundColor: "white",
        margin: "0 10px 40px",
        borderRadius: "2px",
        padding: "10px"
      }}
    >
      <div
        style={{
          textTransform: "uppercase",
          fontSize: "12px",
          color: "#909090"
        }}
      >
        {indoorOutdoorMessage}
      </div>
      <div style={{ fontWeight: "bold", fontSize: "16px", lineHeight: "24px" }}>
        {location.name}
      </div>
      <div
        style={{
          borderRadius: "2px",
          backgroundColor: "#159585",
          position: "absolute",
          top: 0,
          right: 0,
          margin: "10px",
          padding: "2px 6px",
          textTransform: "uppercase",
          fontSize: "10px",
          color: "white"
        }}
      >
        {location.category}
      </div>
      <div style={{ fontSize: "12px", color: "#909090" }}>
        {location.address}
      </div>
      <div>Nursing Rating: {location.nursing}</div>
      <div>Stroller Rating: {location.stroller}</div>
      <div>{location.changeTable ? "Has Change Table" : "No Change Table"}</div>
      <div>{location.description}</div>
    </div>
  );
};

export default Detail;
