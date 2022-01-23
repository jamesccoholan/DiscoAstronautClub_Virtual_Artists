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
            The Disconauts are a group of passionate and creative exploratory
            and visionary rebels who band together, board starships, and blast
            off into blast off in search of adventure across the universe. They
            are fleeing their home planet, once a place of freedom, innovation,
            and creative expression, which has come under the power of a ruling
            Overlord. Social gatherings, music, and festivals had been banned
            and the people there live in fear. They oppose everything the
            Overlord stands for and the empire he commands. A symbol of personal
            sovereignty and creative and technical expression, the Music
            Festival is the Disconauts key tool of rebellion. Strictly banned on
            their planet, the Disconauts use concerts as a way to prove their
            independence and establish their identities. Their mission, to throw
            the greatest festivals in the universe and establish utopian
            colonies in accordance with their ideals.
          </h4>
          <h4 className={classes.description}>
            And now, theyre landing on Earth, ready to bring incredible music
            and futuristic technology to experience virtual concerts in the
            Metaverse and DAC concerts taking place on different planets. Stay
            tuned to the Disconauts explore distant galaxies, find new planets
            and throw incredible festivals.Join the space fleet on mint to join
            the club.
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
