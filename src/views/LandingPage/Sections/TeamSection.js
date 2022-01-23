import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

// import team1 from "assets/img/NewSuits/7.png";
// import team2 from "assets/img/NewSuits/7.png";
// import team3 from "assets/img/NewSuits/7.png";

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
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={"assets/img/NewSuits/2.png"}
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                James
                <br />
                <small className={classes.smallTitle}>
                  {" "}
                  Creative Director and Virtual Producer
                </small>
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
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={"assets/img/NewSuits/3.png"}
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Andy
                <br />
                <small className={classes.smallTitle}>
                  Partnerships, Promotion and Strategy
                </small>
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
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={"assets/img/NewSuits/4.png"}
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ilan
                <br />
                <small className={classes.smallTitle}>
                  Backend Development
                </small>
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
        </GridContainer>
      </div>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={"assets/img/NewSuits/5.png"}
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Stephen
                <br />
                <small className={classes.smallTitle}>
                  {" "}
                  Front-End Development
                </small>
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
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={"assets/img/NewSuits/6.png"}
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Dave
                <br />
                <small className={classes.smallTitle}>
                  Content Strategist and Promotion
                </small>
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
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={"assets/img/NewSuits/7.png"}
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ben
                <br />
                <small className={classes.smallTitle}>
                  Music Production and Distribution
                </small>
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
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={"assets/img/NewSuits/11.png"}
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Liam
                <br />
                <small className={classes.smallTitle}>Story/Development</small>
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
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={"assets/img/NewSuits/9.png"}
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Dre
                <br />
                <small className={classes.smallTitle}>
                  Content Strategist and Promotion
                </small>
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
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={"assets/img/NewSuits/12.png"}
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Alex
                <br />
                <small className={classes.smallTitle}>Video Production</small>
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
        </GridContainer>
      </div>
    </div>
  );
}
