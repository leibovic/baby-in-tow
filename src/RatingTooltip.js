import React, { useState } from "react";
import Stars from "./Stars";
import close from "./icons/close.svg";
import helpCircle from "./icons/help-circle.svg";

const RatingTooltip = ({ type }) => {
  const [modalShowing, updateModalShowing] = useState(false);

  const descriptions = {
    nursing: [
      "The venue is open and public but still has a chill vibe so no creepy glares.",
      "While there isn’t a dedicated room you can find some privacy on a corner seat or a quiet seat in the back.",
      "There is a dedicated mother’s room for nursing.",
    ],
    stroller: [
      "Doable with a bit of effort. You’ll need to maneuver yourself around tight spots.",
      "Moderate space available but there may not be an accessible door or ramp access.",
      "Accessible door or ramp access and a lot of indoor space to move around.",
    ],
  };

  return (
    <>
      {modalShowing && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            top: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(55, 75, 91, 0.8)",
            zIndex: 30,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "4px",
              boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.0882594)",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: "calc(100% - 80px)",
              margin: "0 16px",
              padding: "24px",
            }}
          >
            <button
              type="button"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                position: "absolute",
                top: "16px",
                right: "16px",
                padding: "5px",
              }}
              onClick={() => updateModalShowing(false)}
            >
              <img src={close} alt="Close" />
            </button>
            <div
              style={{
                fontSize: "18px",
                color: "#374B5B",
                marginBottom: "6px",
              }}
            >
              {type === "nursing" ? "Ease of nursing" : "Stroller space"}
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#5A7A94",
              }}
            >
              {descriptions[type].map((value, index) => {
                return (
                  <div key={value} className="ratingLegendItem">
                    <Stars rating={index + 1} />
                    <div>{value}</div>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              style={{
                backgroundColor: "#374B5B",
                textAlign: "center",
                fontSize: "14px",
                color: "white",
                border: "none",
                width: "100%",
                padding: "8px 0",
                cursor: "pointer",
                borderRadius: "4px",
                fontWeight: 600,
              }}
              onClick={() => updateModalShowing(false)}
            >
              Got it
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          verticalAlign: "bottom",
          margin: "-4px 0",
        }}
        onClick={() => updateModalShowing(true)}
      >
        <img src={helpCircle} alt="Help" />
      </button>
    </>
  );
};

export default RatingTooltip;
