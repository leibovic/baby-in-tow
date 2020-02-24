import React from "react";

function SubmitTipFooter() {
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
        textAlign: "center",
      }}
    >
      <a
        style={{ fontWeight: 600, color: "white" }}
        href="https://forms.gle/yt38Z27Y3SE81q447"
        target="_blank"
        rel="noopener noreferrer"
      >
        Submit a baby tip
      </a>
    </div>
  );
}

export default SubmitTipFooter;
