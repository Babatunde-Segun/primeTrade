import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { toast } from "react-toastify";
import { expireSession } from "../../Redux/State";

const Transaction = () => {
  const { id } = useSelector((state) => state.BTC.user);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([]);

  async function getTransactionHistory() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://primetrade-shf2.onrender.com/getTransactionHistory/${id}`
      );
      console.log(response);
      setLoading(false);
      toast?.success(response?.data?.message);
      setTransactionHistory(response?.data?.data);
    } catch (err) {
      console.log(err);
      setLoading(false);
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
    getTransactionHistory();
  }, []);

  return (
    <>
      <div className="deposit_history">
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
            {/* <span>Gateway | Transaction</span> */}
            <span
              style={{
                width: "20%",
                display: "flex",
              }}
            >
              Deposit ID
            </span>
            <span
              style={{
                width: "20%",
                display: "flex",
              }}
            >
              Amount
            </span>
            <span
              style={{
                width: "20%",
                display: "flex",
              }}
            >
              Type
            </span>
            <span
              style={{
                width: "20%",
                display: "flex",
              }}
            >
              Date
            </span>
            <span
              style={{
                width: "20%",
                display: "flex",
              }}
            >
              time
            </span>
            {/* <span>Details</span> */}
          </div>
          <div style={{ position: "relative" }} className="bot_HistoryBody">
            {loading ? (
              <div className="loadingData">
                <span>Getting User Transaction</span>
                <BounceLoader size={120} color="white" />
              </div>
            ) : (
              transactionHistory?.map((items) => (
                <div
                  style={{ justifyContent: "space-between" }}
                  key={items?.ID}
                  className="history_Data"
                >
                  <span
                    style={{
                      width: "20%",
                      display: "flex",
                    }}
                  >
                    {items?.ID || "N/A"}
                  </span>
                  <span
                    style={{
                      width: "20%",
                      display: "flex",
                    }}
                  >
                    ${items?.amount || "N/A"}
                  </span>
                  <span
                    style={{
                      width: "20%",
                      display: "flex",
                    }}
                  >
                    {items?.type || "N/A"}
                  </span>
                  <span
                    style={{
                      width: "20%",
                      display: "flex",
                    }}
                  >
                    {items?.timestamp?.slice(0, 10) || "N/A"}
                  </span>
                  <span
                    style={{
                      width: "20%",
                      display: "flex",
                    }}
                  >
                    {items?.timestamp?.slice(11, 16) || "N?A"}
                  </span>
                  {/* <span>{items?.proofOfPayment.createdAt?.slice(0, 10)}</span>
                <span>{items?.proofOfPayment.createdAt?.slice(11, 19)}</span> */}
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
};
export default Transaction;
