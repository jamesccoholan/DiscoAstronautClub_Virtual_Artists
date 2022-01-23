import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import CollectionsSharp from "@material-ui/icons/CollectionsSharp";
import LibraryMusicSharp from "@material-ui/icons/LibraryMusicSharp";
import LocalActivitySharp from "@material-ui/icons/LocalActivitySharp";
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
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="10K NFT Collection"
              description="Hi-res 3D generative art. Disconauts will lean into a different muic culture. Each NFT will have an original, generative peice of music associated to it."
              icon={CollectionsSharp}
              iconColor="red"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Virtual Artists, Original Music"
              description="The Disco Astronaut Club is an artist collective that will be release original music, videos, and cinematic content across social media."
              icon={LibraryMusicSharp}
              iconColor="gold"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Metaverse Concerts and Live Events"
              description="Disconauts play virtual shows in the Metaverse on board their Star-ships, on earth and on distant planets they discover."
              icon={LocalActivitySharp}
              iconColor="purple"
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
