import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/roadmapStyle";

const useStyles = makeStyles(styles);

const roadmapItems = [
  {
    phase: 1,
    items: [
      {
        title: "The Most Sophisticated Media Operation in Web3",
        description:
          "NFT Mint. The First On-Chain, Virtually Native Media Franchise. A higher bar for art, music and visual media. The DAC leverages advanced virtual production techniques to create radically compelling entertainment and bring the Disconauts to life. Next-Gen Immersive Virtual Media and 3D Art.",
      },
      {
        title: "Original Music",
        description:
          "A Percentage of Music Royalties. Incredible Original and Generative MusicThe artist as an investible asset. DAC will have original music drops that the community takes an ownership stake in. Holders will get music royalties according to the number of DAC NFTs they posses. 10,000 unique generative pieces of music will be ascribed to the NFTs.",
      },
    ],
  },
  {
    phase: 2,
    items: [
      {
        title: "Live Shows and Events",
        description:
          "Unforgettable Live Events, VIP Access to DAC Concerts, Private Events and Destination Music Festivals. Owning a DAC NFT acts as a VIP access token to live concerts, club nights, private events, DAC club-houses, and curated destination music festivals.",
      },
      {
        title: "Luxury Fashion",
        description:
          "Access to Exclusive and Limited Edition Luxury Fashion Merchandise. Each Disconaut has a unique look that leans into various sub-genres of music culture. Own the physical merchandise of your on-chain NFT.",
      },
    ],
  },
  {
    phase: 3,
    items: [
      {
        title: "Metaverse Concert Platform",
        description:
          "The full festival experience, virtualized. First Access to Our Virtual Concert Platform Virtualized Music Festivals; custom light shows and visuals, live DJ Sets, and larger than life venues. Accessible through streaming services and VR. NFT Staking to Accumulate a Social and Governance Token, Giving the Holder Increasing Voting Rights in Project Activities and Access to Future Whitelists.",
      },
    ],
  },
];

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h1 className={classes.title}>Roadmap</h1>
          <h4 className={classes.description}>
            The Disco Astronaut Club is the first on-chain, virtual native media
            franchise producing top of the line music, next generation visual
            media and art, and unforgetable live events. We are working hard to
            establish the DAC with a strong community and brand!
          </h4>
          <div className={classes.roadmapContainer}>
            {roadmapItems.map((r) => (
              <div key={r.phase} className={classes.roadmapSectionContainer}>
                <div className={classes.roadmapDot}>
                  <div className={classes.roadmapDotInner} />
                </div>
                <div className={classes.roadmapSection}>
                  <h3 className={classes.roadmapPhase}>PHASE {r.phase}</h3>
                  {r.items.map((item) => (
                    <div key={item.title}>
                      <h4 className={classes.roadmapItemTitle}>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className={classes.roadmapDivider} />
              </div>
            ))}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
