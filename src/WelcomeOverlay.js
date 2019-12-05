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
          <button className="welcomePageButton" onClick={onClose}>
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
        className="welcomeSection"
        style={{
          backgroundColor: "#374B5B",
          color: "white"
        }}
      >
        <div className="welcomeFooterContent">
          <div className="welcomeSectionParagraph">
            We&apos;re just getting started. Our BETA release includes the
            Toronto East End: Riverside, Leslieville, Danforth Village and the
            Beaches.
          </div>
          <div className="welcomeSectionParagraph">
            Help spread the love and share a baby tip. We&apos;ll get it up on
            the site so that other parents can benefit.
          </div>
          <button
            className="welcomePageButton"
            style={{
              color: "#374b5b",
              backgroundColor: "white",
              margin: "4px 0 20px 0"
            }}
            onClick={() => window.open("https://forms.gle/4gvt51zVjhTxsqJN9")}
          >
            Submit Baby Tip
          </button>
        </div>

        <img
          className="torontoIllustration"
          src={toronto}
          alt="Toronto sky line"
        />
      </div>
    </div>
  );
};

export default WelcomeOverlay;
