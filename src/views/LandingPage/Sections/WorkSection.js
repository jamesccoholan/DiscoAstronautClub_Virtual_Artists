import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h1 className={classes.title}>Roadmap</h1>
          <h4 className={classes.description}>
            The Disco Astronaut Club is an on-chain virtual media franchise that
            produces top of the line music and next generation visual media as
            well as hosting incredible live events. Our focus is being on chain
            and vritually native from gensis, we working hard to establish the
            DAC with a strong community and brand.
          </h4>
          <h2 className={classes.title}>NFT Holder Benefits</h2>
          <h4 className={classes.description}>NFT Price Floor Appreciation</h4>
          <h4 className={classes.description}>Cut of music royalties</h4>
          <h4 className={classes.description}>VIP access to DAC Events</h4>
          <h4 className={classes.description}>
            First Access to Virtual Concerts as They Develop
          </h4>
          <h4 className={classes.description}>
            NFT Staking to Accumulate a Social / Governance Token That Gives the
            Holder Increasing Voting Rights in Project Activities
          </h4>
          <h4 className={classes.description}>
            Access to Exclusive and Limited Edition Merch
          </h4>
          <h4 className={classes.description}>Access to Future Whitelists</h4>

          <h2 className={classes.title}>
            Next Generation Art and Virtual Media Production
          </h2>
          <h4 className={classes.description}>
            The DAC aims is to be the most sophisticated media operation in the
            NFT space. This means a higher bar for art, music and media. We
            leverage advanced virtual production techniques to bring the Disco
            Astronauts to life and make radically compelling live
            enterttianment. The art will be photoreal-3D and include 10,000
            unqiue Disconauts with a rarity scale basded on features.
          </h4>
          <h2 className={classes.title}>Original Concerts and Music Drops</h2>
          <h4 className={classes.description}>
            Disco Astronauts are ultra-realistic 3D models and ready to perform
            virtual concerts. The Disconaut collective will drop original music
            that the community has an ownership stake in.
          </h4>
          <h2 className={classes.title}>Live Shows and Events</h2>
          <h4 className={classes.description}>
            See the Disconauts perform live, go to events as a community. We
            will be holding events around the world. Disco Astronauts will
            perform at live concerts and festivlas, NFT holders get special
            access.
          </h4>
          {/* <h2 className={classes.title}>Secondary Markets</h2>
          <h4 className={classes.description}>
            Solanart, FTX NFT, Royalties are set at 10%. We are 100% confirmed
            and ready to be listed on ALL marketplaces on Solana, including but
            not limited to Solanart, Magic Eden, SolSea, FTX, Alpha Art, Digital
            Eyes, etc.
          </h4> */}
        </GridItem>
      </GridContainer>
    </div>
  );
}
