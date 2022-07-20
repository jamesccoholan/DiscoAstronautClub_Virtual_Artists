import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import ReactSoundCloud from "react-soundcloud-embedded";

const useStyles = makeStyles(styles);

export default function Music() {
  const classes = useStyles();
  // const imageClasses = classNames(
  //   classes.imgRaised,
  //   // classes.imgRoundedCircle,
  //   classes.imgFluid
  // );
  return (
    <div className={classes.section}>
      <div>
        <h2 className={classes.title}>Music</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <div>
                  <label>DAC SoundCloud:</label>
                  <ReactSoundCloud
                    url={
                      "https://soundcloud.com/nyukca/atmos?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    }
                  />
                </div>
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <div>
                  <label>DAC SoundCloud:</label>
                  <ReactSoundCloud
                    url={
                      "https://soundcloud.com/nyukca/atmos?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    }
                  />
                </div>
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <div>
                  <label>DAC SoundCloud:</label>
                  <ReactSoundCloud
                    url={
                      "https://soundcloud.com/nyukca/atmos?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    }
                  />
                </div>
              </GridItem>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
