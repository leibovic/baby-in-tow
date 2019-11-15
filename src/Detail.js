import React, { useState } from "react";
import Stars from "./Stars";
import { useSwipeable } from "react-swipeable";
import featureYes from "./icons/feature-yes.svg";
import featureNo from "./icons/feature-no.svg";
import chevronUp from "./icons/chevron-up.svg";
import chevronDown from "./icons/chevron-down.svg";
import chevronRight from "./icons/chevron-right.svg";
import iconInsta from "./icons/icon-insta.svg";
import iconFacebook from "./icons/icon-facebook.svg";
import iconTwitter from "./icons/icon-twitter.svg";
import iconWebsite from "./icons/icon-website.svg";

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
          style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px" }}
        >
          {location.name}
        </div>

        <div className="detailLabel">{indoorOutdoorMessage}</div>
        <hr />
        <div className="detailLabel">
          Change table
          <img
            className="ratingsIcon"
            src={location.changeTable ? featureYes : featureNo}
            alt={location.changeTable ? "Yes" : "No"}
          />
        </div>
        <hr />
        <div className="detailLabel">
          Stroller space <Stars rating={location.stroller} />
        </div>
        {detailsExpanded && (
          <div className="detailDescription">
            {location.stroller == 0 && "No rating available yet."}
            {location.stroller == 1 &&
              "Doable with a bit of effort. You’ll need to maneuver yourself around tight spots."}
            {location.stroller == 2 &&
              "Moderate space available but there may not be an accessible door or ramp access."}
            {location.stroller == 3 &&
              "Accessible door or ramp access and a lot of indoor space to move around."}
          </div>
        )}
        <hr />
        <div className="detailLabel">
          Ease of nursing <Stars rating={location.nursing} />
        </div>
        {detailsExpanded && (
          <div className="detailDescription">
            {location.nursing == 0 && "No rating available yet."}
            {location.nursing == 1 &&
              "The venue is open and public but still has a chill vibe so no creepy glares."}
            {location.nursing == 2 &&
              "While there isn’t a dedicated room you can find some privacy on a corner seat or a quiet seat in the back."}
            {location.nursing == 3 &&
              "There is a dedicated mother’s room for nursing."}
          </div>
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
        {detailsExpanded ? "See less detail" : "See more detail"}
        <img
          style={{ marginLeft: "6px", verticalAlign: "middle" }}
          src={detailsExpanded ? chevronUp : chevronDown}
          alt=""
        />
      </button>
    </div>
  );
};

export default Detail;
