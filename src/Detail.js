import React from "react";

const Detail = ({ location }) => {
  if (!location) {
    return <div></div>;
  }
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "200px",
        width: "calc(100% - 20px)",
        backgroundColor: "white",
        margin: "0 10px 40px",
        borderRadius: "1px"
      }}
    >
      {location.name}
    </div>
  );
};

export default Detail;
