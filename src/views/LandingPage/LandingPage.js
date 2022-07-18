import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import VideoSection from "./Sections/VideoSection.js";
import VideoSection2 from "./Sections/VideoSection2";
import TeamSection2 from "./Sections/TeamSection2.js";
import WorkSection from "./Sections/RoadmapSection.js";
import Gallery from "./Sections/Gallery.js";
import Story from "./Sections/Story.js";
// import FAQ from "./Sections/FAQ.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Disco Astronaut Club"
        rightLinks={<HeaderLinks />}
        absolute
        {...rest}
      />
      <Parallax
        filter
        image={
          "https://ik.imagekit.io/5ierklngtbt/img/DACWide_mib5GvxUw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643766020863"
        }
        alt="Disco Astronaut Club"
      >
        <Fade duration={2000} bottom cascade>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Disco Astronaut Club</h1>
                <h2 className={classes.subtitle}>
                  Your Ticket to the Greatest Festival in the Universe.
                </h2>
                <h4>A Next Generation Music-NFT Project Minting in 2022</h4>
                <br />
                <Button
                  color="twitter"
                  size="lg"
                  href="https://youtu.be/ezRnFj08KlI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.titleButton}
                >
                  <i className="fas fa-play" />
                  Trailer
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Fade>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
      <div>
        <VideoSection />
        <WorkSection />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Gallery />
          </div>
        </div>
        <Story />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <TeamSection2 />
            <VideoSection2 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
