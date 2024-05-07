import React from "react";
import classes from "./Service.module.css";
import ServiceTab from "./ServiceTabs";
import { motion } from "framer-motion";
import { fadeIn } from "../framer-motion/animation";

function Service() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "30px" }}
      className={classes.serviceMainContainer}
    >
      {/* service detail */}
      <div className={classes.serviceDetailContainer}>
        <h2>Service that lead the way to better business</h2>
      </div>

      {/* Tab div */}
      <div className={classes.serviceTabs}>
        <ServiceTab />
      </div>
    </motion.div>
  );
}

export default Service;
