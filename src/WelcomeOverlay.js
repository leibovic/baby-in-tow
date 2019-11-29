import React from "react";
import logo from "./branding/logo.svg";
import headerIllustration from "./illustrations/welcome-header.jpg";
import community from "./illustrations/community.png";
import culture from "./illustrations/culture.png";
import eats from "./illustrations/eats.png";
import selfCare from "./illustrations/self-care.png";
import toronto from "./illustrations/toronto.png";
import confetti from "./illustrations/confetti.png";

const WelcomeOverlay = ({ onClose }) => {
  localStorage.setItem("welcomeShown", "true");
  return (
    <div
      className="overlay"
      style={{
        overflowY: "scroll",
        fontSize: "14px"
      }}
    >
      <div className="welcomeSection">
        <img
          className="welcomeHeaderIllustration"
          src={headerIllustration}
          alt="Parents with babies"
        />
        <div className="welcomeHeaderContent">
          <img className="logo" src={logo} alt="Baby in Tow" />
          <div
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              margin: "24px 0"
            }}
          >
            The best local spots for you and baby
          </div>
          <div
            style={{
              marginBottom: "24px",
              fontSize: "18px"
            }}
          >
            Curated by parents in your community
          </div>
          <button className="getStartedButton" onClick={onClose}>
            Get Started
          </button>
        </div>
      </div>

      <div
        className="welcomeSection"
        style={{
          background: `url(${confetti})`,
          color: "white"
        }}
      >
        <div className="welcomeSectionHeader">
          Like word of mouth, but better.
        </div>
        <div>
          We’ve attended the meetups, talked to your neighbours and scouted
          local business to get the inside scoop on the best things to do in
          your hood when you have a baby in tow.
        </div>
      </div>

      <div
        className="welcomeSection"
        style={{
          backgroundColor: "#ECE5DE"
        }}
      >
        <div className="welcomeSectionHeader">Get out there.</div>
        <div>
          Our goal is to make it easier for parents + baby to get out and enjoy
          themselves because even with sleep deprivation, fresh air is good for
          the soul and your local community is here to support you.
        </div>
        <div className="categorySection">
          <img src={eats} alt="Coffee cup" />
          <div className="categoryTitle">Eats</div>
          <div>A place to grab a bite or a drink</div>
        </div>
        <div className="categorySection">
          <img src={community} alt="Books and blocks" />
          <div className="categoryTitle">Community</div>
          <div>
            Local organizations such as Libraries, Mother’s groups, and
            government funded EarlyOn child and family centres
          </div>
        </div>
        <div className="categorySection">
          <img src={selfCare} alt="Manicure and barbell" />
          <div className="categoryTitle">Self Care</div>
          <div>
            Places to go for some “me” time while you have a baby with you. We
            only include businesses that can provide services while the baby is
            present or that provide child minding
          </div>
        </div>
        <div className="categorySection">
          <img src={culture} alt="Drum and paint palette" />
          <div className="categoryTitle">Culture</div>
          <div>Movies, visual arts, music, plays etc.</div>
        </div>
      </div>

      <div
        className="welcomeSection"
        style={{
          backgroundColor: "#374B5B",
          color: "white",
          textAlign: "left"
        }}
      >
        <div
          style={{
            marginBottom: "16px"
          }}
        >
          Our first release includes the Toronto East End (Riverside,
          Leslieville, Danforth Village and the Beaches) and we’re expanding!
        </div>
        <div>
          If you want to get involved in bringing this into your neighbourhood
          or simply have a helpful tip to share{" "}
          <a
            href="mailto:babyintow.to@gmail.com"
            style={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "underline"
            }}
          >
            give us a shout!
          </a>
        </div>

        <img
          style={{
            height: "250px"
          }}
          src={toronto}
          alt="Toronto sky line"
        />
      </div>
    </div>
  );
};

export default WelcomeOverlay;
