import React from "react";
import logo from "./branding/logo-beta.svg";
import headerIllustration from "./illustrations/welcome-header.jpg";
import community from "./illustrations/community.png";
import culture from "./illustrations/culture.png";
import eats from "./illustrations/eats.png";
import selfCare from "./illustrations/self-care.png";
import toronto from "./illustrations/toronto.png";
import confetti from "./illustrations/confetti.png";
import iconInsta from "./icons/icon-insta-white.svg";

const WelcomeOverlay = ({ onClose }) => {
  localStorage.setItem("welcomeShown", "true");

  return (
    <div
      className="overlay"
      style={{
        overflowY: "scroll"
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
          <div className="welcomeTitle">
            The best local spots for you and baby
          </div>
          <div className="welcomeSubtitle">
            Curated by parents in your community
          </div>
          <button type="button" className="welcomePageButton" onClick={onClose}>
            View Map
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
        <div className="welcomeSectionParagraph">
          We scout local businesses and crowdsource baby-tips from other parents
          to bring you the best things to do in your neighbourhood when you have
          a baby in tow.
        </div>
      </div>

      <div
        className="welcomeSection"
        style={{
          backgroundColor: "#ECE5DE"
        }}
      >
        <div className="welcomeSectionHeader">Get out there.</div>
        <div className="welcomeSectionParagraph">
          Even with sleep deprivation, fresh air is good for the soul. Our goal
          is to make it easier for you and baby to get out and enjoy yourselves.
        </div>
        <div className="categorySections">
          <div className="categorySection">
            <img src={eats} alt="Coffee cup" />
            <div className="categoryTitle">Eats</div>
            <div className="categoryDescription">
              Baby-friendly places to grab a bite or a drink.
            </div>
          </div>
          <div className="categorySection">
            <img src={community} alt="Books and blocks" />
            <div className="categoryTitle">Community</div>
            <div className="categoryDescription">
              Local drop-in centres, libraries, and parent groups.
            </div>
          </div>
          <div className="categorySection">
            <img src={selfCare} alt="Manicure and barbell" />
            <div className="categoryTitle">Self Care</div>
            <div className="categoryDescription">
              Places to go for some &quot;me&quot; time - curated for businesses
              that welcome your baby too.
            </div>
          </div>
          <div className="categorySection">
            <img src={culture} alt="Drum and paint palette" />
            <div className="categoryTitle">Culture</div>
            <div className="categoryDescription">
              Baby loving theatres, music classes etc.
            </div>
          </div>
        </div>
      </div>

      <div
        className="welcomeSection welcomeFooter"
        style={{
          backgroundColor: "#374B5B",
          color: "white"
        }}
      >
        <div className="welcomeFooterContent">
          <div className="welcomeSectionParagraph">
            We&apos;re a community of parents helping out other parents by
            sharing tips on baby-friendly things to do in your community. Find
            something new to explore today.
          </div>
          <button
            type="button"
            className="welcomePageButton"
            style={{
              color: "#374b5b",
              backgroundColor: "white",
              margin: "4px 0 20px 0"
            }}
            onClick={onClose}
          >
            View Map
          </button>
        </div>
        <img
          className="torontoIllustration"
          src={toronto}
          alt="Toronto sky line"
        />
      </div>

      <footer>
        <a
          href="https://forms.gle/yt38Z27Y3SE81q447"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit a baby tip
        </a>
        <a
          href="https://instagram.com/babyintow/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow us on Instagram
          <img
            src={iconInsta}
            style={{
              height: "20px",
              marginLeft: "6px",
              paddingBottom: "4px",
              verticalAlign: "middle"
            }}
            alt=""
          />
        </a>
      </footer>
    </div>
  );
};

export default WelcomeOverlay;
