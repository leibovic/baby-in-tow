import React, { useState } from "react";
import Ratings from "./Ratings.js";
import linkIcon from "./icons/link.png";

const Detail = ({ location }) => {
  const [detailsExpanded, updateDetailsExpanded] = useState(false);

  if (location === null) {
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
        <button
          className="controlButton"
          onClick={() => window.open(location.website, "_blank")}
        >
          <img src={linkIcon} alt="Link"></img>
        </button>
      </div>

      <div style={{ fontSize: "12px", color: "#909090" }}>
        {location.address}
      </div>
      <Ratings
        nursing={location.nursing}
        stroller={location.stroller}
        changeTable={location.changeTable}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          margin: "10px",
          fontSize: "10px",
          color: "#909090"
        }}
      >
        <button onClick={() => updateDetailsExpanded(!detailsExpanded)}>
          {detailsExpanded ? "less ^" : "more v"}
        </button>
      </div>
      {detailsExpanded && (
        <div
          style={{
            marginBottom: "25px"
          }}
        >
          <div
            style={{
              fontSize: "10px",
              color: "#909090"
            }}
          >
            BABY TIPS:
          </div>
          <div>{location.description}</div>
        </div>
      )}
    </div>
  );
};

export default Detail;
