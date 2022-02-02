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
    name: "James",
    job: "Creative Director and Virtual Producer",
    img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/2_T0dR38pVf?ik-sdk-version=javascript-1.4.3&updatedAt=1643769195521",
  },
  {
    name: "Andy",
    job: "Partnerships, Promotion and Strategy",
    img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/3_xvb2rDJVx?ik-sdk-version=javascript-1.4.3&updatedAt=1643769156579",
  },
  {
    name: "Ilan",
    job: "Smart Contracts",
    img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/4_2QbWZ8_lE?ik-sdk-version=javascript-1.4.3&updatedAt=1643773553282",
  },
  {
    name: "Stephen",
    job: "Web Dev and Smart Contracts",
    img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/5_ufGRMXH-h?ik-sdk-version=javascript-1.4.3&updatedAt=1643773516872",
  },
  {
    name: "Dave",
    job: "Content Strategist and Promotion",
    img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/6_iaiuTA35f?ik-sdk-version=javascript-1.4.3&updatedAt=1643773577781",
  },
  {
    name: "Ben",
    job: "Music Production and Distribution",
    img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/7_gsewDuGLM?ik-sdk-version=javascript-1.4.3&updatedAt=1643773486839",
  },
  {
    name: "Jamison",
    job: "Franchise Development",
    img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/11_Sy5D6Z-YW?ik-sdk-version=javascript-1.4.3&updatedAt=1643773690863",
  },
  {
    name: "Dre",
    job: "Content Strategist and Promotion",
    img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/9_1frbXBDJw?ik-sdk-version=javascript-1.4.3&updatedAt=1643773717216",
  },
  {
    name: "Alex",
    job: "Video Production",
    img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/12_3G5yM3e2q?ik-sdk-version=javascript-1.4.3&updatedAt=1643773632536",
  },
];

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>The Team</h2>
      <div>
        <GridContainer>
          {team.map(function (member) {
            return (
              <GridItem key={member.name} xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={member.img} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    {member.name}
                    <br />
                    <small className={classes.smallTitle}>{member.job}</small>
                  </h4>
                  <CardBody>
                    {/* <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p> */}
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
                  </CardFooter>
                </Card>
              </GridItem>
            );
          })}
        </GridContainer>
      </div>
    </div>
  );
}
