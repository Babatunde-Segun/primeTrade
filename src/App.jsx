import React from "react";
import { NextUIProvider } from "@nextui-org/react";
// import Navbar from "./components/Navbar";
import NavbarComponent from "./components/home-components/Navbar";
import Footer from "./components/home-components/Footer";
import { HashRouter, Route, Routes } from "react-router-dom";
import { fadeIn } from "./components/framer-motion/animation";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import InvestmentPlan from "./pages/InvestmentPlan";
import MarketNews from "./pages/MarketNews";
import About from "./pages/About";
import Service from "./pages/ServicePage";
import Tools from "./pages/Tools";
import LoginAndSignUp from "./pages/LoginAndSignUp";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import TickerTapeComponent from "./components/TradingView/TickerTapeComponent";
// import Dashboard from "./pages/dashbord/Dashboard";
import UserMenu from "./dashboard/userMenu/UserMenu";

function App() {
  return (
    <>
      <NextUIProvider>
        <HashRouter>
          {/* <TickerTapeComponent /> */}
          {/* <NavbarComponent /> */}
          {/* <Footer /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/investment-plan" element={<InvestmentPlan />} />
            <Route path="/market-news" element={<MarketNews />} />
            <Route path="/service" element={<Service />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/login" element={<LoginAndSignUp />} />
            <Route path="/terms-of-use" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/userDashboard/*" element={<UserMenu />} />
          </Routes>
        </HashRouter>
      </NextUIProvider>
    </>
  );
}

export default App;
