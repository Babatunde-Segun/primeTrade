import React from "react";
import Hero from "../components/home-components/Hero";
import Featured from "../components/home-components/Featured";
import How from "../components/home-components/How";
import Service from "../components/home-components/Service";
import HowToInvest from "../components/home-components/HowToInvest";
import FasterPayment from "../components/home-components/FasterPayment";
import Testimonals from "../components/home-components/Testimonals";
import Cta from "../components/home-components/Cta";
import TickerTapeComponent from "../components/TradingView/TickerTapeComponent";
import NavbarComponent from "../components/home-components/Navbar";
import Footer from "../components/home-components/Footer";

function Home() {
  return (
    <div>
      <TickerTapeComponent />
      <NavbarComponent />
      <Hero />
      <Featured />
      <How />
      <Service />
      <HowToInvest />
      <FasterPayment />
      <Testimonals />
      <Cta />
      <Footer />
    </div>
  );
}

export default Home;
