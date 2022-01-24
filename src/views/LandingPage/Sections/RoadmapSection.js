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
            The First On-Chain, Virtualy Native Media Franchise
          </h4>
          <h4 className={classes.description}>Incredilbe Music</h4>
          <h4 className={classes.description}>
            Next Generation Virtual Media and 3D Art
          </h4>
          <h4 className={classes.description}>Unforgetable Live Events</h4>
          <h4 className={classes.description}>Luxury Fashion Branding</h4>
          <h2 className={classes.title}>NFT Holder Benefits</h2>
          <h4 className={classes.description}>NFT Price Floor Appreciation</h4>
          <h4 className={classes.description}>Cut of music royalties</h4>
          <h4 className={classes.description}>
            VIP access to DAC Concerts and Private Events
          </h4>
          <h4 className={classes.description}>
            First Access to Our Virtual Concert Platform as it Develops
          </h4>
          <h4 className={classes.description}>
            First Access to the DAC Video Game
          </h4>
          <h4 className={classes.description}>
            VIP Access to DAC Concerts and Destination Music Festivals
          </h4>
          <h4 className={classes.description}>
            NFT Staking to Accumulate a Social / Governance Token, Giving the
            Holder Increasing Voting Rights in Project Activities
          </h4>
          <h4 className={classes.description}>
            Access to Exclusive and Limited Edition Luxury Fashion
          </h4>
          <h4 className={classes.description}>Access to Future Whitelists</h4>

          <h2 className={classes.title}>
            Next Generation Immersive Virtual Media and 3D Art
          </h2>
          <h4 className={classes.description}>
            The DAC is accelerating towards becoming the most sophisticated
            media operation in Web3. This means a higher bar for art, music and
            visual media. To create radically compelling virtual media and bring
            the Disconauts to life, we leverage advanced virtual production. The
            art is photoreal, 3D and includes 10,000 unqiue Disconauts and
            peices of music.
          </h4>
          <h2 className={classes.title}>Metasverse Concert Platform</h2>
          <h4 className={classes.description}>
            Disconauts are ultra-realistic 3D models ready to perform virtual
            concerts. The funding from Mint will directly go into developing a
            virtual concert platform, giving out community premium access to
            virtual festivals.
          </h4>
          <h2 className={classes.title}>DAC Video Game</h2>
          <h4 className={classes.description}>
            Play as your Disconaut, explore other planet, go to interplanetary
            festivals, fight the overlord, and race your spaceships.
          </h4>
          <h2 className={classes.title}>Original Music</h2>
          <h4 className={classes.description}>
            The Disconaut collective will drop original music that the community
            has an ownership stake in. Holders will get Music Roalities
            accoridng to the number of NFTs they hold.
          </h4>
          <h2 className={classes.title}>Live Shows and Events</h2>
          <h4 className={classes.description}>
            Owning a DAC NFT acts as a VIP access token to live concerts, club
            nights, private events, access to DAC Club-houses, and curated
            destination music festivals.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
