import axios from "axios";
import "./Deposit.css";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { BounceLoader } from "react-spinners";
import { toast } from "react-toastify";
import { expireSession } from "../../Redux/State";

function DepositHistory({ user }) {
  const [allDepositHistory, setAllDepositHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getDepositHistory() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://primetrade-shf2.onrender.com/DepositHistory/${user._id}`
      );
      setLoading(false);
      console.log(response);
      setAllDepositHistory(response?.data?.data);
      toast.success(response?.data?.message);
    } catch (err) {
      if (err?.message === " Network Error") {
        toast.error("Bad Internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else {
        toast.error(err?.response?.data?.message);
      }
      setLoading(false);
      console.log(err);
    }
  }

  useEffect(() => {
    getDepositHistory();
  }, []);

  return (
    <>
      <div className="deposit_history">
        {loading && (
          <div className="loadingData">
            <span>Getting Deposit History</span>
            <BounceLoader size={120} color="white" />
          </div>
        )}
        <section className="deposit_HistoryHeader">
          <div className="search_HistoryDiv">
            <input type="text" placeholder="Search transaction" />
            <span>
              <IoSearch />
            </span>
          </div>
        </section>
        <section className="deposit_HistoryBody">
          <div className="top_HistoryBody">
            <span>Gateway | Transaction</span>
            <span>Deposit ID</span>
            <span>Amount</span>
            <span>Date</span>
            <span>time</span>
            {/* <span>Details</span> */}
          </div>
          <div className="bot_HistoryBody">
            {allDepositHistory.map((items) => (
              <div key={items.depositId} className="history_Data">
                <span>Gateway | Transaction</span>
                <span>{items.depositId}</span>
                <span>${items.amount}</span>
                <span>{items.proofOfPayment.createdAt.slice(0, 10)}</span>
                <span>{items.proofOfPayment.createdAt.slice(11, 19)}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default DepositHistory;
