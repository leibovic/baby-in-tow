import React, { useState } from "react";

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
          padding: "16px 24px",
          fontSize: "14px"
        }}
      >
        <div
          style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "16px" }}
        >
          {location.name}
        </div>

        {detailsExpanded && (
          <div
            style={{
              marginBottom: "10px"
            }}
          >
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${location.name}+${location.address}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {location.address}
            </a>
          </div>
        )}

        <div className="detailLabel">{indoorOutdoorMessage}</div>
        {detailsExpanded && <hr />}
        <div className="detailLabel">
          Change table ({location.changeTable ? "Yes" : "No"})
        </div>
        {detailsExpanded && <hr />}
        <div className="detailLabel">Stroller space ({location.stroller})</div>
        {detailsExpanded && <hr />}
        <div className="detailLabel">
          Ease of nursing/pumping ({location.nursing})
        </div>
        {detailsExpanded && (
          <React.Fragment>
            <hr />
            <div className="detailLabel">Baby tips</div>
            <div>{location.description}</div>
            <hr />
            <a
              href={location.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {location.website}
            </a>
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
