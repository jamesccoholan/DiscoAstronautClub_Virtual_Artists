import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h1 className={classes.title}>Metaverse Crypto House DJs</h1>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <img src="https://ik.imagekit.io/5ierklngtbt/img/Red_Chrome_Vn55ewCad?ik-sdk-version=javascript-1.4.3&updatedAt=1643768599156" />
            {/* <InfoArea
              title="Virtual Artists"
              // description="100 Unique Disconauts for Early Fans to Own"
              icon={
                "https://ik.imagekit.io/5ierklngtbt/img/Red_Chrome_Vn55ewCad?ik-sdk-version=javascript-1.4.3&updatedAt=1643768599156"
              }
              alt="Disconaut NFT"
              vertical
            /> */}
            <GridItem>
              <h2 className={classes.title}>Virtual Artists</h2>
            </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img src="https://ik.imagekit.io/5ierklngtbt/img/Star_LLdSyPIbfpw?ik-sdk-version=javascript-1.4.3&updatedAt=1643774062958" />
            <GridItem>
              <h2 className={classes.title}>Virtual Concerts</h2>
            </GridItem>
            {/* <InfoArea
              title="Virtual Concerts"
              // description="Music and Visual Media Drops"
              icon={
                "https://ik.imagekit.io/5ierklngtbt/img/Star_LLdSyPIbfpw?ik-sdk-version=javascript-1.4.3&updatedAt=1643774062958"
              }
              alt="Disconaut NFT"
              vertical
            /> */}
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img src="https://ik.imagekit.io/5ierklngtbt/img/Blue_Chrome_OaHZDzYOM?ik-sdk-version=javascript-1.4.3&updatedAt=1643768548208" />
            {/* <InfoArea
              title="NFTs"
              // description="Virtual Music Festivals, Live Concerts and Exclusive After-parties."
              icon={
                "https://ik.imagekit.io/5ierklngtbt/img/Blue_Chrome_OaHZDzYOM?ik-sdk-version=javascript-1.4.3&updatedAt=1643768548208"
              }
              alt="Disconaut NFT"
              vertical
            /> */}
            <GridItem>
              <h2 className={classes.title}>NFTs</h2>
            </GridItem>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <h2 className={classes.title}> </h2>
        </GridContainer>
        {/* <div>
          <img
            padding="20%"
            position="absolute"
            width="100%"
            left="50%"
            top="50%"
            height="100%"
            objectFit="fill"
            transform="translate(-50%, -62%"
            zIndex="-1"
            src="https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-07-20_at_9.26.35_AM_uTmLWmZFQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658323612873"
          />
          <img
            position="absolute"
            width="100%"
            left="50%"
            top="50%"
            height="100%"
            objectFit="fill"
            transform="translate(-50%, -62%"
            zIndex="-1"
            src="https://ik.imagekit.io/mbhxghyf1m2/Untitled_Linked_Comp_01__0-00-11-06__tiVXdG9Be.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658323676510"
          />
          <img
            position="absolute"
            width="100%"
            left="50%"
            top="50%"
            height="100%"
            objectFit="fill"
            transform="translate(-50%, -62%"
            zIndex="-1"
            src="https://ik.imagekit.io/mbhxghyf1m2/Untitled_Linked_Comp_01__0-01-56-11__Abjh-ESvXB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658323676462"
          />
        </div> */}
      </div>
    </div>
  );
}
