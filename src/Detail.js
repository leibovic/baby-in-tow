import React, { useState } from "react";
import Stars from "./Stars";
import { useSwipeable } from "react-swipeable";
import featureYes from "./icons/feature-yes.svg";
import featureNo from "./icons/feature-no.svg";
import plus from "./icons/plus.svg";
import minus from "./icons/minus.svg";
import chevronRight from "./icons/chevron-right.svg";
import iconInsta from "./icons/icon-insta.svg";
import iconFacebook from "./icons/icon-facebook.svg";
import iconTwitter from "./icons/icon-twitter.svg";
import iconWebsite from "./icons/icon-website.svg";
import RatingTooltip from "./RatingTooltip";

const Detail = ({ location, categoryColor }) => {
  const [detailsExpanded, updateDetailsExpanded] = useState(false);
  const swipeableHandlers = useSwipeable({
    onSwipedUp: () => updateDetailsExpanded(true),
    onSwipedDown: () => updateDetailsExpanded(false),
    trackMouse: true
  });

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
      {...swipeableHandlers}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "calc(100% - 20px)",
        backgroundColor: "white",
        margin: "0 10px",
        borderRadius: "4px 4px 0 0",
        zIndex: 10,
        color: "#374B5B"
      }}
    >
      <div
        style={{
          borderRadius: "4px 4px 0 0",
          backgroundColor: categoryColor.backgroundColor,
          paddingLeft: "24px",
          textTransform: "uppercase",
          fontWeight: 900,
          fontSize: "14px",
          lineHeight: "24px",
          color: categoryColor.color
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
          style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px" }}
        >
          {location.name}
        </div>

        <div className="detailLabel">{indoorOutdoorMessage}</div>
        <hr />
        <div className="detailLabel">
          Change table
          <img
            style={{
              float: "right"
            }}
            src={location.changeTable ? featureYes : featureNo}
            alt={location.changeTable ? "Yes" : "No"}
          />
        </div>
        <hr />
        <div className="detailLabel">
          Stroller space
          <RatingTooltip type="stroller" />
          <Stars rating={location.stroller} />
        </div>
        {detailsExpanded && (
          <div className="detailDescription">{location.strollerTips}</div>
        )}
        <hr />
        <div className="detailLabel">
          Ease of nursing
          <RatingTooltip type="nursing" />
          <Stars rating={location.nursing} />
        </div>
        {detailsExpanded && (
          <div className="detailDescription">{location.nursingTips}</div>
        )}
        {detailsExpanded && (
          <React.Fragment>
            <hr />
            <div className="detailLabel">Baby tips</div>
            <div className="detailDescription">{location.description}</div>
            <hr />
            {detailsExpanded && (
              <div
                style={{
                  paddingTop: "5px",
                  paddingBottom: "10px",
                  maxWidth: "60%"
                }}
              >
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${location.name}+${location.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {location.address}
                </a>
                <img
                  style={{ verticalAlign: "middle", marginLeft: "6px" }}
                  src={chevronRight}
                  alt=""
                />
              </div>
            )}

            <div className="detailLabel">
              {location.website && (
                <a
                  href={location.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ marginRight: "26px" }}
                    src={iconWebsite}
                    alt="Website"
                  />
                </a>
              )}
              {location.instagram && (
                <a
                  href={location.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ marginRight: "26px" }}
                    src={iconInsta}
                    alt="Instagram"
                  />
                </a>
              )}
              {location.twitter && (
                <a
                  href={location.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ marginRight: "26px" }}
                    src={iconTwitter}
                    alt="Twitter"
                  />
                </a>
              )}
              {location.facebook && (
                <a
                  href={location.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ marginRight: "26px" }}
                    src={iconFacebook}
                    alt="Facebook"
                  />
                </a>
              )}
            </div>
          </React.Fragment>
        )}
      </div>
      <button
        style={{
          backgroundColor: detailsExpanded ? "white" : "#374B5B",
          textAlign: "center",
          fontSize: "14px",
          color: detailsExpanded ? "#374B5B" : "white",
          border: detailsExpanded ? "2px solid #374B5B" : "none",
          width: "calc(100% - 48px)",
          padding: "8px 0",
          margin: "0 24px 24px 24px",
          cursor: "pointer",
          borderRadius: "4px",
          fontWeight: 600
        }}
        onClick={() => updateDetailsExpanded(!detailsExpanded)}
      >
        {detailsExpanded ? "Show less detail" : "Show more detail"}
        <img
          style={{ marginLeft: "6px", verticalAlign: "bottom" }}
          src={detailsExpanded ? minus : plus}
          alt=""
        />
      </button>
    </div>
  );
};

export default Detail;
