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
          <h2 className={classes.title}>
            The First Virtually Native On-Chain Artist Collective
          </h2>
          {/* <h5 className={classes.description}>Overview</h5> */}
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="10K NFT Collection"
              description="Hi-res 3D generative art. Owning a Disconaut NFT represents an investment into the artist's expanding brand and community."
              icon={Brightness5}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Virtual Artists, Original Music"
              description="The Disco Astronaut Club is an artist collective that will be releasing original music, videos, and cinematic content with on-chain ownership offered to NFT holders."
              icon={Brightness3}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Metaverse Concerts and Live Events"
              description="Disconauts play virtual shows in the Metaverse on board their Star-ships, on earth and on distant planets they discover."
              icon={FlashOn}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <h2 className={classes.title}> </h2>
        </GridContainer>
      </div>
    </div>
  );
}
