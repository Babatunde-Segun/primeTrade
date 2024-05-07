import React from "react";
// import TradingViewWidget from "../components/TradingViewStories";
import classes from "./MarketNews.module.css";
import { Timeline } from "react-ts-tradingview-widgets";

import { fadeIn } from "../components/framer-motion/animation";
import { motion } from "framer-motion";

import TickerTapeComponent from "../components/TradingView/TickerTapeComponent";
import NavbarComponent from "../components/home-components/Navbar";
import Footer from "../components/home-components/Footer";

function MarketNews() {
  return (
    <div>
      <TickerTapeComponent />
      <NavbarComponent />
      <motion.h1
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={classes.marketH1}
      >
        Market News
      </motion.h1>

      {/* <TradingViewWidget /> */}

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "50px" }}
        className={classes.marketNews}
      >
        <h2 className={classes.marketNewH2}>Forex News</h2>
        <Timeline
          colorTheme="light"
          feedMode="market"
          market="forex"
          height={400}
          width="100%"
          displayMode="compact"
        ></Timeline>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "50px" }}
        className={classes.marketNews}
      >
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "50px" }}
          className={classes.marketNewH2}
        >
          Crypto News
        </motion.h2>
        <Timeline
          colorTheme="light"
          feedMode="market"
          market={["crypto"]}
          height={400}
          width="100%"
          displayMode="compact"
        ></Timeline>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className={classes.marketNews}
      >
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "50px" }}
          className={classes.marketNewH2}
        >
          Stock News
        </motion.h2>
        <Timeline
          colorTheme="light"
          feedMode="market"
          market="stock"
          height={400}
          width="100%"
          displayMode="compact"
        ></Timeline>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "50px" }}
        className={classes.marketNews}
      >
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "50px" }}
          className={classes.marketNewH2}
        >
          Index News
        </motion.h2>
        <Timeline
          colorTheme="light"
          feedMode="market"
          market="index"
          height={400}
          width="100%"
          displayMode="compact"
        ></Timeline>
      </motion.div>
      <Footer />
    </div>
  );
}

export default MarketNews;
