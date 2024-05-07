import { useEffect, useState } from "react";
import "./UserMenu.css";
// import "./UserMenuRes.css";
import "./UserMenuMedia.css";
import { MdOutlineDashboard, MdDelete } from "react-icons/md";
import { CgMenuBoxed } from "react-icons/cg";
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { GrShieldSecurity, GrTransaction } from "react-icons/gr";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../userDashboard/Dashboard";
import Investments from "../Investments/Investments";
import Deposit from "../Deposits/Deposit";
import Withdraw from "../withdraw/Withdraw";
import ChangePassword from "../changePassword/ChangePassword";
import AssignMoney from "../AssignMoney/AssignMoney";
import AssignProfit from "../AssignProfit/AssignProfit";

// import TradingViewWidget from "../../TradingViewWidget";
import { RxHamburgerMenu } from "react-icons/rx";
// import { AiOutlineCloseCircle } from "react-icons/ai";

// import { logout, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import DeleteUser from "../DeleteUser/DeleteUser";
import primeTradeLogo from "../../assets/image/primeTradeLogo.png";
// import CITADEL from "/CITADEL.png";
import {
  expireSession,
  getWalletDetails,
  userResData,
  userStoreData,
} from "../../Redux/State";
import { AiOutlineSchedule } from "react-icons/ai";
import ScheduleInvestment from "../scheduleInvestments/ScheduleInvestment";
import Transaction from "../transaction/Transaction";
import Referral from "../referral/Referral";
import SupportTicket from "../supportTicket/SupportTicket";
import TwoFA from "../2FA/TwoFA";
import Profile from "../profile/Profile";
import Kyc from "../../KYC/Kyc";
import { FaAngleDown, FaTicketAlt, FaUsers } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import ProfileSettingPage from "../profile/ProfileSettingPage";
import PendingKyc from "../PendingKyc/PendingKyc";
import PendingTickets from "../PendingTickets/PendingTickets";

const UserMenu = () => {
  const AdminUser = useSelector((state) => state.BTC.userRes);
  const walletDetails = useSelector((state) => state.BTC.wallets);
  const [initDepositApi, setInitDepositApi] = useState(walletDetails?.deposit);
  const [initInterestApi, setnitInterestApi] = useState(
    walletDetails?.interest
  );
  const [initReferalApi, setInitReferalApi] = useState(walletDetails?.referal);
  const [dashboard, setDashboard] = useState(true);
  const [investment, setInvestment] = useState(false);
  const [scheduleInvestment, setScheduleInvestment] = useState(false);
  const [deposit, setDeposit] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const [referral, setReferral] = useState(false);
  const [supportTicket, setSupportTicket] = useState(false);
  const [twoFA, setTwoFA] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [assign, setAssign] = useState(false);
  const [assignProfit, setAssignProfit] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [pendingKyc, setPendingKyc] = useState(false);
  const [pendingTickets, setPendingTickets] = useState(false);
  const [loading, setLoading] = useState(false);
  const { token, id } = useSelector((state) => state.BTC.user);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(AdminUser);
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();

  async function getDepositWallet() {
    try {
      const response = await axios.get(
        `https://primetrade-shf2.onrender.com/getUserDepositWallet/${id}`
      );
      console.log(response);
      setInitDepositApi(response?.data?.depositWallet);
    } catch (err) {
      console.log(err);
      if (err.message === "Network Error") {
        toast.error("No internet Connection");
        setLoading(false);
      } else if (err?.response?.data?.message === "jwt expired") {
        navigate("/login");
        dispatch(expireSession(true));
      } else {
        setLoading(false);
        toast.error(err.response?.data?.message);
        setLoading(false);
      }
    }
  }
  async function getReferalWallet() {
    try {
      const response = await axios.get(
        `https://primetrade-shf2.onrender.com/getUserReferalWallet/${id}`
      );
      console.log(response);
      setInitReferalApi(response?.data?.referalWallet);
    } catch (err) {
      console.log(err);
      if (err.message === "Network Error") {
        toast.error("No internet Connection");
        setLoading(false);
      } else if (err?.response?.data?.message === "jwt expired") {
        navigate("/login");
        dispatch(expireSession(true));
      } else {
        setLoading(false);
        toast.error(err.response?.data?.message);
        setLoading(false);
      }
    }
  }
  async function getIntersetWallet() {
    try {
      const response = await axios.get(
        `https://primetrade-shf2.onrender.com/getUserIntrestWallet/${id}`
      );
      console.log(response);
      setnitInterestApi(response.data?.intrestWallet);
    } catch (err) {
      console.log(err);
      if (err.message === "Network Error") {
        toast.error("No internet Connection");
        setLoading(false);
      } else if (err?.response?.data?.message === "jwt expired") {
        navigate("/login");
        dispatch(expireSession(true));
      } else {
        setLoading(false);
        toast.error(err.response?.data?.message);
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    getDepositWallet();
    getIntersetWallet();
    getReferalWallet();
  }, []);

  useEffect(() => {
    dispatch(
      getWalletDetails({
        deposit: initDepositApi,
        interest: initInterestApi,
        referal: initReferalApi,
      })
    );
  }, [initDepositApi, initInterestApi, initReferalApi]);

  async function LogoutUser() {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://primetrade-shf2.onrender.com/logout/${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      navigate("/");
      dispatch(
        userStoreData({
          name: "",
          email: "",
          id: "",
          token: "",
          login: "",
          admin: "",
        })
      );
      dispatch(userResData([]));
      console.log(response);
    } catch (err) {
      console.log(err);
      setLoading(true);
      if (err.message === "Network Error") {
        toast.error("No internet Connection");
        setLoading(false);
      } else if (err.message === "timeout exceeded") {
        toast.error("timeout exceeded");
        setLoading(false);
      } else if (
        err?.response?.data?.message === "Failed to authenticate user."
      ) {
        navigate("/login");
        dispatch(expireSession(true));
      } else if (err?.response?.data?.message === "jwt expired") {
        navigate("/login");
        dispatch(expireSession(true));
      } else {
        setLoading(false);
        toast.error(err?.data?.message);
        setLoading(false);
      }
    }
  }
  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/userDashboard/dashboard":
        setDashboard(true);
        setInvestment(false);
        setScheduleInvestment(false);
        setDeposit(false);
        setWithdraw(false);
        setTransaction(false);
        setReferral(false);
        setSupportTicket(false);
        setTwoFA(false);
        setChangePassword(false);
        setAssign(false);
        setAssignProfit(false);
        setDeleteUser(false);
        setPendingKyc(false);
        setPendingTickets(false);
        break;
      case "/userDashboard/investment":
        setDashboard(false);
        setInvestment(true);
        setScheduleInvestment(false);
        setDeposit(false);
        setWithdraw(false);
        setTransaction(false);
        setReferral(false);
        setSupportTicket(false);
        setTwoFA(false);
        setChangePassword(false);
        setAssign(false);
        setAssignProfit(false);
        setDeleteUser(false);
        setPendingKyc(false);
        setPendingTickets(false);
        break;
      case "/userDashboard/scheduleInvestment":
        setDashboard(false);
        setInvestment(false);
        setScheduleInvestment(true);
        setDeposit(false);
        setWithdraw(false);
        setTransaction(false);
        setReferral(false);
        setSupportTicket(false);
        setTwoFA(false);
        setChangePassword(false);
        setAssign(false);
        setAssignProfit(false);
        setDeleteUser(false);
        setPendingKyc(false);
        setPendingTickets(false);
        break;
      case "/userDashboard/deposit":
        setDashboard(false);
        setInvestment(false);
        setScheduleInvestment(false);
        setDeposit(true);
        setWithdraw(false);
        setTransaction(false);
        setReferral(false);
        setSupportTicket(false);
        setTwoFA(false);
        setChangePassword(false);
        setAssign(false);
        setAssignProfit(false);
        setDeleteUser(false);
        setPendingKyc(false);
        setPendingTickets(false);
        break;
      case "/userDashboard/withdraw":
        setDashboard(false);
        setInvestment(false);
        setScheduleInvestment(false);
        setDeposit(false);
        setWithdraw(true);
        setTransaction(false);
        setReferral(false);
        setSupportTicket(false);
        setTwoFA(false);
        setChangePassword(false);
        setAssign(false);
        setAssignProfit(false);
        setDeleteUser(false);
        setPendingKyc(false);
        setPendingTickets(false);
        break;
      case "/userDashboard/transaction":
        setDashboard(false);
        setInvestment(false);
        setScheduleInvestment(false);
        setDeposit(false);
        setWithdraw(false);
        setTransaction(true);
        setReferral(false);
        setSupportTicket(false);
        setTwoFA(false);
        setChangePassword(false);
        setAssign(false);
        setAssignProfit(false);
        setDeleteUser(false);
        setPendingKyc(false);
        setPendingTickets(false);
        break;
      case "/userDashboard/referral":
        setDashboard(false);
        setInvestment(false);
        setScheduleInvestment(false);
        setDeposit(false);
        setWithdraw(false);
        setTransaction(false);
        setReferral(true);
        setSupportTicket(false);
        setTwoFA(false);
        setChangePassword(false);
        setAssign(false);
        setAssignProfit(false);
        setDeleteUser(false);
        setPendingKyc(false);
        setPendingTickets(false);
        break;
      case "/userDashboard/supportTicket":
        setDashboard(false);
        setInvestment(false);
        setScheduleInvestment(false);
        setDeposit(false);
        setWithdraw(false);
        setTransaction(false);
        setReferral(false);
        setSupportTicket(true);
        setTwoFA(false);
        setChangePassword(false);
        setAssign(false);
        setAssignProfit(false);
        setDeleteUser(false);
        setPendingKyc(false);
        setPendingTickets(false);
        break;
      case "/userDashboard/twoFA":
        setDashboard(false);
        setInvestment(false);
        setScheduleInvestment(false);
        setDeposit(false);
        setWithdraw(false);
        setTransaction(false);
        setReferral(false);
        setSupportTicket(false);
        setTwoFA(true);
        setChangePassword(false);
        setAssign(false);
        setAssignProfit(false);
        setDeleteUser(false);
        setPendingKyc(false);
        setPendingTickets(false);
        break;
      case "/userDashboard/change_password":
        setDashboard(false);
        setInvestment(false);
        setScheduleInvestment(false);
        setDeposit(false);
        setWithdraw(false);
        setTransaction(false);
        setReferral(false);
        setSupportTicket(false);
        setTwoFA(false);
        setChangePassword(true);
        setAssign(false);
        setAssignProfit(false);
        setDeleteUser(false);
        setPendingKyc(false);
        setPendingTickets(false);
        break;
      case "/userDashboard/assign-profit":
        setDashboard(false);
        setInvestment(false);
        setScheduleInvestment(false);
        setDeposit(false);
        setWithdraw(false);
        setTransaction(false);
        setReferral(false);
        setSupportTicket(false);
        setTwoFA(false);
        setChangePassword(false);
        setAssign(false);
        setAssignProfit(true);
        setDeleteUser(false);
        setPendingKyc(false);
        setPendingTickets(false);
        break;
      case "/userDashboard/delete-user":
        setDashboard(false);
        setInvestment(false);
        setScheduleInvestment(false);
        setDeposit(false);
        setWithdraw(false);
        setTransaction(false);
        setReferral(false);
        setSupportTicket(false);
        setTwoFA(false);
        setChangePassword(false);
        setAssign(false);
        setAssignProfit(false);
        setDeleteUser(true);
        setPendingKyc(false);
        setPendingTickets(false);
        break;
      case "/userDashboard/pending-kyc":
        setDashboard(false);
        setInvestment(false);
        setScheduleInvestment(false);
        setDeposit(false);
        setWithdraw(false);
        setTransaction(false);
        setReferral(false);
        setSupportTicket(false);
        setTwoFA(false);
        setChangePassword(false);
        setAssign(false);
        setAssignProfit(false);
        setDeleteUser(false);
        setPendingKyc(true);
        setPendingTickets(false);
        break;
      case "/userDashboard/pending-tickets":
        setDashboard(false);
        setInvestment(false);
        setScheduleInvestment(false);
        setDeposit(false);
        setWithdraw(false);
        setTransaction(false);
        setReferral(false);
        setSupportTicket(false);
        setTwoFA(false);
        setChangePassword(false);
        setAssign(false);
        setAssignProfit(false);
        setDeleteUser(false);
        setPendingKyc(false);
        setPendingTickets(true);
        break;
      default:
        setDashboard(true);
        break;
    }
  }, [location]);

  return (
    <div className="user-dashboard-body">
      <div className="user-dashboard-left-container">
        <div className="user-dashboard-left-body">
          <div className="user-dashboard-left-body-logo">
            <img src={primeTradeLogo} alt="primeTradeLogo" />
          </div>
          <div className="user-dashboard-acct-balance-container">
            <h1>Account Balance</h1>
            <div className="user-dashboard-deposit-wallet-container">
              <div className="user-dashboard-deposit-wallet-wrapper">
                <p>Deposit Wallet</p>
                <div className="user-dashboard-deposit-wallet-amount">
                  <h3>
                    {walletDetails.deposit}.00 <span>USD</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="user-dashboard-deposit-wallet-container">
              <div className="user-dashboard-deposit-wallet-wrapper">
                <p>Interest Wallet</p>
                <div className="user-dashboard-deposit-wallet-amount">
                  <h3>
                    {walletDetails.interest}.00 <span>USD</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="user-dashboard-deposit-wallet-container">
              <div className="user-dashboard-deposit-wallet-wrapper">
                <p>Referral Wallet</p>
                <div className="user-dashboard-deposit-wallet-amount">
                  <h3>
                    {walletDetails.referal}.00 <span>USD</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="user-dashboard-deposit-withdraw-btn-wrapper">
              <button
                onClick={() => {
                  navigate("/userDashboard/deposit");
                }}
              >
                Deposit
              </button>
              <button
                onClick={() => {
                  navigate("/userDashboard/withdraw");
                }}
              >
                Withdraw
              </button>
            </div>
          </div>
          <div className="user-dashboard-left-body-menu">
            <div
              className={
                dashboard
                  ? "user-dashboard-left-menu-dashboard-active"
                  : "user-dashboard-left-menu-dashboard"
              }
              onClick={() => {
                navigate("/userDashboard/dashboard");
              }}
            >
              <div className="user-dashboard-menu-dashboard-container">
                <div className="user-dashboard-menu-dashboard-container-icon">
                  <MdOutlineDashboard
                    className={
                      dashboard
                        ? "user-dashboard-menu-icon-active"
                        : "user-dashboard-menu-icon"
                    }
                  />
                </div>
                <div className="user-dashboard-menu-dashboard-container-title">
                  <p
                    className={
                      dashboard
                        ? "user-dashboard-menu-dashboard-container-titleP-active"
                        : "user-dashboard-menu-dashboard-container-titleP"
                    }
                  >
                    Dashboard
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                investment
                  ? "user-dashboard-left-menu-investment-active"
                  : "user-dashboard-left-menu-investment"
              }
              onClick={() => {
                navigate("/userDashboard/investment");
              }}
            >
              <div className="user-dashboard-menu-investment-container">
                <div className="user-dashboard-menu-investment-container-icon">
                  <CgMenuBoxed
                    className={
                      investment
                        ? "user-dashboard-menu-investment-icon-active"
                        : "user-dashboard-menu-investment-icon"
                    }
                  />
                </div>
                <div className="user-dashboard-menu-investment-container-title">
                  <p
                    className={
                      investment
                        ? "user-dashboard-menu-investment-container-titleP-active"
                        : "user-dashboard-menu-investment-container-titleP"
                    }
                  >
                    Investment
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                scheduleInvestment
                  ? "user-dashboard-left-menu-scheduleInvestment-active"
                  : "user-dashboard-left-menu-scheduleInvestment"
              }
              onClick={() => {
                navigate("/userDashboard/scheduleInvestment");
              }}
            >
              <div className="user-dashboard-menu-scheduleInvestment-container">
                <div className="user-dashboard-menu-scheduleInvestment-container-icon">
                  <AiOutlineSchedule
                    className={
                      scheduleInvestment
                        ? "user-dashboard-menu-scheduleInvestment-icon-active"
                        : "user-dashboard-menu-scheduleInvestment-icon"
                    }
                  />
                </div>
                <div className="user-dashboard-menu-scheduleInvestment-container-title">
                  <p
                    className={
                      scheduleInvestment
                        ? "user-dashboard-menu-scheduleInvestment-container-titleP-active"
                        : "user-dashboard-menu-scheduleInvestment-container-titleP"
                    }
                  >
                    Schedule Investment
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                deposit
                  ? "user-dashboard-left-menu-deposit-active"
                  : "user-dashboard-left-menu-deposit"
              }
              onClick={() => {
                navigate("/userDashboard/deposit");
              }}
            >
              <div className="user-dashboard-menu-deposit-container">
                <div className="user-dashboard-menu-deposit-container-icon">
                  <IoAlertCircleOutline
                    className={
                      deposit
                        ? "user-dashboard-menu-deposit-icon-active"
                        : "user-dashboard-menu-deposit-icon"
                    }
                  />
                </div>
                <div className="user-dashboard-menu-deposit-container-title">
                  <p
                    className={
                      deposit
                        ? "user-dashboard-menu-deposit-container-titleP-active"
                        : "user-dashboard-menu-deposit-container-titleP"
                    }
                  >
                    Deposit
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                withdraw
                  ? "user-dashboard-left-menu-withdraw-active"
                  : "user-dashboard-left-menu-withdraw"
              }
              onClick={() => {
                navigate("/userDashboard/withdraw");
              }}
            >
              <div className="user-dashboard-menu-withdraw-container">
                <div className="user-dashboard-menu-withdraw-container-icon">
                  <BiMoneyWithdraw
                    className={
                      withdraw
                        ? "user-dashboard-menu-withdraw-icon-active"
                        : "user-dashboard-menu-withdraw-icon"
                    }
                  />
                </div>
                <div className="user-dashboard-menu-withdraw-container-title">
                  <p
                    className={
                      withdraw
                        ? "user-dashboard-menu-withdraw-container-titleP-active"
                        : "user-dashboard-menu-withdraw-container-titleP"
                    }
                  >
                    Withdraw
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                transaction
                  ? "user-dashboard-left-menu-transaction-active"
                  : "user-dashboard-left-menu-transaction"
              }
              onClick={() => {
                navigate("/userDashboard/transaction");
              }}
            >
              <div className="user-dashboard-menu-transaction-container">
                <div className="user-dashboard-menu-transaction-container-icon">
                  <GrTransaction
                    className={
                      transaction
                        ? "user-dashboard-menu-transaction-icon-active"
                        : "user-dashboard-menu-transaction-icon"
                    }
                  />
                </div>
                <div className="user-dashboard-menu-transaction-container-title">
                  <p
                    className={
                      transaction
                        ? "user-dashboard-menu-transaction-container-titleP-active"
                        : "user-dashboard-menu-transaction-container-titleP"
                    }
                  >
                    Transactions
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                referral
                  ? "user-dashboard-left-menu-referral-active"
                  : "user-dashboard-left-menu-referral"
              }
              onClick={() => {
                navigate("/userDashboard/referral");
              }}
            >
              <div className="user-dashboard-menu-referral-container">
                <div className="user-dashboard-menu-referral-container-icon">
                  <FaUsers
                    className={
                      referral
                        ? "user-dashboard-menu-referral-icon-active"
                        : "user-dashboard-menu-referral-icon"
                    }
                  />
                </div>
                <div className="user-dashboard-menu-referral-container-title">
                  <p
                    className={
                      referral
                        ? "user-dashboard-menu-referral-container-titleP-active"
                        : "user-dashboard-menu-referral-container-titleP"
                    }
                  >
                    Referrals
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                supportTicket
                  ? "user-dashboard-left-menu-supportTicket-active"
                  : "user-dashboard-left-menu-supportTicket"
              }
              onClick={() => {
                navigate("/userDashboard/supportTicket");
              }}
            >
              <div className="user-dashboard-menu-supportTicket-container">
                <div className="user-dashboard-menu-supportTicket-container-icon">
                  <FaTicketAlt
                    className={
                      supportTicket
                        ? "user-dashboard-menu-supportTicket-icon-active"
                        : "user-dashboard-menu-supportTicket-icon"
                    }
                  />
                </div>
                <div className="user-dashboard-menu-supportTicket-container-title">
                  <p
                    className={
                      supportTicket
                        ? "user-dashboard-menu-supportTicket-container-titleP-active"
                        : "user-dashboard-menu-supportTicket-container-titleP"
                    }
                  >
                    Support Tickets
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                twoFA
                  ? "user-dashboard-left-menu-twoFA-active"
                  : "user-dashboard-left-menu-twoFA"
              }
              onClick={() => {
                navigate("/userDashboard/twoFA");
              }}
            >
              <div className="user-dashboard-menu-twoFA-container">
                <div className="user-dashboard-menu-twoFA-container-icon">
                  <GrShieldSecurity
                    className={
                      twoFA
                        ? "user-dashboard-menu-twoFA-icon-active"
                        : "user-dashboard-menu-twoFA-icon"
                    }
                  />
                </div>
                <div className="user-dashboard-menu-twoFA-container-title">
                  <p
                    className={
                      twoFA
                        ? "user-dashboard-menu-twoFA-container-titleP-active"
                        : "user-dashboard-menu-twoFA-container-titleP"
                    }
                  >
                    2FA Security
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                changePassword
                  ? "user-dashboard-left-menu-changePassword-active"
                  : "user-dashboard-left-menu-changePassword"
              }
              onClick={() => {
                navigate("/userDashboard/change_password");
              }}
            >
              <div className="user-dashboard-menu-changePassword-container">
                <div className="user-dashboard-menu-changePassword-container-icon">
                  <RiLockPasswordLine
                    className={
                      changePassword
                        ? "user-dashboard-menu-changePassword-icon-active"
                        : "user-dashboard-menu-changePassword-icon"
                    }
                  />
                </div>
                <div className="user-dashboard-menu-changePassword-container-title">
                  <p
                    className={
                      changePassword
                        ? "user-dashboard-menu-changePassword-container-titleP-active"
                        : "user-dashboard-menu-changePassword-container-titleP"
                    }
                  >
                    Change Password
                  </p>
                </div>
              </div>
            </div>
            {AdminUser.isAdmin ? (
              <>
                <div
                  className={
                    assign
                      ? "user-dashboard-left-menu-changePassword-active"
                      : "user-dashboard-left-menu-changePassword"
                  }
                  onClick={() => {
                    navigate("/userDashboard/assign-money");
                  }}
                >
                  <div className="user-dashboard-menu-changePassword-container">
                    <div className="user-dashboard-menu-changePassword-container-icon">
                      <GiMoneyStack
                        className={
                          assign
                            ? "user-dashboard-menu-changePassword-icon-active"
                            : "user-dashboard-menu-changePassword-icon"
                        }
                      />
                    </div>
                    <div className="user-dashboard-menu-changePassword-container-title">
                      <p
                        className={
                          assign
                            ? "user-dashboard-menu-changePassword-container-titleP-active"
                            : "user-dashboard-menu-changePassword-container-titleP"
                        }
                      >
                        Assign Balance
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    assignProfit
                      ? "user-dashboard-left-menu-changePassword-active"
                      : "user-dashboard-left-menu-changePassword"
                  }
                  onClick={() => {
                    navigate("/userDashboard/assign-profit");
                  }}
                >
                  <div className="user-dashboard-menu-changePassword-container">
                    <div className="user-dashboard-menu-changePassword-container-icon">
                      <GiMoneyStack
                        className={
                          assignProfit
                            ? "user-dashboard-menu-changePassword-icon-active"
                            : "user-dashboard-menu-changePassword-icon"
                        }
                      />
                    </div>
                    <div className="user-dashboard-menu-changePassword-container-title">
                      <p
                        className={
                          assignProfit
                            ? "user-dashboard-menu-changePassword-container-titleP-active"
                            : "user-dashboard-menu-changePassword-container-titleP"
                        }
                      >
                        Assign Profit
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    deleteUser
                      ? "user-dashboard-left-menu-changePassword-active"
                      : "user-dashboard-left-menu-changePassword"
                  }
                  onClick={() => {
                    navigate("/userDashboard/delete-user");
                  }}
                >
                  <div className="user-dashboard-menu-changePassword-container">
                    <div className="user-dashboard-menu-changePassword-container-icon">
                      <MdDelete
                        className={
                          deleteUser
                            ? "user-dashboard-menu-changePassword-icon-active"
                            : "user-dashboard-menu-changePassword-icon"
                        }
                      />
                    </div>
                    <div className="user-dashboard-menu-changePassword-container-title">
                      <p
                        className={
                          deleteUser
                            ? "user-dashboard-menu-changePassword-container-titleP-active"
                            : "user-dashboard-menu-changePassword-container-titleP"
                        }
                      >
                        Del/Deactivate User Acc
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    pendingKyc
                      ? "user-dashboard-left-menu-changePassword-active"
                      : "user-dashboard-left-menu-changePassword"
                  }
                  onClick={() => {
                    navigate("/userDashboard/pending-kyc");
                  }}
                >
                  <div className="user-dashboard-menu-changePassword-container">
                    <div className="user-dashboard-menu-changePassword-container-icon">
                      <MdDelete
                        className={
                          pendingKyc
                            ? "user-dashboard-menu-changePassword-icon-active"
                            : "user-dashboard-menu-changePassword-icon"
                        }
                      />
                    </div>
                    <div className="user-dashboard-menu-changePassword-container-title">
                      <p
                        className={
                          pendingKyc
                            ? "user-dashboard-menu-changePassword-container-titleP-active"
                            : "user-dashboard-menu-changePassword-container-titleP"
                        }
                      >
                        Pending KYC
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    pendingTickets
                      ? "user-dashboard-left-menu-changePassword-active"
                      : "user-dashboard-left-menu-changePassword"
                  }
                  onClick={() => {
                    navigate("/userDashboard/pending-tickets");
                  }}
                >
                  <div className="user-dashboard-menu-changePassword-container">
                    <div className="user-dashboard-menu-changePassword-container-icon">
                      <MdDelete
                        className={
                          pendingTickets
                            ? "user-dashboard-menu-changePassword-icon-active"
                            : "user-dashboard-menu-changePassword-icon"
                        }
                      />
                    </div>
                    <div className="user-dashboard-menu-changePassword-container-title">
                      <p
                        className={
                          pendingTickets
                            ? "user-dashboard-menu-changePassword-container-titleP-active"
                            : "user-dashboard-menu-changePassword-container-titleP"
                        }
                      >
                        Pending Tickets
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            <div className="user-dashboard-left-menu-logout">
              <button
                className="user-dashboard-logout-btn"
                onClick={LogoutUser}
              >
                {loading ? <ClipLoader color="white" size={21} /> : "Logout"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="user-left-container-media">
        <div className="dashboard-hamburger-wrapper">
          <RxHamburgerMenu
            className="dashboard-hamburger-menu"
            onClick={() => {
              setMenu(true);
            }}
          />
        </div>
      </div>

      {menu ? (
        <div className="user-left-menu-wrapper-media">
          <div className="user-left-menu-logo-wrapper-media">
            <div className="user-left-menu-logo-container-media">
              <img src={primeTradeLogo} alt="primeTradeLogo" />
            </div>
            <IoMdClose
              onClick={() => {
                setMenu(false);
              }}
            />
          </div>
          <div className="user-dashboard-left-body-menu-media">
            <div className="user-dashboard-left-body-menu">
              <div className="user-dashboard-left-menu-title">
                <p className="user-dashboard-left-menu-titleP">HOME</p>
              </div>
              <div
                className={
                  dashboard
                    ? "user-dashboard-left-menu-dashboard-active"
                    : "user-dashboard-left-menu-dashboard"
                }
                onClick={() => {
                  navigate("/userDashboard/dashboard");
                  setMenu(false);
                }}
              >
                <div className="user-dashboard-menu-dashboard-container">
                  <div className="user-dashboard-menu-dashboard-container-icon">
                    <MdOutlineDashboard
                      className={
                        dashboard
                          ? "user-dashboard-menu-icon-active"
                          : "user-dashboard-menu-icon"
                      }
                    />
                  </div>
                  <div className="user-dashboard-menu-dashboard-container-title">
                    <p
                      className={
                        dashboard
                          ? "user-dashboard-menu-dashboard-container-titleP-active"
                          : "user-dashboard-menu-dashboard-container-titleP"
                      }
                    >
                      Dashboard
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  investment
                    ? "user-dashboard-left-menu-investment-active"
                    : "user-dashboard-left-menu-investment"
                }
                onClick={() => {
                  navigate("/userDashboard/investment");
                  setMenu(false);
                }}
              >
                <div className="user-dashboard-menu-investment-container">
                  <div className="user-dashboard-menu-investment-container-icon">
                    <CgMenuBoxed
                      className={
                        investment
                          ? "user-dashboard-menu-investment-icon-active"
                          : "user-dashboard-menu-investment-icon"
                      }
                    />
                  </div>
                  <div className="user-dashboard-menu-investment-container-title">
                    <p
                      className={
                        investment
                          ? "user-dashboard-menu-investment-container-titleP-active"
                          : "user-dashboard-menu-investment-container-titleP"
                      }
                    >
                      Investment
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  deposit
                    ? "user-dashboard-left-menu-deposit-active"
                    : "user-dashboard-left-menu-deposit"
                }
                onClick={() => {
                  navigate("/userDashboard/deposit");
                  setMenu(false);
                }}
              >
                <div className="user-dashboard-menu-deposit-container">
                  <div className="user-dashboard-menu-deposit-container-icon">
                    <IoAlertCircleOutline
                      className={
                        deposit
                          ? "user-dashboard-menu-deposit-icon-active"
                          : "user-dashboard-menu-deposit-icon"
                      }
                    />
                  </div>
                  <div className="user-dashboard-menu-deposit-container-title">
                    <p
                      className={
                        deposit
                          ? "user-dashboard-menu-deposit-container-titleP-active"
                          : "user-dashboard-menu-deposit-container-titleP"
                      }
                    >
                      Deposit
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  withdraw
                    ? "user-dashboard-left-menu-withdraw-active"
                    : "user-dashboard-left-menu-withdraw"
                }
                onClick={() => {
                  // navigate("/userDashboard/withdraw");
                  setMenu(false);
                }}
              >
                <div className="user-dashboard-menu-withdraw-container">
                  <div className="user-dashboard-menu-withdraw-container-icon">
                    <BiMoneyWithdraw
                      className={
                        withdraw
                          ? "user-dashboard-menu-withdraw-icon-active"
                          : "user-dashboard-menu-withdraw-icon"
                      }
                    />
                  </div>
                  <div className="user-dashboard-menu-withdraw-container-title">
                    <p
                      className={
                        withdraw
                          ? "user-dashboard-menu-withdraw-container-titleP-active"
                          : "user-dashboard-menu-withdraw-container-titleP"
                      }
                    >
                      Withdraw
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  changePassword
                    ? "user-dashboard-left-menu-changePassword-active"
                    : "user-dashboard-left-menu-changePassword"
                }
                onClick={() => {
                  navigate("/userDashboard/change_password");
                  setMenu(false);
                }}
              >
                <div className="user-dashboard-menu-changePassword-container">
                  <div className="user-dashboard-menu-changePassword-container-icon">
                    <RiLockPasswordLine
                      className={
                        changePassword
                          ? "user-dashboard-menu-changePassword-icon-active"
                          : "user-dashboard-menu-changePassword-icon"
                      }
                    />
                  </div>
                  <div className="user-dashboard-menu-changePassword-container-title">
                    <p
                      className={
                        changePassword
                          ? "user-dashboard-menu-changePassword-container-titleP-active"
                          : "user-dashboard-menu-changePassword-container-titleP"
                      }
                    >
                      Change Password
                    </p>
                  </div>
                </div>
              </div>
              {!AdminUser.isAdmin ? (
                <>
                  <div
                    className={
                      assign
                        ? "user-dashboard-left-menu-changePassword-active"
                        : "user-dashboard-left-menu-changePassword"
                    }
                    onClick={() => {
                      navigate("/userDashboard/assign-money");
                      setMenu(false);
                    }}
                  >
                    <div className="user-dashboard-menu-changePassword-container">
                      <div className="user-dashboard-menu-changePassword-container-icon">
                        <GiMoneyStack
                          className={
                            assign
                              ? "user-dashboard-menu-changePassword-icon-active"
                              : "user-dashboard-menu-changePassword-icon"
                          }
                        />
                      </div>
                      <div className="user-dashboard-menu-changePassword-container-title">
                        <p
                          className={
                            assign
                              ? "user-dashboard-menu-changePassword-container-titleP-active"
                              : "user-dashboard-menu-changePassword-container-titleP"
                          }
                        >
                          Assign Balance
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      assignProfit
                        ? "user-dashboard-left-menu-changePassword-active"
                        : "user-dashboard-left-menu-changePassword"
                    }
                    onClick={() => {
                      navigate("/userDashboard/assign-profit");
                      setMenu(false);
                    }}
                  >
                    <div className="user-dashboard-menu-changePassword-container">
                      <div className="user-dashboard-menu-changePassword-container-icon">
                        <GiMoneyStack
                          className={
                            assignProfit
                              ? "user-dashboard-menu-changePassword-icon-active"
                              : "user-dashboard-menu-changePassword-icon"
                          }
                        />
                      </div>
                      <div className="user-dashboard-menu-changePassword-container-title">
                        <p
                          className={
                            assignProfit
                              ? "user-dashboard-menu-changePassword-container-titleP-active"
                              : "user-dashboard-menu-changePassword-container-titleP"
                          }
                        >
                          Assign Profit
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      deleteUser
                        ? "user-dashboard-left-menu-changePassword-active"
                        : "user-dashboard-left-menu-changePassword"
                    }
                    onClick={() => {
                      navigate("/userDashboard/delete-user");
                      setMenu(false);
                    }}
                  >
                    <div className="user-dashboard-menu-changePassword-container">
                      <div className="user-dashboard-menu-changePassword-container-icon">
                        <MdDelete
                          className={
                            deleteUser
                              ? "user-dashboard-menu-changePassword-icon-active"
                              : "user-dashboard-menu-changePassword-icon"
                          }
                        />
                      </div>
                      <div className="user-dashboard-menu-changePassword-container-title">
                        <p
                          className={
                            deleteUser
                              ? "user-dashboard-menu-changePassword-container-titleP-active"
                              : "user-dashboard-menu-changePassword-container-titleP"
                          }
                        >
                          Delete User
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      pendingKyc
                        ? "user-dashboard-left-menu-changePassword-active"
                        : "user-dashboard-left-menu-changePassword"
                    }
                    onClick={() => {
                      navigate("/userDashboard/delete-user");
                      setMenu(false);
                    }}
                  >
                    <div className="user-dashboard-menu-changePassword-container">
                      <div className="user-dashboard-menu-changePassword-container-icon">
                        <MdDelete
                          className={
                            pendingKyc
                              ? "user-dashboard-menu-changePassword-icon-active"
                              : "user-dashboard-menu-changePassword-icon"
                          }
                        />
                      </div>
                      <div className="user-dashboard-menu-changePassword-container-title">
                        <p
                          className={
                            pendingKyc
                              ? "user-dashboard-menu-changePassword-container-titleP-active"
                              : "user-dashboard-menu-changePassword-container-titleP"
                          }
                        >
                          Pending KYC
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      pendingTickets
                        ? "user-dashboard-left-menu-changePassword-active"
                        : "user-dashboard-left-menu-changePassword"
                    }
                    onClick={() => {
                      navigate("/userDashboard/delete-user");
                      setMenu(false);
                    }}
                  >
                    <div className="user-dashboard-menu-changePassword-container">
                      <div className="user-dashboard-menu-changePassword-container-icon">
                        <MdDelete
                          className={
                            pendingTickets
                              ? "user-dashboard-menu-changePassword-icon-active"
                              : "user-dashboard-menu-changePassword-icon"
                          }
                        />
                      </div>
                      <div className="user-dashboard-menu-changePassword-container-title">
                        <p
                          className={
                            pendingTickets
                              ? "user-dashboard-menu-changePassword-container-titleP-active"
                              : "user-dashboard-menu-changePassword-container-titleP"
                          }
                        >
                          Pending Tickets
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              <div className="user-dashboard-left-menu-logout">
                <button
                  className="user-dashboard-logout-btn"
                  onClick={LogoutUser}
                >
                  {loading ? <ClipLoader color="white" size={21} /> : "Logout"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* <span></span> */}
      <div className="user-dashboard-right-container">
        <div className="user-dashboard-profile-container">
          <script
            defer
            src="https://www.livecoinwatch.com/static/lcw-widget.js"
          ></script>{" "}
          <div
            className="livecoinwatch-widget-5"
            lcw-base="USD"
            lcw-color-tx="#999999"
            lcw-marquee-1="coins"
            lcw-marquee-2="movers"
            lcw-marquee-items="10"
          ></div>
        </div>
        <div className="user-dashboard-profile-wrapper">
          <Profile />
        </div>

        <div className="user-dashboard-menu-content-container">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/investment" element={<Investments />} />
            <Route
              path="/scheduleInvestment"
              element={<ScheduleInvestment />}
            />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/supportTicket" element={<SupportTicket />} />
            <Route path="/pending-kyc" element={<PendingKyc />} />
            <Route path="/pending-tickets" element={<PendingTickets />} />
            {/* <Route path="/supportTicket/reply/:id" element={<ReplyTickets />} /> */}
            <Route path="/twoFA" element={<TwoFA />} />
            <Route path="/change_password" element={<ChangePassword />} />
            <Route path="/delete-user" element={<DeleteUser />} />
            <Route path="/assign-money" element={<AssignMoney />} />
            <Route path="/assign-profit" element={<AssignProfit />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-setting" element={<ProfileSettingPage />} />
            <Route path="/kyc" element={<Kyc />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
