import React from "react";
import classes from "./Tools.module.css";
import CountUp from "react-countup";
import automatedImg from "../assets/image/automatedToolImg.png";
import { TfiControlShuffle } from "react-icons/tfi";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdOutlineMultipleStop } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import unlock from "../assets/image/unlock.jpg";

import TickerTapeComponent from "../components/TradingView/TickerTapeComponent";
import NavbarComponent from "../components/home-components/Navbar";
import Footer from "../components/home-components/Footer";

import { fadeIn } from "../components/framer-motion/animation";
import { motion } from "framer-motion";

import { TiTick } from "react-icons/ti";

function Tools() {
  return (
    <div>
      <TickerTapeComponent />
      <NavbarComponent />
      <div className={classes.toolsH1Container}>
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className={classes.toolsH1span}>Tools</span>
          <br />
          <br />
          Make profitable trades with
          <br />
          <span className={classes.toolsH1span1}>automation from Coinwave</span>
        </motion.h1>
      </div>

      <div className={classes.toolsMainContainer}>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "50px" }}
          className={classes.toolsMainDetails}
        >
          <h3 className={classes.toolsH3}>
            What makes our automation platform stand out?
          </h3>

          <p>
            Our dependable and user-friendly platform provides all the essential
            tools for order management, execution, and market data analysis.
          </p>

          {/* Countup */}
          <div className="mt-[3rem] text-[1rem] sm:text-3xl flex-wrap flex gap-4   ">
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "50px" }}
              className=" font-semibold lg:text-3xl  flex flex-col items-center"
            >
              <div>
                <CountUp start={0} end={95} delay={2} duration={4} />%
              </div>
              <p className="text-[1.3rem] sm:text-2xl">Guaranteed Profits</p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "50px" }}
              className="font-semibold lg:text-3xl  flex flex-col items-center"
            >
              <div>
                <CountUp start={0} end={5} delay={3} duration={4} />X
              </div>
              <p className="text-[1.3rem] ">More Conversion</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "50px" }}
          className={classes.toolsImgContainer}
        >
          <img
            src={automatedImg}
            alt="automatedImg"
            className={classes.toolsImg}
          />
        </motion.div>
      </div>

      <div className={classes.toolsAnotherContainer}>
        <motion.h3
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "50px" }}
          className={classes.toolsWorkH3}
        >
          Benefit from using our tools
        </motion.h3>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "50px" }}
          className={classes.toolsWorkContainer}
        >
          <div className={classes.toolsWork}>
            <div className={classes.toolsWorkIcon}>
              <TfiControlShuffle />
            </div>

            <h4 className={classes.toolsWorkH4}>
              Customizable Platform Layout
            </h4>

            <p>
              An entirely customizable workspace featuring intuitive market data
              visualization and an extensive array of trading tools. But that's
              not all – set up your ideal trading environment today!
            </p>
          </div>

          <div className={classes.toolsWork}>
            <div className={classes.toolsWorkIcon}>
              <AiOutlineLineChart />
            </div>

            <h4 className={classes.toolsWorkH4}>Professional charts</h4>

            <p>
              Execute trades, handle orders, and operate directly from our
              integrated charts. Utilize our wide range of drawing tools and
              more than 50 technical indicators to analyze price trends.
            </p>
          </div>

          <div className={classes.toolsWork}>
            <div className={classes.toolsWorkIcon}>
              <MdOutlineMultipleStop />
            </div>

            <h4 className={classes.toolsWorkH4}>Multiple order types</h4>

            <p>
              Coinwave provides a variety of order types accessible through the
              Order Form option, equipping you with essential tools to execute
              your trading strategy and offering enhanced flexibility in trade
              entry methods.
            </p>
          </div>

          <div className={classes.toolsWork}>
            <div className={classes.toolsWorkIcon}>
              <IoShieldCheckmarkSharp />
            </div>

            <h4 className={classes.toolsWorkH4}>Secure wallets</h4>

            <p>
              Withdraw, deposit, and store your assets securely in your personal
              wallet. All assets are held securely in our offline storage system
              to shield users from any potential risks or threats.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "50px" }}
        className={classes.toolsLastContainer}
      >
        <div className={classes.toolsImgContainer}>
          <img
            src={unlock}
            alt="unlock your potential"
            className={classes.toolsImg}
          />
        </div>

        <div className={classes.toolsLastDetails}>
          <h3 className={classes.toolsLastH3}>Unlock technical potential</h3>

          <h4 className={classes.toolsH4}>
            <TiTick className={classes.toolsLastIcon} /> Coordinate adaptable,
            multi-channel experiences
          </h4>

          <h4 className={classes.toolsH4}>
            <TiTick className={classes.toolsLastIcon} /> Experience dependable
            performance and reliability on a large scale
          </h4>

          <h4 className={classes.toolsH4}>
            <TiTick className={classes.toolsLastIcon} />
            Maintain compliance with top-tier data security measures
          </h4>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Tools;
