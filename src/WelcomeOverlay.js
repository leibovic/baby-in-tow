import React from "react";

const WelcomeOverlay = ({ onClose }) => {
  return (
    <div className="overlay">
      <h1>Baby in Tow</h1>
      <div></div>
      <button onClick={onClose}>Let&apos;s go!</button>
    </div>
  );
};

export default WelcomeOverlay;
