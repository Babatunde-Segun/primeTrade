import React from "react";
import classes from "./ServicePage.module.css";
import { BsBagCheck } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { PiGraduationCapLight } from "react-icons/pi";
import { PiChartLineUpThin } from "react-icons/pi";
import { IoBarChartOutline } from "react-icons/io5";
import AccordionComponent from "../components/AccordionComponent";
import chart from "../assets/image/chart2.jpg";
import Cta from "../components/home-components/Cta";
import TickerTapeComponent from "../components/TradingView/TickerTapeComponent";
import NavbarComponent from "../components/home-components/Navbar";
import Footer from "../components/home-components/Footer";

import { fadeIn } from "../components/framer-motion/animation";
import { motion } from "framer-motion";

function Service() {
  return (
    <div>
<TickerTapeComponent />
<NavbarComponent />

    <div className={classes.spMainContainer}>
      <div className={classes.spSubContainer}>
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={classes.spH1}
          >
          {" "}
          <span className={classes.spSpan}>Our Services </span> <br />
          for your success Business
        </motion.h1>

        <div className={classes.spDetailContainer}>
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "50px" }}
            className={classes.spH2}
            >
            Get $200 Sign up bonus when you invest with us today
          </motion.h2>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "50px" }}
            className={classes.spGridContainer}
            >
            <div className={classes.spFlexContainer}>
              <div>
                <BsBagCheck className={classes.spIcon} />
              </div>

              <div>
                <h3 className={classes.spH3}>Investment Portfolio Oversight</h3>
                <p className={classes.spDetails}>
                  The company provides expert portfolio management services
                  aimed at assisting clients in optimizing their cryptocurrency
                  investment portfolios. These services encompass asset
                  allocation, risk management, and continuous portfolio
                  rebalancing to enhance returns while effectively managing
                  risk.
                </p>
              </div>
            </div>

            <div className={classes.spFlexContainer}>
              <div>
                <BsCurrencyDollar className={classes.spIcon} />
              </div>
              <div>
                <h3 className={classes.spH3}>Financial Evaluation</h3>
                <p className={classes.spDetails}>
                  MyProfits Academy offers comprehensive examination of diverse
                  cryptocurrency investment prospects, encompassing market
                  research, fundamental analysis, and technical analysis, aiming
                  to empower clients in making well-informed investment choices.
                </p>
              </div>
            </div>

            <div className={classes.spFlexContainer}>
              <div>
                <IoBarChartOutline className={classes.spIcon} />
              </div>
              {/* <IoBarChartOutline  /> */}

              <div>
                <h3 className={classes.spH3}>Automated Earnings</h3>
                <p className={classes.spDetails}>
                  Besides conventional investment offerings, MyProfits Academy
                  offers automated profit generation services for client
                  investments. This could include advanced algorithmic trading
                  strategies, automated trading bots, or other technological
                  solutions aimed at producing steady returns for clients.
                </p>
              </div>
            </div>

            <div className={classes.spFlexContainer}>
              <div>
                <PiGraduationCapLight className={classes.spIcon} />
              </div>

              <div>
                <h3 className={classes.spH3}>Learning and Instruction</h3>
                <p className={classes.spDetails}>
                  MyProfits Academy provides educational materials and training
                  initiatives to aid clients in understanding cryptocurrency
                  investment principles, trading tactics, and market
                  fluctuations. This enables clients to make better-informed
                  decisions and assume greater control over their investment
                  endeavors.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className={classes.serviceOffers}>
          {/* details */}
          <div className={classes.serviceAccordionContainer}>
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "50px" }}
              className={classes.serviceAccH3}
              >
              The investment strategies provided to clients by our firm
            </motion.h3>

            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={classes.serviceAccordionComponent}
            >
              <AccordionComponent />
            </motion.div>
          </div>

          {/* image container */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "50px" }}
            className={classes.serviceImgContainer}
            >
            <img className={classes.serviceAccH3} src={chart} alt={chart} />
          </motion.div>
        </div>

        <div className={classes.serviceBenefit}>
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "50px" }}
            className={classes.serviceBenefitH2}
          >
            Benefits that you can feel immediately
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "50px" }}
            >
            Choosing to invest with a cryptocurrency investment company such as
            Coinwave can provide clients with numerous advantages. Here are four
            primary benefits of investing with Coinwave:
          </motion.p>
        </div>

        <div className={classes.spDetailContainer}>
          <div className={classes.spGridContainer}>
            <div className={classes.spFlexContainer}>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "50px" }}
                >
                <h3 className={classes.spH3}>
                  Professional Advice and Analysis
                </h3>
                <p className={classes.spDetails}>
                  Coinwave grants clients access to professional guidance and
                  comprehensive analysis of cryptocurrency investment prospects.
                  Their team of experts furnishes insights into market trends,
                  conducts fundamental analysis of digital assets, and performs
                  technical analysis, enabling clients to make well-informed
                  investment decisions grounded in thorough research and
                  industry expertise.
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "50px" }}
              className={classes.spFlexContainer}
            >
              <div>
                <h3 className={classes.spH3}>
                  Diversification and Oversight of Portfolios
                </h3>
                <p className={classes.spDetails}>
                  Coinwave provides portfolio management services designed to
                  aid clients in diversifying and enhancing their cryptocurrency
                  investment portfolios. Through the utilization of asset
                  allocation strategies and risk management techniques, clients
                  can attain a well-rounded portfolio that reflects their
                  investment objectives while mitigating overall risk exposure.
                </p>
              </div>
            </motion.div>

            <div className={classes.spFlexContainer}>
              {/* <IoBarChartOutline  /> */}

              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "50px" }}
                >
                <h3 className={classes.spH3}>Learning and Instruction</h3>
                <p className={classes.spDetails}>
                  Coinwave offers educational resources and training programs
                  aimed at equipping clients with the knowledge and skills
                  necessary to navigate the cryptocurrency market proficiently.
                  Through the provision of educational materials, workshops, and
                  training sessions, clients can augment their comprehension of
                  cryptocurrency investment principles, trading strategies, and
                  market dynamics, thereby enabling them to make more informed
                  decisions.
                </p>
              </motion.div>
            </div>

            <div className={classes.spFlexContainer}>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "50px" }}
              >
                <h3 className={classes.spH3}>Automated Profit Generation</h3>
                <p className={classes.spDetails}>
                  Aside from conventional investment offerings, Coinwavey
                  provides automatic profit generation solutions for client
                  investments. Utilizing advanced technologies like algorithmic
                  trading and automated trading bots, Coinwave aims to produce
                  consistent returns for clients, potentially improving
                  investment outcomes through innovative and automated trading
                  strategies.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <Cta />
      </div>
    </div>
<Footer />
                </div>
  );
}

export default Service;
