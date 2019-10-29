import React from "react";
import logo from "./branding/logo.png";
import illustration from "./branding/welcome-illustration.jpg";

const WelcomeOverlay = ({ onClose }) => {
  localStorage.setItem("welcomeShown", "true");
  return (
    <div className="overlay">
      <img
        style={{
          height: "50px"
        }}
        src={logo}
        alt="Baby in Tow"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <img
          style={{
            height: "200px"
          }}
          src={illustration}
          alt="Parents with babies"
        />
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px"
          }}
        >
          Like word of mouth...but better
        </div>
        <div
          style={{
            fontSize: "14px",
            marginBottom: "10px"
          }}
        >
          We’ve gone to the meetups, talked to your neighbours and scouted the
          local cafes, gyms, and baby events to get the inside scoop on the best
          things to do in your hood when you have a baby in tow.
        </div>
        <button className="getStartedButton" onClick={onClose}>
          Get started
        </button>
      </div>
    </div>
  );
};

export default WelcomeOverlay;
