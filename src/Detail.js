import React from "react";

const Detail = ({ location }) => {
  if (!location.name) {
    return <div></div>;
  }
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "200px",
        width: "calc(100% - 40px)",
        backgroundColor: "white",
        margin: "0 10px 40px",
        borderRadius: "1px",
        padding: "10px"
      }}
    >
      <h2>{location.name}</h2>
      <div>{location.address}</div>
      <div>Nursing Rating: {location.nursing}</div>
      <div>Stroller Rating: {location.stroller}</div>
      <div>{location.changeTable ? "Has Change Table" : "No Change Table"}</div>
      <div>{location.indoor ? "Indoor Space" : "No Indoor Space"}</div>
      <div>{location.outdoor ? "Outdoor Space" : "No Outdoor Space"}</div>
    </div>
  );
};

export default Detail;
