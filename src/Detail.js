import React, { useState } from "react";
import Ratings from "./Ratings.js";
import linkIcon from "./icons/link.png";

const Detail = ({ location, categoryColor }) => {
  const [detailsExpanded, updateDetailsExpanded] = useState(false);

  let indoorOutdoorMessage;
  if (location.indoor && location.outdoor) {
    indoorOutdoorMessage = "Indoor & Outdoor";
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
        width: "calc(100% - 20px)",
        backgroundColor: "white",
        margin: "0 10px",
        borderRadius: "4px 4px 0 0",
        zIndex: 10
      }}
    >
      <div
        style={{
          borderRadius: "4px 4px 0 0",
          backgroundColor: categoryColor,
          paddingLeft: "24px",
          textTransform: "uppercase",
          fontWeight: 900,
          fontSize: "14px",
          lineHeight: "24px",
          color: "white"
        }}
      >
        {location.category}
      </div>
      <div
        style={{
          padding: "0 24px",
          fontSize: "14px"
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "24px", margin: "16px 0" }}>
          {location.name}
        </div>

        <div className="detailLabel">{indoorOutdoorMessage}</div>
        <hr />
        <div className="detailLabel">Change table</div>
        <hr />
        <div className="detailLabel">Stroller space</div>
        <hr />
        <div className="detailLabel">Ease of nursing/pumping</div>
        {detailsExpanded && (
          <React.Fragment>
            <hr />
            <div className="detailLabel">Baby tips</div>
            <div>{location.description}</div>
            <hr />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${location.name}+${location.address}`}
            >
              {location.address}
            </a>

            <div>
              <button
                className="controlButton"
                onClick={() => window.open(location.website, "_blank")}
              >
                <img src={linkIcon} alt="Link"></img>
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
      <button
        style={{
          backgroundColor: "#E3F0FB",
          textAlign: "center",
          fontSize: "14px",
          lineHeight: "18px",
          color: "#374B5B",
          border: "none",
          width: "100%",
          padding: "8px 0",
          cursor: "pointer"
        }}
        onClick={() => updateDetailsExpanded(!detailsExpanded)}
      >
        {detailsExpanded ? "See less detail ^" : "See more detail v"}
      </button>
    </div>
  );
};

export default Detail;
