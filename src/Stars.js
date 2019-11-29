import React from "react";
import starEmpty from "./icons/star-empty.svg";
import starFilled from "./icons/star-filled.svg";

const Stars = ({ rating }) => (
  <div className="stars">
    {rating === 0 && <div>No rating yet</div>}
    {rating === 1 && (
      <>
        <img src={starFilled} alt="Star Filled" />
        <img src={starEmpty} alt="Star Empty" />
        <img src={starEmpty} alt="Star Empty" />
      </>
    )}
    {rating === 2 && (
      <>
        <img src={starFilled} alt="Star Filled" />
        <img src={starFilled} alt="Star Filled" />
        <img src={starEmpty} alt="Star Empty" />
      </>
    )}
    {rating === 3 && (
      <>
        <img src={starFilled} alt="Star Filled" />
        <img src={starFilled} alt="Star Filled" />
        <img src={starFilled} alt="Star Filled" />
      </>
    )}
  </div>
);

export default Stars;
