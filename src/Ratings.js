import React from "react";
import nursingYes from "./icons/nursing-yes.png";
import nursingNo from "./icons/nursing-no.png";
import strollerYes from "./icons/stroller-yes.png";
import strollerNo from "./icons/stroller-no.png";
import diaperYes from "./icons/diaper-yes.png";
import diaperNo from "./icons/diaper-no.png";

const RatingIcons = ({ rating, iconYes, iconNo }) => (
  <div
    style={{
      marginRight: "10px"
    }}
  >
    {rating === 0 && (
      <>
        <img className="ratingsIcon" src={iconNo} alt="Icon Off" />
        <img className="ratingsIcon" src={iconNo} alt="Icon Off" />
        <img className="ratingsIcon" src={iconNo} alt="Icon Off" />
      </>
    )}
    {rating === 1 && (
      <>
        <img className="ratingsIcon" src={iconYes} alt="Icon On" />
        <img className="ratingsIcon" src={iconNo} alt="Icon Off" />
        <img className="ratingsIcon" src={iconNo} alt="Icon Off" />
      </>
    )}
    {rating === 2 && (
      <>
        <img className="ratingsIcon" src={iconYes} alt="Icon On" />
        <img className="ratingsIcon" src={iconYes} alt="Icon On" />
        <img className="ratingsIcon" src={iconNo} alt="Icon Off" />
      </>
    )}
    {rating === 3 && (
      <>
        <img className="ratingsIcon" src={iconYes} alt="Icon On" />
        <img className="ratingsIcon" src={iconYes} alt="Icon On" />
        <img className="ratingsIcon" src={iconYes} alt="Icon On" />
      </>
    )}
  </div>
);

const Ratings = ({ nursing, stroller, changeTable }) => {
  return (
    <div
      style={{
        display: "flex",
        paddingTop: "5px",
        paddingBottom: "5px"
      }}
    >
      <RatingIcons rating={nursing} iconNo={nursingNo} iconYes={nursingYes} />
      <RatingIcons
        rating={stroller}
        iconNo={strollerNo}
        iconYes={strollerYes}
      />
      {changeTable && (
        <img className="ratingsIcon" src={diaperYes} alt="Has change table" />
      )}
      {!changeTable && (
        <img className="ratingsIcon" src={diaperNo} alt="No change table" />
      )}
    </div>
  );
};

export default Ratings;
