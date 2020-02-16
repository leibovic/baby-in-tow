import React from "react";
import logo from "./branding/logo-beta.svg";
import iconInsta from "./icons/icon-insta-white.svg";
import avatarPlaceholder from "./icons/avatar-placeholder.svg";

const AboutPage = () => {
  return (
    <>
      <div
        className="welcomeSection"
        style={{
          background: "#B9D9D2"
        }}
      >
        <div className="welcomeHeaderContent">
          <img className="logo" src={logo} alt="Baby in Tow" />
          <div className="welcomeTitle">
            An intro heading, like– Baby in Tow began on a dark and stormy night
          </div>
          <div className="welcomeSectionParagraph">
            Here’s the funny story about how the idea came to light. And how
            this passion project was not just a fun thing to take on while on
            mat leave, but fulfills a need for parents and caregivers hanging
            out with a baby all day.
          </div>
        </div>
      </div>

      <div className="welcomeSection">
        <div className="welcomeSectionHeader">Our vision</div>
        <div className="welcomeSectionParagraph">
          Here’s some copy about our vision for the project being open source,
          and how cool it would be to pass on to other parents on maternity
          and/or parental leave. It makes the prospect of keeping busy while on
          leave sound exciting! Perhaps there can be a github text link here?
        </div>
      </div>

      <div
        className="welcomeSection"
        style={{
          backgroundColor: "#ECE5DE"
        }}
      >
        <div className="welcomeSectionHeader">Who we are</div>
        <div className="welcomeSectionParagraph">
          Even with sleep deprivation, fresh air is good for the soul. Our goal
          is to make it easier for you and baby to get out and enjoy yourselves.
        </div>
        <div className="categorySections">
          <div className="categorySection">
            <img src={avatarPlaceholder} alt="" />
            <div className="categoryTitle">Christine Jinae Lee</div>
            <div className="categoryDescription">
              Here’s some info about Christine. It could be a few sentences and
              provide some fun info about her family, her day job, her
              experience, and her interests.
            </div>
          </div>
          <div className="categorySection">
            <img src={avatarPlaceholder} alt="" />
            <div className="categoryTitle">Margaret Leibovic</div>
            <div className="categoryDescription">
              Here’s some info about Margaret. It could be a few sentences and
              provide some fun info about her family, her day job, her
              experience, and her interests.
            </div>
          </div>
          <div className="categorySection">
            <img src={avatarPlaceholder} alt="" />
            <div className="categoryTitle">Lindsay Trevors</div>
            <div className="categoryDescription">
              Here’s some info about Lindsay. It could be a few sentences and
              provide some fun info about her family, her day job, her
              experience, and her interests.
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
        <div className="welcomeSectionHeader">
          Want to get involved on your maternity or parental leave?
        </div>

        <button
          type="button"
          className="welcomePageButton"
          style={{
            color: "#374b5b",
            backgroundColor: "white",
            margin: "4px 0 20px 0"
          }}
          onClick={() => window.open("mailto:babyintow@gmail.com")}
        >
          Get in touch
        </button>
      </div>

      <div className="socialFooter">
        <a
          href="https://instagram.com/babyintow/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
            lineHeight: "20px"
          }}
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
            alt="Instagram"
          />
        </a>
      </div>
    </>
  );
};

export default AboutPage;
