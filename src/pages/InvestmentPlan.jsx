import React from "react";
import left from "../assets/image/leftLine.webp";
import leftBottom from "../assets/image/leftBottom.webp";
import rightBottom from "../assets/image/righBottmon.webp";
import righTop from "../assets/image/rightTop.webp";

import classes from "./InvestmentPlan.module.css";
import Cta from "../components/home-components/Cta";
import CtaAction from "../components/home-components/CtaAction";
import { fadeIn } from "../components/framer-motion/animation";
import { motion } from "framer-motion";

import TickerTapeComponent from "../components/TradingView/TickerTapeComponent";
import NavbarComponent from "../components/home-components/Navbar";
import Footer from "../components/home-components/Footer";

function InvestmentPlan() {
  return (
    <div>
      <TickerTapeComponent />

      <NavbarComponent />
      <div className={classes.ipMainContainer}>
        <div className={classes.ipSubcon}>
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={classes.ipH1}
          >
            <span className={classes.span}>Investment plans</span> that fit your
            budget
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "30px" }}
          >
            <CtaAction />
          </motion.div>
          {/* <img className={classes.img1} src={left} alt={left} />
        <img className={classes.img2} src={righTop} alt={righTop} />
        <img className={classes.img3} src={leftBottom} alt={leftBottom} />
        <img className={classes.img4} src={rightBottom} alt={rightBottom} /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InvestmentPlan;
