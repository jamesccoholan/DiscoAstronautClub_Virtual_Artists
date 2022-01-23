import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Brightness3 from "@material-ui/icons/Brightness3";
// import Brightness5 from "@material-ui/icons/Brightness5";
// import FlashOn from "@material-ui/icons/FlashOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem2 from "components/Grid/GridItem2.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function VideoSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem2 xs={0} sm={0} md={0}>
          <video
            autoPlay
            loop
            controls
            muted
            style={{
              position: "absolute",
              width: "100%",
              left: "50%",
              top: "50%",
              height: "100%",
              objectFit: "fill",
              transform: "translate(-50%, -62%",
              zIndex: "-1",
            }}
          >
            <source src={"assets/mp4/DAC_promo.mp4"} type="video/mp4" />
          </video>
        </GridItem2>
      </GridContainer>
    </div>
  );
}
