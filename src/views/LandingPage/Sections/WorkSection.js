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

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Roadmap</h2>

          {/* <h2 className={classes.title}>Project Overview</h2> */}
          <h4 className={classes.description}>
            3D Generative 10K NFT on Solana. Space/Music theme. Disco Astronaut
            is a community but also an artist that people can engage with
            through songs, videos, social media, virtual concerts, merch, on top
            of holding the NFT. NFT gives the audience an ownership share in the
            artist as the brand expands. Minting a Disco Astronaut acts as your
            ticket to the greatest festival in the universe. Blastoff to the
            moon with us on Launch. Access to the fleet means more than just
            bragging rights. We have made it our goal to make sure utility is
            always offered to all our students.Every owner of the NFT gets to go
            to the virtual shows. Own a piece of an artist from the beginning as
            they progress.
          </h4>
          <h2 className={classes.title}>Focus On Art Quality</h2>
          <h4 className={classes.description}>
            Incredible Art is Just the Beginning NFTs are immutable and forever.
            We only have one chance to do it right, so we obsess over quality
            and review all details to ensure the perfect mint of all 9,999 Disco
            Astronaut.
          </h4>
          <h2 className={classes.title}>
            Unique Design: 10,000 - Disco Astronauts
          </h2>
          <h4 className={classes.description}>
            10,000 generated high quality Disco Astronaut NFT existing eternally
            throughout the galaxy. Not only is each Disco Astronaut unique, but
            they also grant their holders with sustainable utilities and
            rewards. There are 137 total traits in the starfleet and these have
            been categorized into a tier based system (seen on the right).
            Traits are ranked from common all the way through to Andromeda and
            each rank has a corresponding % chance of being minted. All of the
            Academys traits and their rarity % can be viewed over in our traits
            section. 7 total different categories (Suit, Straps, Helmet, Props,
            and background).
          </h4>
          <h2 className={classes.title}>Rarity Scale</h2>
          <h4 className={classes.description}>
            Stratosphere, Moon, Mars, Milky Way, Andromeda
          </h4>
          <h2 className={classes.title}>Secondary Markets</h2>
          <h4 className={classes.description}>
            Yes, we will be listing on Solanart as soon as we go live so your
            Disco Astronaut’s can trade immediately. We apologise in advance if
            there are any issues around this as the NFT space on Solana is still
            very fresh, we will do all we can to make this a seamless experience
            though. We will look to move over to our own marketplace in the near
            future Yes, royalties are set at 10%. We are 100% confirmed and
            ready to be listed on ALL marketplaces on Solana, including but not
            limited to Solanart, Magic Eden, SolSea, FTX, Alpha Art, Digital
            Eyes, etc.
          </h4>
          <h2 className={classes.title}>Music Drops</h2>
          <h4 className={classes.description}>
            Disco Astronaut will be dropping music as we build our community. He
            is an artist and a DJ and will be dropping music videos on the reg.
          </h4>
          <h2 className={classes.title}>Live Shows</h2>
          <h4 className={classes.description}>
            When seeing a show you are seeing Disco astronaut. Promote it
            alongside super rare traits etc
          </h4>
          <h2 className={classes.title}>Fashion</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          <h2 className={classes.title}>Successful Blast Off - Drop One</h2>
          <h4 className={classes.description}>
            Time has come : the 10,000 Disco Astronauts are lift off earth. Get
            ready for the mint and start conquering the Universe A rarity system
            is important to any collection. Collaboration with rarity tools to
            easily learn and check the rarity of any Disco Astronauts. We are
            working hard to ensure a smooth mint. There are no whitelists or
            pre-sales, giving everyone the same chances. Take notice: our
            website is the only place to mint!
          </h4>
          <h2 className={classes.title}>Metaverse Ready / Virtual Concerts </h2>
          <h4 className={classes.description}>
            Disco Astronaut are made in ultra-realistic 3D that is ready for
            animation and virtual concerts. Our project has already attracted
            attention, and big partnerships are on the way. We are already
            discussing partnerships with existing Metaverse projects and
            attracting top talent to build upon our solid art foundation. Well
            expand our team and work on bringing this feature to market while we
            work on other things in parallel.
          </h4>
          <h2 className={classes.title}>Expansion Through the Universe</h2>
          <h4 className={classes.description}>
            The Disco Astronautfund is available to finance the community and
            projects expansion, creations, designs and development. Royalties
            are dedicated to this special fund, thus ensuring the Disco
            Astronautnian longevity through: collaborations, raffles, nft
            airdrops and exclusive business clubs.
          </h4>
          <h2 className={classes.title}>
            Drop 2 - Exploring Distant Galaxies: Disco Astronaut Aliens
          </h2>
          <h4 className={classes.description}>
            New species found on other planets, Disco Astronauts are exploring
            the Disco Astronautverse giving finding new species with ultra-rare
            attributes. Early access to the mint is given to holders. Supply
            will be limited.
          </h4>
          <h2 className={classes.title}>The Agora</h2>
          <h4 className={classes.description}>
            Develope more projects and artists with the money we raise. Thids
            project is being used to raise money to flesh out the concept and
            eventually end in a virtual festival space for artists and NFT
            holders. Culminating In By buying on mint you are helping to support
            the growth of the concept and the project without us having raise
            outside capital and loose creative control
          </h4>
          <h2 className={classes.title}>
            Hop on the DAC Rocket - Literally to the Moon!
          </h2>
        </GridItem>
      </GridContainer>
    </div>
  );
}
