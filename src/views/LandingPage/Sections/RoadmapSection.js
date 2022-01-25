import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/roadmapStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h1 className={classes.title}>Roadmap</h1>
          <h4 className={classes.description}>
            The First On-Chain, Virtually Native Media Franchise
          </h4>
          <h4 className={classes.description}>
            Incredible Original and Generative Music
          </h4>
          <h4 className={classes.description}>
            Next-Gen Immersive Virtual Media and 3D Art
          </h4>
          <h4 className={classes.description}>Unforgettable Live Events</h4>
          <h4 className={classes.description}>Luxury Fashion</h4>
          <h2 className={classes.title}>NFT Holder Benefits</h2>
          <h4 className={classes.description}>NFT Price Floor Appreciation</h4>
          <h4 className={classes.description}>
            A Percentage of Music Royalties
          </h4>
          <h4 className={classes.description}>
            VIP Access to DAC Concerts, Private Events and Destination Music
            Festivals
          </h4>
          <h4 className={classes.description}>
            First Access to Our Virtual Concert Platform
          </h4>
          <h4 className={classes.description}>
            First Access to the DAC Video Game
          </h4>
          <h4 className={classes.description}>
            VIP access to DAC Concerts and Destination Music Festivals
          </h4>
          <h4 className={classes.description}>
            NFT Staking to Accumulate a Social and Governance Token, Giving the
            Holder Increasing Voting Rights in Project Activities
          </h4>
          <h4 className={classes.description}>
            Access to Exclusive and Limited Edition Luxury Fashion
          </h4>
          <h4 className={classes.description}>Access to Future Whitelists</h4>
          <h2 className={classes.title}>
            The Most Sophisticated Media Operation in Web3
          </h2>
          <h4 className={classes.description}></h4>
          <h4 className={classes.description}>
            A higher bar for art, music and visual media. The DAC leverages
            advanced virtual production techniques to create radically
            compelling entertainment and bring the Disconauts to life.
          </h4>
          <h2 className={classes.title}>Original Music</h2>
          <h4 className={classes.description}>
            The artist as an investible asset. DAC will have original music
            drops that the community takes an ownership stake in. Holders will
            get music royalties according to the number of DAC NFTs they posses.
            10,000 unique generative pieces of music will be ascribed to the
            NFTs.
          </h4>
          <h2 className={classes.title}>Metaverse Concert Platform</h2>
          <h4 className={classes.description}>
            The full festival experience, virtualized.
          </h4>
          <h4 className={classes.description}>
            Virtualized Music Festivals; custom light shows and visuals, live DJ
            Sets, and larger than life venues. Accessible through streaming
            services and VR.
            
          </h4>
          <h2 className={classes.title}>Live Shows and Events</h2>
          <h4 className={classes.description}>
            Owning a DAC NFT acts as a VIP access token to live concerts, club
            nights, private events, DAC club-houses, and curated destination
            music festivals.
          </h4>
          <h2 className={classes.title}>DAC Video Game</h2>
          <h4 className={classes.description}>
            Play as your Disconaut, explore other planets, go to interplanetary
            festivals, fight the overlord, and race your spaceships throughout
            the universe.
          </h4>
          <h2 className={classes.title}>Luxury Fashion</h2>
          <h4 className={classes.description}>
            Each Disconaut has a unique look that leans into various sub-genres
            of music culture. Own the physical merchandise of your on-chain NFT.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
