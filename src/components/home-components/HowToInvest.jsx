import React from "react";
import classes from "./HowToInvest.module.css";
import { FaRegChartBar } from "react-icons/fa";
import { PiPottedPlantLight } from "react-icons/pi";
import { TiTickOutline } from "react-icons/ti";
import { GiTakeMyMoney } from "react-icons/gi";
import dot from "../../assets/image/3dots.webp";
import { MdOutlineAttachMoney } from "react-icons/md";

import { CiCreditCard1 } from "react-icons/ci";

import { fadeIn } from "../framer-motion/animation";
import { motion } from "framer-motion";

function HowToInvest() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className={classes.htiContainer}
    >
      <h4>how to invest in Coinwave</h4>

      <h2>Get the right investment to meet your needs</h2>

      <div className={classes.htiAction}>
        <div className={classes.htiIconContainer}>
          <div className={classes.htiIcon}>
            <PiPottedPlantLight />
          </div>
          <h3>Choose a Plan</h3>
        </div>

        <div className={classes.htiIconContainer}>
          <div className={classes.htiIcon}>
            <TiTickOutline />
          </div>
          <h3>Complete Application</h3>
        </div>

        <div className={classes.htiIconContainer}>
          <div className={classes.htiIcon}>
            <CiCreditCard1 />
          </div>
          <h3>Make Initial Deposit</h3>
        </div>

        <div className={classes.htiIconContainer}>
          <div className={classes.htiIconLast}>
            <div className={classes.htiIconProfit}>
              <MdOutlineAttachMoney color="white" />
            </div>
            <img src={dot} alt="3dots" className={classes.htiImg} />
          </div>
          <h3>Start Making Profit</h3>
        </div>
      </div>
    </motion.div>
  );
}

export default HowToInvest;
