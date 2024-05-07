import React from "react";
import benefit from "../../assets/image/benefits.webp";
import classes from "./How.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../framer-motion/animation";

function How() {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10px" }}
      className={classes.howMainContainer}
    >
      <motion.h3
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        Benefits of Investing with Coinwave
      </motion.h3>
      <div className={classes.howContainer}>
        {/* text */}
        <div className={classes.howSubcontainer}>
          <ul>
            <li className={classes.howDetail}>
              Effortless Wealth Accumulation:{" "}
              <span>
                {" "}
                Our automatic profit addition system simplifies the investment
                process, allowing you to effortlessly build your wealth.
              </span>
            </li>

            <li className={classes.howDetail}>
              Holistic Client Focus:{" "}
              <span>
                {" "}
                Our automatic profit addition system simplifies the investment
                process, allowing you to effortlessly build your wealth.
              </span>
            </li>

            <li className={classes.howDetail}>
              Expert-Led Approach:
              <span>
                Our team of investment experts is committed to serving as your
                trusted guides, helping you make informed and strategic
                investment decisions.
              </span>
            </li>
          </ul>
        </div>

        {/* image */}
        <div className={classes.howImgContainer}>
          <img src={benefit} alt="benefit of investing with us" />
        </div>
      </div>
    </motion.div>
  );
}

export default How;
