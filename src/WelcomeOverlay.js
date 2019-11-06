import React from "react";
import logo from "./branding/logo.png";
import illustration from "./branding/welcome-illustration.jpg";
import Pin from "./Pin";

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
      <img
        style={{
          height: "50px",
          marginTop: "24px",
          marginLeft: "24px"
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
            height: "250px"
          }}
          src={illustration}
          alt="Parents with babies"
        />
        <div
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            padding: "0 24px 10px 24px",
            alignSelf: "flex-start"
          }}
        >
          The best local spots for you and baby
        </div>
        <div
          style={{
            fontSize: "16px",
            padding: "0 24px 20px 24px",
            alignSelf: "flex-start"
          }}
        >
          Curated by parents in your community
        </div>
        <button className="getStartedButton" onClick={onClose}>
          Get Started
        </button>
        <div
          style={{
            backgroundColor: "#5a7a94",
            color: "white",
            padding: "24px",
            width: "calc(100% - 48px)"
          }}
        >
          <div className="welcomeSectionHeader">
            Like word of mouth,
            <br />
            but better.
          </div>
          <div className="welcomeParagraph">
            We’ve attended the meetups, talked to your neighbours and scouted
            local business to get the inside scoop on the best things to do in
            your hood when you have a baby in tow.
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#ECE5DE",
            padding: "24px"
          }}
        >
          <div className="welcomeSectionHeader">Get out there.</div>
          <div className="welcomeParagraph">
            Our goal is to make it easier for parents + baby to get out and
            enjoy themselves because even with sleep deprivation, fresh air is
            good for the soul and your local community is here to support you.
          </div>
          <div className="categoryRow">
            <div>
              <Pin categoryColor="#D9B302" disableTransform="true" />
            </div>
            <div>
              <div className="categoryTitle">eats</div>
              <div>A place to grab a bite or a drink</div>
            </div>
          </div>
          <div className="categoryRow">
            <div>
              <Pin categoryColor="#548231" disableTransform="true" />
            </div>
            <div>
              <div className="categoryTitle">community</div>
              <div>
                Local organizations such as Libraries, Mother’s groups, and
                government funded EarlyOn child and family centres
              </div>
            </div>
          </div>
          <div className="categoryRow">
            <div>
              <Pin categoryColor="#F7A79A" disableTransform="true" />
            </div>
            <div>
              <div className="categoryTitle">self care</div>
              <div>
                Places to go for some “me” time while you have a baby with you.
                We only include businesses that can provide services while the
                baby is present or that provide child minding
              </div>
            </div>
          </div>
          <div className="categoryRow">
            <div>
              <Pin categoryColor="#007EA3" disableTransform="true" />
            </div>
            <div>
              <div className="categoryTitle">culture</div>
              <div>Movies, visual arts, music, plays etc.</div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#374B5B",
            color: "white",
            padding: "24px"
          }}
        >
          <div className="welcomeSectionParagraph">
            Our first release includes the <b>Toronto East End</b> (Riverside,
            Leslieville, Danforth Village and the Beaches) and we’re expanding!
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
        </div>
      </div>
    </div>
  );
};

export default WelcomeOverlay;
