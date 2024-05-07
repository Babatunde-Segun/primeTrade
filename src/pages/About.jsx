import React from "react";
import classes from "./InvestmentPlan.module.css";
import aboutFineBoy from "../assets/image/aboutFineBoy.webp";
import aboutOrangeGirl from "../assets/image/aboutOrangeGirl.webp";
import aboutWhiteGirl from "../assets/image/aboutWhiteGirl.webp";
import aboutimgfullGrid from "../assets/image/aboutImgfullGrid.jpg";
// import aboutimgfullGrid from "../assets/image/aboutImgfullGrid.jpg";
import branded from "../assets/image/branded.avif";
import more from "../assets/image/more.jpg";
import logo from "../assets/image/tempLogo.webp";
import rightTop from "../assets/image/rightTop.webp";
import { FcWorkflow } from "react-icons/fc";
import { FcDebian } from "react-icons/fc";
import CountUp from "react-countup";
import { TbAnalyze } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5";
import { MdBorderColor } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { AiOutlinePieChart } from "react-icons/ai";

import { fadeIn } from "../components/framer-motion/animation";
import { motion } from "framer-motion";

import style from "./About.module.css";
import TickerTapeComponent from "../components/TradingView/TickerTapeComponent";
import NavbarComponent from "../components/home-components/Navbar";
import Footer from "../components/home-components/Footer";
{/* <NavbarComponent />
<TickerTapeComponent />
      <Footer /> */}


import { MarketOverview } from "react-ts-tradingview-widgets";

function About() {
  return (
    <div>
      <TickerTapeComponent />
      <NavbarComponent />
      <motion.h1
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={classes.ipH1}
      >
        {" "}
        The only <br />
        <span className={classes.span}>Investment platform</span> you’ll ever
        need.
      </motion.h1>

      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={style.aboutGrid}
      >
        <div className={style.topGrid}>
          <img
            className={style.imgTopGrid1}
            src={aboutFineBoy}
            alt="about-page-up-img"
          />
          <img
            className={style.imgTopGrid4}
            src={rightTop}
            alt="about-page-up-img"
          />
          <FcWorkflow className={style.iconGrid1} />
          <FcDebian className={style.iconGrid2} />
          <img
            className={style.imgTopGrid2}
            src={aboutWhiteGirl}
            alt="about-page-up-img"
          />
          <img
            className={style.imgTopGrid3}
            src={aboutOrangeGirl}
            alt="about-page-up-img"
          />
        </div>

        <div className={style.leftGrid}>
          <img
            src={aboutimgfullGrid}
            alt="about-image"
            className={style.leftImg}
          />
        </div>

        {/* <div className={style.bottomGrid}>
          <img src={logo} alt="logo" className={style.bottomImg} />
        </div> */}
      </motion.div>

      <motion.h4
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "40px" }}
        className={style.justH4}
      >
        Our organization is dedicated to securing your financial future by
        leveraging our expertise in cryptocurrency and forex investments.
      </motion.h4>

      {/*countup */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "40px" }}
        className="mt-[3rem] text-[1.5rem] sm:text-3xl flex gap-4  flex-wrap  justify-center"
      >
        <div className="font-semibold lg:text-3xl flex flex-col items-center">
          <div>
            <CountUp start={0} end={5} delay={1} duration={5} />M
          </div>
          <p className="text-[1.3rem] sm:text-xl lg:text-2xl font-medium">
            Daily Trade Volume
          </p>
        </div>

        <div className=" font-semibold lg:text-3xl  flex flex-col items-center">
          <div>
            <CountUp start={0} end={95} delay={1} duration={6} />%
          </div>
          <p className="text-[1.3rem] sm:text-2xl">Customer Retention</p>
        </div>

        <div className=" font-semibold lg:text-3xl  flex flex-col items-center">
          <div>
            <CountUp start={0} end={350} delay={2} duration={4} />%
          </div>
          <p className="text-[1.3rem] sm:text-2xl">Profit Expansion</p>
        </div>
        <div className="font-semibold lg:text-3xl  flex flex-col items-center">
          <div>
            <CountUp start={0} end={91} delay={3} duration={5} />%
          </div>
          <p className="text-[1.3rem] ">Positive Reviews</p>
        </div>
      </motion.div>

      <div className={style.aboutMission}>
        <motion.h3
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={style.missionH3}
        >
          Our mission
        </motion.h3>

        <motion.p
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Coinwave, an esteemed cryptocurrency investment firm associated with
          Coinbase, specializes in harnessing Artificial Intelligence (AI) for
          investor trading activities. By prioritizing the implementation of
          AI-driven trading strategies, Coinwave facilitates effortless
          investment in the dynamic realm of cryptocurrencies. Investors stand
          to gain from cutting-edge technology, expert insights, and customized
          trading solutions aligned with their financial objectives. As an added
          incentive, Coinwave extends a $200 signup bonus to new investors,
          further enhancing the allure of their investment platform.
        </motion.p>
      </div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={style.aboutCta}
      >
        <div className={style.aboutFlexContainer}>
          <div className={style.aboutFlexSubContainer}>
            <h3 className={style.aboutH3}>Technical Analysis Tools</h3>
            <TbAnalyze className={style.aboutIcon} />
          </div>

          <div>
            <p>
              We offer an extensive array of technical analysis tools and
              indicators. Traders have the flexibility to employ these tools in
              identifying trends, patterns, support and resistance levels, and
              other pertinent market insights.
            </p>
          </div>

          <div className={style.aboutLearn}>
            <a href="#">
              <h4 className={style.aboutLearnH4}>
                Learn more
                <IoArrowForward />
              </h4>
            </a>
          </div>
        </div>

        <div className={style.aboutFlexContainer}>
          <div className={style.aboutFlexSubContainer}>
            <h3 className={style.aboutH3}>Order Types</h3>
            <MdBorderColor className={style.aboutIcon} />
          </div>

          <div>
            <p>
              Coinwave provides a diverse range of order types designed to
              assist traders in executing their trades with precision. Our order
              types empower traders to set entry and exit points, manage risk,
              and automate specific aspects of their trading strategies.
            </p>
          </div>

          <div className={style.aboutLearn}>
            <a href="#">
              <h4 className={style.aboutLearnH4}>
                Learn more
                <IoArrowForward />
              </h4>
            </a>
          </div>
        </div>

        <div className={style.aboutFlexContainer}>
          <div className={style.aboutFlexSubContainer}>
            <h3 className={style.aboutH3}>Revenue Multiplier</h3>
            <CiWallet className={style.aboutIcon} />
          </div>

          <div>
            <p>
              Coinwave offers real-time quotes and interactive charts,
              showcasing both current prices and historical price movements of
              currency pairs. These functionalities enable traders to monitor
              market trends, analyze patterns, and make more informed trading
              decisions.
            </p>
          </div>

          <div className={style.aboutLearn}>
            <a href="#">
              <h4 className={style.aboutLearnH4}>
                Learn more
                <IoArrowForward />
              </h4>
            </a>
          </div>
        </div>

        <div className={style.aboutFlexContainer}>
          <div className={style.aboutFlexSubContainer}>
            <h3 className={style.aboutH3}>Advanced Reporting</h3>
            <AiOutlinePieChart className={style.aboutIcon} />
          </div>

          <div>
            <p>
              We diligently examine global Forex and cryptocurrency markets to
              assemble a wide array of investment opportunities. Our team of
              seasoned professionals conducts meticulous research, utilizing
              established strategies to capitalize on market trends and enhance
              profitability for our clients.
            </p>
          </div>

          <div className={style.aboutLearn}>
            <a href="#">
              <h4 className={style.aboutLearnH4}>
                Learn more
                <IoArrowForward />
              </h4>
            </a>
          </div>
        </div>
      </motion.div>

      <div className={style.brandSection}>
        <motion.h3
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={style.brandH3}
        >
          Utilized by prominent brands worldwide.
        </motion.h3>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={style.aboutBrandContainer}
        >
          <div className={style.aboutBrand}>
            <MarketOverview
              colorTheme="light"
              height={700}
              width="100%"
              showFloatingTooltip
            ></MarketOverview>
          </div>

          <div className={style.aboutBranded}>
            <img src={branded} alt="branded" />
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={style.aboutAbout}
      >
        <h3 className={style.aboutTalk}>
          "Recognizing the untapped potential of AI trading, we introduced a
          product aimed at revolutionizing how brands expand personalized
          experiences in the future."
        </h3>

        <h5 className={style.aboutOwner}>Tega Vincent</h5>
        <h6 className={style.aboutCompany}>CEO of coinwave</h6>
      </motion.div>

      <div className={style.aboutMoreContainer}>
        <div className={style.aboutMoreDetail}>
          <motion.h3
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={style.aboutH3}
          >
            Are you interested in enhancing our products and services?
          </motion.h3>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Coinwave offers innovative investment opportunities in
            cryptocurrency and forex for individuals looking to diversify their
            investment portfolio. Through our secure and dependable trading
            platforms, investors can effortlessly access various markets and
            currencies, including Bitcoin, Ethereum, and traditional forex
            pairs.
            <br />
            <br />
            Our seasoned traders utilize advanced techniques and strategies to
            maximize profitability for our clients while minimizing risk and
            safeguarding their investments. We provide flexible investment plans
            customized to meet the needs and goals of each investor, featuring
            low minimum investment requirements and competitive fees. With our
            user-friendly interface and extensive educational resources,
            investors of all experience levels can easily engage in
            cryptocurrency and forex trading. Join us today and begin growing
            your wealth with assurance!
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "30px" }}
            className={style.aboutBtnContainer}
          >
            <button className="btn text-[white] bg-[orange]">
              View Available Tools
            </button>
          </motion.div>
        </div>

        <div className={style.aboutMoreImgContainer}>
          <img className={style.aboutMoreImg} src={more} alt="more image" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
