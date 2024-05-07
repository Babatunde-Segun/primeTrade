import React from "react";
import classes from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { RiChat1Line } from "react-icons/ri";
import { GrCompliance } from "react-icons/gr";
import rightBottom from "../assets/image/righBottmon.webp";

import { fadeIn } from "../components/framer-motion/animation";
import { motion } from "framer-motion";

import TickerTapeComponent from "../components/TradingView/TickerTapeComponent";
import NavbarComponent from "../components/home-components/Navbar";
import Footer from "../components/home-components/Footer";

function Contact() {
  return (
    <div>
<TickerTapeComponent />
<NavbarComponent />
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={classes.contactDetailsContainer}
      >
        <h1 className={classes.contactH1}>
          <span className={classes.contactSpan}>Get in Touch,</span>
          <br />
          We're here to assist you whenever you need.
        </h1>
        <div className={classes.contactIconContainer}>
          <div className={classes.second}>
            <MdOutlineEmail className={classes.contactIcon1} />
            <img
              src={rightBottom}
              alt="line drawing"
              className={classes.contactImg1}
            />
          </div>
        </div>

        <FaUsers className={classes.contactIcon2} />
      </motion.div>

      <div className={classes.contactSection2}>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={classes.contactSection2H2}
        >
          Reach out to our dedicated team via email.
        </motion.h2>
        <motion.div
          layout
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          // transition={{ staggerChildren: 0.3, delay: 3000 }}
          viewport={{ once: true }}
          className={classes.contactGeneralContainer}
        >
          <div className={classes.contactSubContainer}>
            <RiChat1Line className={classes.genIcon} />
            <h3 className={classes.genH3}>General</h3>
            <div className={classes.contactBtnContainer}>
              <a href="mailto:info@nexusWealth.com">
                <button className={classes.contactBtn}>Let's Talk</button>
              </a>
            </div>
          </div>

          <motion.div className={classes.contactSubContainer}>
            <FaUsers className={classes.genIcon} />
            <h3 className={classes.genH3}>Patnership</h3>
            <div className={classes.contactBtnContainer}>
              <a href="mailto:info@nexusWealth.com">
                <button className={classes.contactBtn}>Let's Talk</button>
              </a>
            </div>
          </motion.div>

          <motion.div className={classes.contactSubContainer}>
            <GrCompliance className={classes.genIcon} />
            <h3 className={classes.genH3}>Complain</h3>
            <div className={classes.contactBtnContainer}>
              <a href="mailto:info@nexusWealth.com">
                <button className={classes.contactBtn}>Let's Talk</button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
<Footer />
    </div>
  );
}

export default Contact;
