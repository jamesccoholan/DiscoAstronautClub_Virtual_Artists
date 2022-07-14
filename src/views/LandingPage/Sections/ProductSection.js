import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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
            The First Virtually Native On-Chain Artist
          </h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="10K NFT Collection"
              description="10,000 Unique Pieces of Generative 3D Art and Music."
              icon={
                "https://ik.imagekit.io/5ierklngtbt/img/Red_Chrome_Vn55ewCad?ik-sdk-version=javascript-1.4.3&updatedAt=1643768599156"
              }
              alt="Disconaut NFT"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Virtual Artists, Original Music"
              description="Music and Visual Media Drops. Royalties Distributed to NFT Holders."
              icon={
                "https://ik.imagekit.io/5ierklngtbt/img/Star_LLdSyPIbfpw?ik-sdk-version=javascript-1.4.3&updatedAt=1643774062958"
              }
              alt="Disconaut NFT"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Metaverse Concerts and Live Events"
              description="Virtual Music Festivals, Live Concerts and Exclusive After-parties."
              icon={
                "https://ik.imagekit.io/5ierklngtbt/img/Blue_Chrome_OaHZDzYOM?ik-sdk-version=javascript-1.4.3&updatedAt=1643768548208"
              }
              alt="Disconaut NFT"
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
