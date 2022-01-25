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
    img: "2",
  },
  {
    name: "Andy",
    job: "Partnerships, Promotion and Strategy",
    img: "3",
  },
  {
    name: "Ilan",
    job: "Smart Contracts",
    img: "4",
  },
  {
    name: "Stephen",
    job: "Web Dev and Smart Contracts",
    img: "5",
  },
  {
    name: "Dave",
    job: "Content Strategist and Promotion",
    img: "6",
  },
  {
    name: "Ben",
    job: "Music Production and Distribution",
    img: "7",
  },
  {
    name: "Jamison",
    job: "Franchise Development",
    img: "11",
  },
  {
    name: "Dre",
    job: "Content Strategist and Promotion",
    img: "9",
  },
  {
    name: "Alex",
    job: "Video Production",
    img: "12",
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
                    <img
                      src={`assets/img/NewSuits/${member.img}.png`}
                      alt="..."
                      className={imageClasses}
                    />
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
