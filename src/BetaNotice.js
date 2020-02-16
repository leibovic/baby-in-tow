import React from "react";

function BetaNotice() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        zIndex: 9, // above map but below detail view
        fontSize: "12px",
        padding: "10px",
        backgroundColor: "#374B5B",
        color: "white",
      }}
    >
      Baby in Tow is currently in BETA.{" "}
      <a
        style={{ fontWeight: 600, color: "white" }}
        href="https://forms.gle/X6Tswurfg5VP49Zs7"
        target="_blank"
        rel="noopener noreferrer"
      >
        We&apos;d love your feedback!
      </a>
    </div>
  );
}

export default BetaNotice;
