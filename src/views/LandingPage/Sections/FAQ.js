import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function FAQ() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    // classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>
        <h2 className={classes.title}>FAQ</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                When Will The DAC Launch Take Place?
                <br />
              </h4>
              <h4 className={classes.description}>
                DAC will mint in 2022.
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem
                xs={100}
                sm={100}
                md={100}
                className={classes.itemGrid}
              ></GridItem>
              <h4 className={classes.cardTitle}>
                How Can I Join?
                <br />
              </h4>
              <h4 className={classes.description}>
                Join our Discord and follow our socials to stay up to date.
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem
                xs={100}
                sm={100}
                md={100}
                className={classes.itemGrid}
              ></GridItem>
              <h4 className={classes.cardTitle}>
                Will Disconauts Be A Sound Investment?
                <br />
              </h4>
              <h4 className={classes.description}>
                NFT holders have an ownership share in the Disco Astronaut
                artist collective. This asset appreciates as the brand expands
                through music and merch drops and metaverse concerts and live
                events.
                <br />
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem
                xs={100}
                sm={100}
                md={100}
                className={classes.itemGrid}
              ></GridItem>
              <h4 className={classes.cardTitle}>
                How Many Disconauts will be minted?
                <br />
              </h4>
              <h4 className={classes.description}>
                10,000 unique will be minted.
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem
                xs={100}
                sm={100}
                md={100}
                className={classes.itemGrid}
              ></GridItem>
              <h4 className={classes.cardTitle}>
                Will Disconaut NFTs Have Utility?
                <br />
              </h4>
              <h4 className={classes.description}>
                Disco Astronauts Clubs goal is to leverage mass culture through
                the reach of music and visual media to bring people on-chain.
                Holding a DAC provides access to metaverse concerts and special
                live events.
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem
                xs={100}
                sm={100}
                md={100}
                className={classes.itemGrid}
              ></GridItem>
              <h4 className={classes.cardTitle}>
                Core Concepts
                <br />
              </h4>
              <h4 className={classes.description}>
                Innovation Focused. 10X Improvement Across Art, Media, Community
                User Experience, Gas Fees, Accessibility Utility and Long Term
                Value.
                <br />
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem
                xs={100}
                sm={100}
                md={100}
                className={classes.itemGrid}
              ></GridItem>
              <h4 className={classes.cardTitle}>
                DISCO
                <br />
              </h4>
              <h4 className={classes.description}>
                <br />
              </h4>
              <img
                src={"assets/img/NewSuits/6.png"}
                alt="..."
                className={imageClasses}
              />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem
                xs={100}
                sm={100}
                md={100}
                className={classes.itemGrid}
              ></GridItem>
              <h4 className={classes.cardTitle}>
                ASTRONAUT
                <br />
              </h4>
              <h4 className={classes.description}>
                <br />
              </h4>
              <img
                src={"assets/img/NewSuits/7.png"}
                alt="..."
                className={imageClasses}
              />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem
                xs={100}
                sm={100}
                md={100}
                className={classes.itemGrid}
              ></GridItem>
              <h4 className={classes.cardTitle}>
                CLUB
                <br />
              </h4>
              <h4 className={classes.description}>
                <br />
              </h4>
              <img
                src={"assets/img/NewSuits/4.png"}
                alt="..."
                className={imageClasses}
              />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
