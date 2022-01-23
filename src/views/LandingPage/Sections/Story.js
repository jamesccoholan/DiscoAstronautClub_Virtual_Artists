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
          <h2 className={classes.title}>The Disconauts</h2>
          <GridItem xs={12} sm={10} md={10} className={classes.sectionArea}>
            <GridItem xs={12} sm={8} md={6}>
              <h4 className={classes.description}>
                {
                  "The Disconauts are a group of passionate and creative exploratory and visionary rebels who band together, board starships, and blast off into blast off in search of adventure across the universe. They are fleeing their home planet, once a place of freedom, innovation, and creative expression, which has come under the power of a ruling Overlord. Social gatherings, music, and festivals had been banned and the people there live in fear. They oppose everything the Overlord stands for and the empire he commands."
                }
              </h4>
            </GridItem>
            <GridItem xs={12} sm={4} md={6}>
              <img
                className={classes.image}
                src={"/assets/img/story/Disconaut.png"}
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
                src={"/assets/img/story/Gathering.png"}
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
                  "A symbol of personal sovereignty and creative and technical expression, the Music Festival is the Disconauts key tool of rebellion. Strictly banned on their planet, the Disconauts use concerts as a way to prove their independence and establish their identities. Their mission, to throw the greatest festivals in the universe and establish utopian colonies in accordance with their ideals."
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
                  "And now, theyre landing on Earth, ready to bring incredible music and futuristic technology to experience virtual concerts in the Metaverse and DAC concerts taking place on different planets. Stay tuned to the Disconauts explore distant galaxies, find new planets and throw incredible festivals. Join the space fleet on mint to join the club."
                }
              </h4>
            </GridItem>
            <GridItem xs={12} sm={4} md={6} className={classes.right}>
              <img
                className={classes.image}
                src={"/assets/img/story/Party.png"}
              />
            </GridItem>
          </GridItem>
        </GridContainer>
      </Fade>
    </div>
  );
}
