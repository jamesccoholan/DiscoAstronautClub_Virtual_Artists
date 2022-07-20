import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPageSections/storyStyle.js";

const useStyles = makeStyles(styles);

export default function Story() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Fade duration={2000} bottom cascade>
        <GridContainer justify="center">
          <h1 className={classes.title}>The Story So Far...</h1>
          <br />
          <GridItem xs={12} sm={10} md={10} className={classes.sectionArea}>
            <GridItem xs={12} sm={8} md={6}>
              <h4 className={classes.description}>
                {
                  "Meet Disconaut. are a group of exploratory rebels who band together, board star-ships, and blast into space in search of adventure across the universe. They are fleeing their home planet, once a place of freedom, innovation, and creative expression, which has come under the power of a ruling Overlord. Social gatherings, music, and festivals had been banned and the people there live in fear. The Disconauts oppose everything the Overlord stands for and the empire he commands."
                }
              </h4>
            </GridItem>
            <GridItem xs={12} sm={4} md={6}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/5ierklngtbt/img/story/Disconaut_93oDYnJ78?ik-sdk-version=javascript-1.4.3&updatedAt=1643773831802"
                }
                alt="Disconaut Scene"
              />
            </GridItem>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={10}
            className={classNames(
              classes.sectionArea,
              classes.sectionAreaMargin
            )}
          >
            <GridItem xs={12} sm={4} md={6}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/5ierklngtbt/img/story/Gathering_iNsmL3lE3fp?ik-sdk-version=javascript-1.4.3&updatedAt=1643773858123"
                }
                alt="Gathering Scene"
              />
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <h4
                className={classNames(
                  classes.description,
                  classes.descriptionRight
                )}
              >
                {
                  "A symbol of personal sovereignty and creative and technical expression, the music festival is the Disconauts key tool of rebellion. Strictly banned on their planet, the Disconauts use concerts as a way to prove their independence and establish their identities. Their mission, to throw the greatest festivals in the universe and establish utopian colonies in accordance with their ideals."
                }
              </h4>
            </GridItem>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={10}
            className={classNames(
              classes.sectionArea,
              classes.sectionAreaMargin
            )}
          >
            <GridItem xs={12} sm={8} md={6}>
              <h4 className={classes.description}>
                {
                  "And now, theyre landing on Earth, ready to bring incredible music and futuristic technology to experience Metaverse concerts and DAC shows taking place on distant planets. Stay tuned as the Disconauts explore the stars, find new planets and throw monumental music events. Join the space fleet on mint to join the club."
                }
              </h4>
            </GridItem>
            <GridItem xs={12} sm={4} md={6} className={classes.right}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/5ierklngtbt/img/story/Party_D7ZilzNIt?ik-sdk-version=javascript-1.4.3&updatedAt=1643773798811"
                }
                alt="Party Scene"
              />
            </GridItem>
          </GridItem>
        </GridContainer>
      </Fade>
    </div>
  );
}
