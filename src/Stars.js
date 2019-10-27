import React from "react";
import starEmpty from "./icons/star-empty.svg";
import starFilled from "./icons/star-filled.svg";

const Stars = ({ rating }) => (
  <React.Fragment>
    {rating === 0 && (
      <>
        <img className="ratingsIcon" src={starEmpty} alt="Star Empty" />
        <img className="ratingsIcon" src={starEmpty} alt="Star Empty" />
        <img className="ratingsIcon" src={starEmpty} alt="Star Empty" />
      </>
    )}
    {rating === 1 && (
      <>
        <img className="ratingsIcon" src={starEmpty} alt="Star Empty" />
        <img className="ratingsIcon" src={starEmpty} alt="Star Empty" />
        <img className="ratingsIcon" src={starFilled} alt="Star Filled" />
      </>
    )}
    {rating === 2 && (
      <>
        <img className="ratingsIcon" src={starEmpty} alt="Star Empty" />
        <img className="ratingsIcon" src={starFilled} alt="Star Filled" />
        <img className="ratingsIcon" src={starFilled} alt="Star Filled" />
      </>
    )}
    {rating === 3 && (
      <>
        <img className="ratingsIcon" src={starFilled} alt="Star Filled" />
        <img className="ratingsIcon" src={starFilled} alt="Star Filled" />
        <img className="ratingsIcon" src={starFilled} alt="Star Filled" />
      </>
    )}
  </React.Fragment>
);

export default Stars;
