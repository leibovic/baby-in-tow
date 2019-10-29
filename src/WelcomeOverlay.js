import React from "react";
import logo from "./branding/logo.png";
import illustration from "./branding/welcome-illustration.jpg";

const WelcomeOverlay = ({ onClose }) => {
  localStorage.setItem("welcomeShown", "true");
  return (
    <div
      className="overlay"
      style={{
        overflowY: "scroll"
      }}
    >
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
            marginBottom: "20px"
          }}
        >
          We’ve gone to the meetups, talked to your neighbours and scouted the
          local cafes, gyms, and baby events to get the inside scoop on the best
          things to do in your hood when you have a baby in tow.
        </div>
        <button className="getStartedButton" onClick={onClose}>
          Get started
        </button>
        <div
          style={{
            backgroundColor: "#F7A79A",
            margin: "20px -24px 0 -24px",
            padding: "24px",
            fontSize: "14px"
          }}
        >
          <div
            style={{
              marginBottom: "10px"
            }}
          >
            When you’re on the go and have a baby attached to you struggle is
            real - it’s hard to find truly baby-friendly places to eat, workout,
            or simply hang out without having to conquer a stroller obstacle
            course.
          </div>
          <div>
            We’ve done the work for you and curated a list of baby-approved
            things to do in your local community, vetted by your baby-mama/dada
            neighbours.
          </div>
        </div>

        <div>
          <div className="welcomeSectionHeader">About us</div>
          <div className="welcomeParagraph">
            Our goal is to make it easier for parents + baby to get out and
            enjoy themselves because even with sleep deprivation, fresh air is
            good for the soul and your local community is here to support you.
          </div>
          <div className="welcomeSectionHeader">What will I find?</div>
          <div className="welcomeParagraph">
            For our first release, we’re starting out in the Toronto East End
            which includes Riverside, Leslieville, Danforth Village and the
            Beaches. Stick around as we expand to other parts of Toronto. If you
            want to help out your local community and have tips to share,{" "}
            <a href="mailto:hi@babyintow.ca">give us a shout!</a>
          </div>
          <div className="welcomeParagraph">
            Eats: A place to grab a bite or a drink.
          </div>
          <div className="welcomeParagraph">
            Community: Organizations with programming tailored towards the local
            community such as Libraries, Mother’s groups, and government funded
            EarlyOn child and family centres.
          </div>
          <div className="welcomeParagraph">
            Self care: Places to go where you can take some “me” time even if
            you have the baby with you. Includes: fitness studios, gyms, massage
            and other therapeutic services. For a business to qualify for this
            category they must either be receptive to providing services while
            the baby is present or provide alternatives for child care while the
            parent is receiving their service.
          </div>
          <div className="welcomeParagraph">
            Culture: Movies, visual arts, music, plays etc.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOverlay;
