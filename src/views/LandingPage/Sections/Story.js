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

export default function Story() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <h2 className={classes.title}> </h2>
      </GridContainer>
      <GridContainer justify="center">
        <h2 className={classes.title}> </h2>
      </GridContainer>
      <GridContainer justify="center">
        <h2 className={classes.title}> </h2>
      </GridContainer>
      <GridContainer justify="center">
        <h2 className={classes.title}> </h2>
      </GridContainer>
      <GridContainer justify="center">
        <h2 className={classes.title}> </h2>
      </GridContainer>
      <GridContainer justify="center">
        <h2 className={classes.title}> </h2>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>The Disconauts</h2>

          {/* <h2 className={classes.title}>Project Overview</h2> */}
          <h4 className={classes.description}>
            The Disconauts are a group of highly passionate, creative, and
            exploratory people who decide to board ten unique Starships and
            blast off from their home planet in search of adventure, to find
            what they feel theyve been missing, and to bring their spirit and
            music to other planets. The Disconauts home planet, once a place of
            freedom, innovation, and creative expression, has come under the
            power of a ruling Overlord. Social gatherings, music, and festivals
            have been banned and people live in fear. Enter the Disconatus, a
            community of like-minded, creative, and technical visionary rebels
            who oppose everything the Overlord stands for and the empire he
            commands. Their mission is to board spaceships and escape the planet
            in search of freedom, a frontier, and a home where they can fully
            realize their destiny outside of the tyrannical reign of the
            overlord. Chasing the Disconauts throughout the galaxy are the
            Overlords Space-Police, a group of highly trained mercenary bounty
            hunters seeking to extinguish the threat the Disconauts pose to
            Overlords Empire. A symbol of personal sovereignty and creative and
            technical expression, the Music Festival is the Disconauts key tool
            of rebellion. Strictly banned on their planet, the Disconauts use
            concerts as a way to prove their independence and establish their
            identities. They explore the galaxy in a fleet of ships to establish
            utopian colonies and throw the greatest festivals in the universe.
            As a part of their expansion and exploration of the universe, they
            land on Earth, bringing sick beats and super crazy futuristic
            technology to experience incredible virtual concerts. Their tech
            gives people on earth a window into the shows the DiscoNatus are
            performing on other planets and in space. They are a group of
            people, a community searching for more out of life and willing to
            adventure in the frontiers to find it. A community of like-minded,
            creative, and technical visionary explorers. Some of the Disconauts
            live among us and play shows, bringing with them their spirit of
            passion, creativity, free expression, and exploration. The
            Disconauts use concerts as a way to come together and share
            experiences with like-minded people in the best way possible. Future
            adventures include the Disconauts exploration of other galaxies,
            finding new planets to share their culture with, and throwing
            festivals. What planets and distant galaxies will the Disconauts
            explore? Will the Overlords bounty hunters crush their progress or
            worse their spirit? Will the Disconauts find their new home before
            running out of fuel? Stay tuned, and join the space fleet on mint to
            find out.
          </h4>

          <h4 className={classes.description}></h4>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          {/* <h2 className={classes.title}>Project Overview</h2> */}
          <h4 className={classes.description}></h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
