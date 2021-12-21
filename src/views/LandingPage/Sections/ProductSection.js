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
            Your Ticket to the Greatest Festival in the Universe
          </h2>
          {/* <h5 className={classes.description}>Overview</h5> */}
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
              description="3D Generative 10K NFT on Solana. Space/Music theme. Disco Astronaut is a community but also an artist that people can engage with through songs, videos, social media, virtual concerts, merch, on top of holding the NFT. NFT gives the audience an ownership share in the artist as the brand expands. "
              icon={Brightness3}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="NFT Collection"
              description="Own a Disco Astronaut and a peice of this artists carrer. Blastoff to the moon with us on Launch. We have made it our goal to make sure utility is always offered to all our students.
              "
              icon={Brightness5}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Virtual Concerts and Live Events"
              description="Every owner of the NFT gets to go to the virtual shows. Own a piece of an artist from the beginning as they progress. We are building these artists to all exist and play shows ina virtual evniorment called the Agora. A place NFT holders will have access to."
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
