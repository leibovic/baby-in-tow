import React, { useState } from "react";
import close from "./icons/close.svg";
import helpCircle from "./icons/help-circle.svg";

const RatingTooltip = ({ title, description }) => {
  const [modalShowing, updateModalShowing] = useState(false);

  return (
    <React.Fragment>
      {modalShowing && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            top: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(55, 75, 91, 0.8)",
            zIndex: 30
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
              width: "calc(100% - 96px)",
              margin: "0 16px",
              padding: "16px 32px"
            }}
          >
            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                position: "absolute",
                top: "5px",
                right: "5px",
                padding: "5px"
              }}
              onClick={() => updateModalShowing(false)}
            >
              <img src={close} alt="Close" />
            </button>
            <div
              style={{
                fontSize: "18px",
                color: "#374B5B",
                marginBottom: "6px"
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#5A7A94"
              }}
            >
              {description}
            </div>
          </div>
        </div>
      )}
      <button
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          verticalAlign: "bottom",
          margin: "-4px 0"
        }}
        onClick={() => updateModalShowing(true)}
      >
        <img src={helpCircle} alt="Help" />
      </button>
    </React.Fragment>
  );
};

export default RatingTooltip;
