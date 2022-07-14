import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const team = [
  {
    name: "Music",
    // job: "Creative Director and Virtual Producer",
    img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/2_T0dR38pVf?ik-sdk-version=javascript-1.4.3&updatedAt=1643769195521",
  },
  {
    name: "Videos",
    // job: "Partnerships, Promotion and Strategy",
    img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/3_xvb2rDJVx?ik-sdk-version=javascript-1.4.3&updatedAt=1643769156579",
  },
  {
    name: "Virtual Events",
    // job: "Smart Contracts",
    img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/4_2QbWZ8_lE?ik-sdk-version=javascript-1.4.3&updatedAt=1643773553282",
  },
];

const useStyles = makeStyles(styles);

export default function TeamSection2() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Incoming</h2>
      <div>
        <GridContainer>
          {team.map(function (member) {
            return (
              <GridItem key={member.name} xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img
                      src={member.img}
                      alt="Team Member"
                      className={imageClasses}
                    />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    {member.name}
                    <br />
                    <small className={classes.smallTitle}>{member.job}</small>
                  </h4>
                  <CardBody></CardBody>
                  <CardFooter className={classes.justifyCenter}></CardFooter>
                </Card>
              </GridItem>
            );
          })}
        </GridContainer>
      </div>
    </div>
  );
}
