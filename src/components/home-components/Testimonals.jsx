import React from "react";
import classes from "./Testimonals.module.css";

import { fadeIn } from "../framer-motion/animation.js";
import { motion } from "framer-motion";

function Testimonals() {
  return (
    <div>
      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          margin: "-10px",
        }}
        className={classes.testh2}
      >
        {" "}
        Testimonals{" "}
      </motion.h2>
      {/* slider component */}
      <div className={classes.testimonialMainContainer}>
        <div className={classes.testimonial}>
          <div className={classes.imageContainer}>
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="Testimonial"
              className={classes.image}
            />
          </div>
          <div className={classes.review}>
            <p className={classes.text}>
              "I couldn't have asked for anything better than this. I'll
              recommend it to everyone I know. I'm increasingly fond of Coinwave
              with each passing day because it significantly simplifies my life.
              It truly streamlines my tasks and spares me valuable time and
              energy. Coinwave is precisely what our business has needed all
              along."
            </p>
            <p className={classes.author}>
              <strong>Sarah</strong> - Investor
            </p>
          </div>
        </div>

        <div className={classes.testimonial}>
          <div className={classes.imageContainer}>
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              alt="Testimonial"
              className={classes.image}
            />
          </div>
          <div className={classes.review}>
            <p className={classes.text}>
              "I'm extremely satisfied with what I've experienced. I'll
              definitely be spreading the word to everyone I know. Each day, my
              appreciation for Coinwave grows as it continues to enhance my
              daily routine. It's a real time-saver and simplifies tasks
              effortlessly. Coinwave fills a crucial void in our business
              operations."
            </p>
            <p className={classes.author}>
              <strong>Sandra</strong> - CEO, Sandra's Collection
            </p>
          </div>
        </div>

        <div className={classes.testimonial}>
          <div className={classes.imageContainer}>
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              alt="Testimonial"
              className={classes.image}
            />
          </div>
          <div className={classes.review}>
            <p className={classes.text}>
              "I couldn't be happier with the results. I'll be recommending
              Coinwave to all my contacts. Day by day, I find myself liking
              Coinwave more and more because it streamlines my tasks
              effectively.
            </p>
            <p className={classes.author}>
              <strong>John</strong> - Student
            </p>
          </div>
        </div>
      </div>

      {/* testimonal details */}

      <div className={classes.testimonalDetails}>
        <motion.h3
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-40px",
          }}
        >
          We Provide The Best Service For You
        </motion.h3>
        <motion.p
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-40px",
          }}
        >
          At Coinwave, we are dedicated to providing you with the easiest and
          most efficient way to invest in cryptocurrency. With our cutting-edge
          automatic profit addition system, we ensure that your financial future
          becomes completely effortless, allowing you to focus on the things
          that truly matter to you. Whether you’re an experienced investor or
          just starting out in the world of cryptocurrency, We are here to guide
          you towards a profitable and stress-free investment journey.
        </motion.p>
      </div>
    </div>
  );
}

export default Testimonals;
