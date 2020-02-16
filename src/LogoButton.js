import React from "react";

import logoCircle from "./branding/logo-circle-beta.png";

function LogoButton({ onClick }) {
  return (
    <input
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        height: "50px",
        cursor: "pointer",
      }}
      type="image"
      src={logoCircle}
      alt="Baby in Tow"
      onClick={onClick}
    />
  );
}

export default LogoButton;
