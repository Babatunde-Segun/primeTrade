import axios from "axios";
import "./Kyc.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

function Kyc() {
  const { token } = useSelector((state) => state.BTC.user);

  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [gender, setgender] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [SSN, setSSN] = useState("");
  const [occupation, setoccupation] = useState("");
  const [billingAddress, setbillingAddress] = useState("");
  const [driversLicense, setdriversLicense] = useState("");
  const data = {
    fullName,
    gender,
    dateOfBirth,
    SSN,
    occupation,
    billingAddress,
    driversLicense,
  };

  async function verifyKyc() {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://primetrade-shf2.onrender.com/kycVerification/${token}`,
        {
          Headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        data
      );
      console.log(response);
      toast.success("Kyc submitted successfully, pls wait for admin approval");
      setLoading(false);
    } catch (err) {
      toast.error(err?.response?.data?.message);
      console.log(err);
      setLoading(false);
    }
  }
  return (
    <div className="kyc-page-main-container">
      <div className="kyc-page">
        <label className="kyc-page-label">Full Name</label>
        <input
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          className="kyc-page-input"
          type="text"
          placeholder="Vincent"
        />
      </div>

      <div className="kyc-page">
        <label className="kyc-page-label">Drivers License </label>

        <div className="kyc-attached-input-container">
          <input
            type="file"
            onChange={(e) => setdriversLicense(e.target.files[0])}
            className="kyc-choose-file"
            placeholder="No file chosen"
          />
        </div>

        <p className="kyc-attached">Supported mimes: jpg,jpeg,png,pdf,doc</p>
      </div>

      <div className="kyc-page">
        <label className="kyc-page-label">Driver License (back) </label>

        <div className="kyc-attached-input-container">
          <input
            onChange={(e) => setdriversLicense(e.target.files[0])}
            type="file"
            className="kyc-choose-file"
            placeholder="No file chosen"
          />
        </div>

        <p className="kyc-attached">Supported mimes: jpg,jpeg,png,pdf,doc</p>
      </div>

      <div className="kyc-page">
        <label className="kyc-page-label">Gender</label>
        <select
          onChange={(e) => setgender(e.target.value)}
          value={gender}
          name="priority"
          className="kyc-page-select"
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div className="kyc-page">
        <label className="kyc-page-label">Date of birth</label>
        <input
          onChange={(e) => setdateOfBirth(e.target.value)}
          value={dateOfBirth}
          className="kyc-page-input"
          type="date"
        />
      </div>

      <div className="kyc-page">
        <label className="kyc-page-label">SSN</label>
        <input
          onChange={(e) => setSSN(e.target.value)}
          value={SSN}
          className="kyc-page-input"
          type="text"
        />
      </div>

      <div className="kyc-page">
        <label className="kyc-page-label">occupation</label>
        <input
          onChange={(e) => setoccupation(e.target.value)}
          value={occupation}
          className="kyc-page-input"
          type="text"
        />
      </div>

      <div className="kyc-page">
        <label className="kyc-page-label">billing address</label>
        <input
          onChange={(e) => setbillingAddress(e.target.value)}
          value={billingAddress}
          className="kyc-page-input"
          type="text"
        />
      </div>

      <div className="kyc-button-container">
        <button onClick={verifyKyc} className="kyc-button">
          {loading ? <ClipLoader size={22} color="white" /> : "submit"}
        </button>
      </div>
    </div>
  );
}

export default Kyc;
