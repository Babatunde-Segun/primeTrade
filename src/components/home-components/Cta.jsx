import React from "react";
import CtaAction from "./CtaAction";
import classes from "./Cta.module.css";
import { fadeIn } from "../framer-motion/animation";
import { motion } from "framer-motion";

function Cta() {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      className={classes.CtaContainer}
    >
      <h2 className={classes.ctah2}>Investment Plan</h2>
      <CtaAction />
    </motion.div>
  );
}

export default Cta;
