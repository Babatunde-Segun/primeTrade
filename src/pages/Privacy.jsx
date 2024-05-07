import React from "react";
import classes from "./Terms.module.css";
import TickerTapeComponent from "../components/TradingView/TickerTapeComponent";
import NavbarComponent from "../components/home-components/Navbar";
import Footer from "../components/home-components/Footer";
function Privacy() {
  return (
    <div>
      <TickerTapeComponent />
      <NavbarComponent />
      <div className={classes.privacyContainer}>
        <div>
          <h1 className={classes.privacyH1}>Privacy-policy</h1>

          <p className={classes.privacyP}>
            Welcome to Nexux wealth, an online platform for crypto trading and
            investment. Here at Nexux wealth, we prioritize safeguarding your
            privacy and ensuring the security of your personal information. This
            Privacy Policy delineates our procedures concerning the gathering,
            utilization, and divulgence of your data.
          </p>

          <div className={classes.privacyDiv}>
            <h4 className={classes.privacyH4}>1. Information We Collect</h4>
            <h3 className={classes.privacyH3}>1.1 Personal Information:</h3>
            <p className={classes.privacyP}>
              Personal information, including but not limited to your name,
              email address, contact details, and other pertinent data essential
              for account registration and verification, may be collected by us.
            </p>
            <h3 className={classes.privacyH3}>1.2 Transaction Information:</h3>
            <p className={classes.privacyP}>
              We gather data pertaining to your activities on the Platform,
              encompassing trade history, deposits, and withdrawals, among other
              transactional details.
            </p>
            <h3 className={classes.privacyH3}>
              1.3 Device and Log Information:
            </h3>

            <p className={classes.privacyP}>
              Automated collection of information concerning your device and
              interactions with our Platform occurs, encompassing details such
              as IP address, browser type, and usage patterns.
            </p>
          </div>

          <div>
            <h4 className={classes.privacyH4}>
              2. How We Use Your Information
            </h4>
            <h3 className={classes.privacyH3}>2.1 Account Management:</h3>
            <p className={classes.privacyP}>
              Your personal information is utilized for the management of your
              account, authentication of your identity, and provision of
              customer support services.
            </p>

            <h3 className={classes.privacyH3}>2.2 Transactions:</h3>
            <p className={classes.privacyP}>
              The transactional data you provide is utilized to process and
              facilitate crypto trades and investment activities on the
              Platform.
            </p>

            <h3 className={classes.privacyH3}>
              2.3 Security and Fraud Prevention:
            </h3>
            <p className={classes.privacyP}>
              We implement measures to safeguard the security of your
              information and to deter fraudulent activities on the Platform.
            </p>

            <h3 className={classes.privacyH3}>2.4 Communication:</h3>
            <p className={classes.privacyP}>
              Your contact information may be utilized to transmit essential
              updates, announcements, and marketing communications. You retain
              the option to opt out of receiving marketing communications at any
              juncture.
            </p>
          </div>

          <div>
            <h4 className={classes.privacyH4}>3. Information Sharing</h4>
            <p className={classes.privacyP}>
              We do not engage in the sale, rental, or trading of your personal
              information to third parties. Nonetheless, we may disclose your
              information to service providers, regulatory authorities, or law
              enforcement agencies as mandated by law or to safeguard our
              interests.
            </p>
          </div>

          <div>
            <h4 className={classes.privacyH4}>
              4. Cookies and Tracking Technologies
            </h4>
            <p className={classes.privacyP}>
              We utilize cookies and analogous technologies to enrich your
              experience on the Platform, analyze trends, and enhance our
              services. You have the option to manage your cookie preferences
              via your browser settings.
            </p>
          </div>

          <div>
            <h4 className={classes.privacyH4}>5. Your Choices</h4>
            <p className={classes.privacyP}>
              You possess the right to access, modify, or erase your personal
              information. Additionally, you can opt out of specific data
              processing activities. For assistance, please reach out to us at
              [contact@nexus-wealth.com].
            </p>
          </div>

          <div>
            <h4 className={classes.privacyH4}>6. Security</h4>
            <p className={classes.privacyP}>
              While we enforce industry-standard security protocols to safeguard
              your information, it's important to note that no method of
              transmission over the internet can be entirely secure. Thus, we
              cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h4 className={classes.privacyH4}>
              7. Changes to the Privacy Policy
            </h4>
            <p className={classes.privacyP}>
              We reserve the right to update this Privacy Policy periodically.
              Any revisions will become effective upon their posting on the
              Platform. We recommend that you review this Privacy Policy
              regularly for any updates.
            </p>
          </div>

          <div>
            <h4 className={classes.privacyH4}>8. Contact Us</h4>
            <p className={classes.privacyP}>
              If you have any questions or concerns regarding our Privacy
              Policy, feel free to reach out to us at
              [contact@nexus-wealth.com].
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
