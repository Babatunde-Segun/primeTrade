import React from "react";
import { TiTick } from "react-icons/ti";
import classes from "./CtaAction.module.css";

function CtaAction() {
  return (
    <div className={classes.actionMainContainer}>
      <div className={classes.actionContainer}>
        <h2>Starter Plan</h2>

        <h5>Return: 0.7% Every Hour</h5>

        <h3>$1,000 </h3>

        <p>
          <TiTick className={classes.actionIcon} /> Duration: For 300 Hours
        </p>
        <p>
          <TiTick className={classes.actionIcon} />
          Total: 224% + Capital
        </p>
        <p>
          <TiTick className={classes.actionIcon} /> Min: $1,000
        </p>
        <p>
          <TiTick className={classes.actionIcon} /> Max: $9,999
        </p>

        <div className={classes.actionBtnContainer}>
          <button>Select Package</button>
        </div>
      </div>

      <div className={classes.actionContainer}>
        <h2>
          Silver Plan
          <span>Best value</span>
        </h2>

        <h5>1.5% Every Hour</h5>

        <h3>$10,000</h3>

        <p>
          <TiTick className={classes.actionIcon} /> Duration: For 300 Hours
        </p>
        <p>
          <TiTick className={classes.actionIcon} />
          Total: 480% + Capital
        </p>
        <p>
          <TiTick className={classes.actionIcon} /> Min: $10,000
        </p>
        <p>
          <TiTick className={classes.actionIcon} /> Max: $49,999
        </p>

        <div className={classes.actionBtnContainer}>
          <button>Select Package</button>
        </div>
      </div>

      <div className={classes.actionContainer}>
        <h2>Gold Plan</h2>

        <h5>2.1% Every Hour</h5>

        <h3>$50,000 </h3>

        <p>
          <TiTick className={classes.actionIcon} /> Duration: For 690 Hours
        </p>
        <p>
          <TiTick className={classes.actionIcon} />
          Total: 1512% + Capital
        </p>
        <p>
          <TiTick className={classes.actionIcon} /> Min: $50,000
        </p>
        <p>
          <TiTick className={classes.actionIcon} /> Max: $199,999
        </p>

        <div className={classes.actionBtnContainer}>
          <button>Select Package</button>
        </div>
      </div>

      <div className={classes.actionContainer}>
        <h2>VIP Plan</h2>

        <h5>Return: 3% Every Hour</h5>

        <h3>$200,000</h3>

        <p>
          <TiTick className={classes.actionIcon} /> Duration: For 720 Hours
        </p>
        <p>
          <TiTick className={classes.actionIcon} />
          Total: 1800% + Capital
        </p>
        <p>
          <TiTick className={classes.actionIcon} /> Min: $200,000
        </p>
        <p>
          <TiTick className={classes.actionIcon} /> Max: $499,999
        </p>

        <div className={classes.actionBtnContainer}>
          <button>Select Package</button>
        </div>
      </div>

      <div className={classes.actionContainer}>
        <h2>VIP Platinum Plan</h2>

        <h5>Return: 4% Every Hour</h5>

        <h3>$500,000</h3>

        <p>
          <TiTick className={classes.actionIcon} /> Duration: For 720 Hours
        </p>
        <p>
          <TiTick className={classes.actionIcon} />
          Total: 2160% + Capital
        </p>
        <p>
          <TiTick className={classes.actionIcon} /> Min: $500,000
        </p>
        <p>
          <TiTick className={classes.actionIcon} /> Max: $1,000,000
        </p>

        <div className={classes.actionBtnContainer}>
          <button>Select Package</button>
        </div>
      </div>
    </div>
  );
}

export default CtaAction;
