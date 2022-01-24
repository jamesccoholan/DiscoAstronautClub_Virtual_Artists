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
                  src={"assets/img/NewSuits/1.png"}
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              {/* <h4 className={classes.cardTitle}>
                DiscoNaut #5555
                <br />
              </h4> */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={"assets/img/NewSuits/9.png"}
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              {/* <h4 className={classes.cardTitle}>
                DiscoNaut #6574
                <br />
              </h4> */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={"assets/img/NewSuits/4.png"}
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              {/* <h4 className={classes.cardTitle}>
                DiscoNaut #2143
                <br />
              </h4> */}
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
