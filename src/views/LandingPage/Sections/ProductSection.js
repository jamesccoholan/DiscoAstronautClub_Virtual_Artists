import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Brightness3 from "@material-ui/icons/Brightness3";
import Brightness5 from "@material-ui/icons/Brightness5";
import FlashOn from "@material-ui/icons/FlashOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>The Best Art</h2>
          <h5 className={classes.description}>An artist</h5>
        </GridItem>
      </GridContainer>
      <div>
        <div className="video-background">
          <video loop autoPlay muted>
            <source
              src={require("/Users/lighttwist/Documents/Risky Boys/Landing Page/material-kit-react-main/src/assets/hbp.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Producer/DJ"
              description="Disco Astronaut releases music for everyone."
              icon={Brightness3}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Uniqe NFT"
              description="Disco Astronauts shows occur in Virtual space. NFT holders have access to them."
              icon={Brightness5}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Virtual Artist"
              description="Stay tuned for more."
              icon={FlashOn}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
