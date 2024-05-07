import { useEffect, useState } from "react";
import "./Dashboard.css";
import "./DashboardMedia.css";
import {
  CryptoCurrencyMarket,
  EconomicCalendar,
  StockMarket,
  SymbolOverview,
} from "react-ts-tradingview-widget";
import CheckVerifications from "./CheckVerifications";
import { FaCoins, FaWallet } from "react-icons/fa6";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { expireSession } from "../../Redux/State";

const Dashboard = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [totalDeposit, setTotalDeposit] = useState(0);
  const [totalWithdrawal, setTotalWithdrawal] = useState(0);
  const [lastestTransaction, setlastestTransaction] = useState({});
  const { id } = useSelector((state) => state.BTC.user);

  async function getTotalDeposit() {
    try {
      const response = await axios.get(
        `https://primetrade-shf2.onrender.com/getTotalDeposit/${id}`
      );
      console.log(response);
      setTotalDeposit(response?.data?.totalDeposit);
    } catch (err) {
      console.log(err);
      if (err?.message === " Network Error") {
        toast.error("Bad Internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else {
        toast.error(err?.response?.data?.message);
      }
    }
  }

  async function getTotalWithdrawal() {
    try {
      const response = await axios.get(
        `https://primetrade-shf2.onrender.com/getTotalWithdraw/${id}`
      );
      console.log(response);
      setTotalWithdrawal(response?.data?.totalWithdraw);
    } catch (err) {
      console.log(err);
      if (err?.message === " Network Error") {
        toast.error("Bad Internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else {
        toast.error(err?.response?.data?.message);
      }
    }
  }

  async function getLatestTransaction() {
    try {
      const response = await axios.get(
        `https://primetrade-shf2.onrender.com/getLatestTransaction/${id}`
      );
      console.log(response);
      setlastestTransaction(response?.data?.data);
    } catch (err) {
      console.log(err);
      if (err?.message === " Network Error") {
        toast.error("Bad Internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else {
        toast.error(err?.response?.data?.message);
      }
    }
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.livecoinwatch.com/static/lcw-widget.js";
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Run only once on component mount

  useEffect(() => {
    getTotalDeposit();
    getTotalWithdrawal();
    getLatestTransaction();
  }, []);

  return (
    <div className="dashboard-content-container">
      <div className="dashboard-content-body">
        <CheckVerifications />
        <>
          <div className="dashboard-coin-card-container">
            <div className="dashboard-coin-card-body">
              <div className="dashboard-coin-card-holder">
                <div className="dashboard-coin-card-holder-up">
                  <div className="dashboard-coin-card-up-left">
                    <div
                      className="livecoinwatch-widget-1"
                      lcw-coin="BTC"
                      lcw-base="USD"
                      lcw-secondary="BTC"
                      lcw-period="d"
                      lcw-color-tx="#ffffff"
                      lcw-color-pr="#58c7c5"
                      lcw-color-bg="#1f2434"
                      lcw-border-w="0"
                    ></div>
                  </div>
                  <div className="dashboard-coin-card-up-right">
                    <script
                      defer
                      src="https://www.livecoinwatch.com/static/lcw-widget.js"
                    ></script>
                    <div
                      className="livecoinwatch-widget-1"
                      lcw-coin="ETH"
                      lcw-base="USD"
                      lcw-secondary="BTC"
                      lcw-period="d"
                      lcw-color-tx="#ffffff"
                      lcw-color-pr="#58c7c5"
                      lcw-color-bg="#1f2434"
                      lcw-border-w="0"
                    ></div>
                  </div>
                </div>
                <div className="dashboard-coin-card-holder-down">
                  <div className="dashboard-coin-card-down-left">
                    <script
                      defer
                      src="https://www.livecoinwatch.com/static/lcw-widget.js"
                    ></script>
                    <div
                      className="livecoinwatch-widget-1"
                      lcw-coin="USDT"
                      lcw-base="USD"
                      lcw-secondary="BTC"
                      lcw-period="d"
                      lcw-color-tx="#ffffff"
                      lcw-color-pr="#58c7c5"
                      lcw-color-bg="#1f2434"
                      lcw-border-w="0"
                    ></div>
                  </div>
                  <div className="dashboard-coin-card-down-right">
                    <script
                      defer
                      src="https://www.livecoinwatch.com/static/lcw-widget.js"
                    ></script>
                    <div
                      className="livecoinwatch-widget-1"
                      lcw-coin="SOL"
                      lcw-base="USD"
                      lcw-secondary="BTC"
                      lcw-period="d"
                      lcw-color-tx="#ffffff"
                      lcw-color-pr="#58c7c5"
                      lcw-color-bg="#1f2434"
                      lcw-border-w="0"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-coin-balance-body">
              <SymbolOverview width="100%" colorTheme="dark" />
            </div>
          </div>
          <div className="dashboard-balance-and-profit-holder">
            <div className="dashboard-coin-balance-card-up">
              <div className="dashboard-total-deposit-wrapper">
                <div className="dashboard-total-deposit-wrapper-up-wrapper">
                  <span className="dashboard-total-deposit-wrapper-up-wrapper-icon-holder">
                    <FaWallet className="dashboard-total-deposit-wrapper-up-wrapper-icon" />
                  </span>
                  <div className="dashboard-total-deposit-wrapper-up-wrapper-title">
                    <h3 className="dashboard-total-deposit-wrapper-up-wrapper-title-h3">
                      Total Deposit Balance
                    </h3>
                    <h2 className="dashboard-total-deposit-wrapper-up-wrapper-title-amount">
                      {totalDeposit || "N/A"} USD
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-coin-balance-card-down">
              <div className="dashboard-total-deposit-wrapper">
                <div className="dashboard-total-deposit-wrapper-down-wrapper">
                  <span className="dashboard-total-deposit-wrapper-down-wrapper-icon-holder">
                    <FaCoins className="dashboard-total-deposit-wrapper-down-wrapper-icon" />
                  </span>
                  <div className="dashboard-total-deposit-wrapper-down-wrapper-title">
                    <h3 className="dashboard-total-deposit-wrapper-down-wrapper-title-h3">
                      Total Withdraw
                    </h3>
                    <h2 className="dashboard-total-deposit-wrapper-down-wrapper-title-amount">
                      {totalWithdrawal || "N/A"} USD
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profit-calculator-container">
            <h2>Profit Calculator</h2>
            <div className="profit-calculator-body">
              <div className="profit-calculator-left-card">
                <div className="profit-calculator-select-container">
                  <label htmlFor="plans" className="select-investment-label">
                    Select Investment
                  </label>
                  <div className="select-wrapper">
                    <select
                      name=""
                      id=""
                      className="select-investment-plan-select"
                      multiple
                    >
                      <option value="starter-plan">Basic Plan</option>
                      <option value="silver-plan">Pro Plan</option>
                      <option value="gold-plan">Premium Plan</option>
                      <option value="vip-plan">Retirement Plan</option>
                      {/* <option value="vip-platnium-plan">
                        VIP Platinum Plan
                      </option> */}
                    </select>
                  </div>
                  <br />
                  <br />
                  <button className="profit-calculator-btn">
                    Calculate Profit
                  </button>
                </div>
              </div>
              <div className="profit-calculator-right-card">
                <div className="profit-calculator-right-body">
                  <span className="profit-calculator-right-body-span">
                    Your profit will display here
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-recent-transaction-investment-container">
            <div className="dashboard-recent-transaction-card">
              <div className="dashboard-recent-transaction-body">
                <h5 className="dashboard-recent-transaction-card-title">
                  Recent Transactions
                </h5>
                <div className="recent-transaction-ul-wrapper">
                  {/* {lastestTransaction.length === 0 && ( */}
                  <span
                    style={{ fontSize: "30px" }}
                    className="recent-transaction-ul-span"
                  >
                    Transactions
                  </span>
                  {/* )} */}

                  <ul></ul>
                </div>
              </div>
            </div>
            <div className="dashboard-recent-investment">
              <div className="dashboard-recent-investment-body">
                <h5 className="dashboard-recent-investment-card-title">
                  Latest Transaction
                </h5>
                <div className="investment-amount-gateway-status-profit-ul-wrapper">
                  <ul style={{ background: "grey" }}>
                    <li
                      style={{
                        width: "25%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      ID
                    </li>
                    <li
                      style={{
                        width: "25%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      Amount
                    </li>
                    <li
                      style={{
                        width: "25%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      Date
                    </li>
                    <li
                      style={{
                        width: "25%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      Type
                    </li>
                  </ul>
                  <div className="investment-amount-gateway-status-profit-span">
                    <>
                      <ul>
                        <li
                          style={{
                            width: "25%",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10px",
                          }}
                        >
                          {lastestTransaction?.ID || "N/A"}
                        </li>
                        <li
                          style={{
                            width: "25%",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10px",
                          }}
                        >
                          {lastestTransaction?.amount || "N/A"}
                        </li>
                        <li
                          style={{
                            width: "25%",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10px",
                          }}
                        >
                          {lastestTransaction?.timestamp?.slice(0, 10) || "N/A"}
                        </li>
                        <li
                          style={{
                            width: "25%",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10px",
                          }}
                        >
                          {lastestTransaction?.type || "N/A"}
                        </li>
                      </ul>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-stock-market-widget-wrapper">
            <div className="dashboard-stock-market-widget-div">
              <StockMarket width="100%" colorTheme="dark" />
            </div>
            <div className="dashboard-stock-market-widget-div">
              <EconomicCalendar width="100%" colorTheme="dark" />
            </div>
            <div className="dashboard-stock-market-widget-div">
              <CryptoCurrencyMarket width="100%" colorTheme="dark" />
            </div>
          </div>
        </>
        {/*  }  */}
      </div>
    </div>
  );
};

export default Dashboard;
