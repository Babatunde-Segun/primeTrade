import axios from "axios";
import "./PendingKyc.css";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { expireSession } from "../../Redux/State";
import { useNavigate } from "react-router-dom";

function PendingKyc() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [allKyc, setAllKyc] = useState([]);
  const [loading, setLoading] = useState(false);
  const [approveLoading, setApproveLoading] = useState(false);
  const [isApprovedKyc, setisApprovedKyc] = useState(false);
  const { token } = useSelector((state) => state.BTC.user);

  async function getAllPendingKyc() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://primetrade-shf2.onrender.com/getUsersKYCWithUnverifiedKYC`
      );
      console.log(response);
      setLoading(false);
      setAllKyc(response?.data?.kycDocs);
      toast.success("All Kyc gotten successfully");
    } catch (err) {
      console.log(err);
      setLoading(false);
      if (err.message === "Network Error") {
        toast.error("No internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else if (err.message === "timeout exceeded") {
        toast.error("timeout exceeded");
      } else {
        toast.error(err.response?.data?.message);
      }
    }
  }

  async function approveKyc(userId) {
    alert(userId);
    setApproveLoading(true);
    try {
      const response = await axios.post(
        `https://primetrade-shf2.onrender.com/approveKyc`,
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      setApproveLoading(false);
      setAllKyc(response?.data?.kycDocs);
      toast.success("User KYC updated successfully");
      setisApprovedKyc(true);
    } catch (err) {
      setisApprovedKyc(false);
      console.log(err);
      setApproveLoading(false);
      console.log(err);
      if (err.message === "Network Error") {
        toast.error("No internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else if (err.message === "timeout exceeded") {
        toast.error("timeout exceeded");
      } else {
        toast.error(err.response?.data?.message);
      }
    }
  }

  useEffect(() => {
    getAllPendingKyc();
  }, []);
  useEffect(() => {
    if (isApprovedKyc) {
      getAllPendingKyc();
    }
  }, [isApprovedKyc]);
  return (
    <div className="pending-kyc-page">
      <div className="pending-kyc-page-wrapper">
        <div
          className="top_HistoryBodyS"
          style={{ justifyContent: "space-around" }}
        >
          {/* <span>Gateway | Transaction</span> */}
          <span
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Full-name
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Gender
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Occupation
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            SSN no
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          ></span>
          {/* <span>Details</span> */}
        </div>
        <div style={{ position: "relative" }} className="bot_HistoryBody">
          {loading ? (
            <div className="loadingData">
              <span>Getting Pending Kyc</span>
              <BounceLoader size={120} color="white" />
              {/*  */}
            </div>
          ) : (
            allKyc?.map((items) => (
              <div
                style={{
                  // height: "95%",
                  background: "none",
                  justifyContent: "space-around",
                }}
                key={items?.investmentId}
                className="history_Data"
              >
                <span>{items?.fullName || "N/A"}</span>
                <span>{items?.gender || "N/A"}</span>
                <span>{items?.occupation || "N/A"}</span>
                <span>{items?.SSN || "N/A"}</span>
                <button
                  onClick={() => approveKyc(items?.userId?._id)}
                  className="view-more-btn"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  {approveLoading ? (
                    <BounceLoader size={17} color="red" />
                  ) : (
                    "View Details"
                  )}
                </button>
              </div>
            ))
          )}
        </div>
        {/* <div className="pending-kyc-page-header"></div> */}
      </div>
      <div className="kyc-pop-up"></div>
    </div>
  );
}

export default PendingKyc;
