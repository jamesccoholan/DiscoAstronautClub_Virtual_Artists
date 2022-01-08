import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/videoStyle";

const useStyles = makeStyles(styles);

export default function VideoSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            Your Ticket to the Greatest Festival in the Universe
          </h2>
          {/* <h5 className={classes.description}>Overview</h5> */}
        </GridItem>
      </GridContainer>
      <div className={classes.videoContainer}>
        <video loop autoPlay className={classes.video}>
          <source src={"/assets/mp4/DAC_promo.mp4"} />
        </video>
      </div>
    </div>
  );
}
