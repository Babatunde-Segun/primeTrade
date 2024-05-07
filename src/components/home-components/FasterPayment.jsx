import React from "react";
import classes from "./FasterPayment.module.css";

// import { TiTick } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
{
  /* <TiTick />; */
}
import payment1 from "../../assets/image/payment1.webp";

import balance from "../../assets/image/balance.webp";
import blackcard from "../../assets/image/blackcard.webp";
import { fadeIn } from "../framer-motion/animation";
import { motion } from "framer-motion";
function FasterPayment() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        margin: "-50px",
      }}
      className={classes.fpContainer}
    >
      {/* FAsterpayment details */}
      <div className={classes.fpDetailsContainer}>
        <h2>We Help Your Needs To Receive Payments Faster</h2>
        <p>
          Coinwave ensures effortless profit withdrawals for clients through a
          streamlined and user-friendly process. By providing a simple interface
          and prompt processing, clients can conveniently access their earnings
          with minimal hassle, contributing to a seamless and positive
          investment experience.
        </p>

        <div className={classes.fpIconContainer}>
          <p>
            <TiTick className={classes.fpIcon} />
            Bank Transfer
          </p>
          <p>
            <TiTick className={classes.fpIcon} />
            Visa
          </p>
          <p>
            <TiTick className={classes.fpIcon} />
            Crypto Payments
          </p>
          <p>
            <TiTick className={classes.fpIcon} />
            Debit Card
          </p>
          <p>
            <TiTick className={classes.fpIcon} />
            E-money
          </p>
          <p>
            <TiTick className={classes.fpIcon} />
            Mobile Money
          </p>
        </div>
      </div>

      {/* fasterpayment imgContainer */}
      <div className={classes.fpImgContainer}>
        <img src={payment1} alt="payment1" className={classes.p1} />
        <img src={blackcard} alt="blackcard" className={classes.blackcard} />
        <img src={balance} alt="balance" className={classes.balance} />
      </div>
    </motion.div>
  );
}

export default FasterPayment;
