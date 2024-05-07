import React from "react";
import stat from "../../assets/image/stats.webp";
import shoutOfJoy from "../../assets/image/shoutOfJoy.webp";
import CountUp from "react-countup";

import { fadeIn } from "../framer-motion/animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="lg:hero min-h-screen bg-base-200 flex pb-[10rem] "
    >
      <div className="hero-content justify-start items-start flex-col lg:flex-row-reverse sm:flex-col md:flex-col-reverse ">
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="sm:mt-[40px] p-[1%] w-full flex flex-col gap-[40px]"
        >
          <img src={stat} className="max-w-[50rem] w-[250px] rounded-lg " />

          <div className="flex justify-end">
            <img src={shoutOfJoy} className="w-[30rem] rounded-lg " />
          </div>
        </motion.div>

        <div>
          <h1 className="text-4xl lg:text-6xl font-bold leading-[33px]  mt-[2rem] lg:mt-[0px] sm:w-[50%] lg:w-[90%] w-[100%] md:text-center md:pt-[3rem] md:w-[90%] lg:text-left sm:text-left">
            Get Automatic Profits on Your Investments
          </h1>
          <p className="py-6 lg:text-[1.5rem] mt-[20px]  sm:w-[80%] w-[100%] lg:text-left md:text-center md:w-[90%] lg:w-[80%]">
            Coinwave is an innovative cryptocurrency investment company that
            utilizes the power of A.I to imcrease the income of its investors.
            98% success rate guaranteed on generated profits.
          </p>

          <div className="lg:text-left md:text-center">
            <button className="btn btn-primary text-[1rem]  ">
              Register/Login
            </button>
          </div>

          {/* Countup */}
          <div className="mt-[3rem] text-[1.5rem] sm:text-3xl flex gap-4  flex-wrap">
            <div className="font-bold lg:text-3xl">
              <CountUp start={0} end={6} delay={3} duration={5} />+
              <p className="text-[1.3rem] sm:text-xl lg:text-2xl">
                Years of Excellence
              </p>
            </div>

            <div className=" font-bold lg:text-3xl">
              <CountUp start={0} end={53} delay={1} duration={6} />K
              <p className="text-[1.3rem] sm:text-2xl">Global Investors</p>
            </div>

            <div className=" font-bold lg:text-3xl">
              <CountUp start={0} end={100} delay={2} duration={4} />%
              <p className="text-[1.3rem] sm:text-2xl">Client satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
