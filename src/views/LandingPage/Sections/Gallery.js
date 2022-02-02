import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function Gallery() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    // classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>
        <h2 className={classes.title}>Gallery</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/1_07ghlq8zB?ik-sdk-version=javascript-1.4.3&updatedAt=1643819588268"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/9_1frbXBDJw?ik-sdk-version=javascript-1.4.3&updatedAt=1643773717216"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/4_2QbWZ8_lE?ik-sdk-version=javascript-1.4.3&updatedAt=1643773553282"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
              </GridItem>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
