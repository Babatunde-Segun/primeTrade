import React from "react";
import "./ProfileSettingPage.css";
// import {}

import { FaAngleDown } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { useSelector } from "react-redux";

function ProfileSettingPage() {
  return (
    <section className="profile-section">
      {/* Header bar */}
      {/* <HeaderBar /> */}
      <div className="profile-main-info-container">
        <div className="profile-main-content">
          {/* render dynamically */}
          <h5 className="profile-h5">Baba Vincent</h5>

          <div className="profile-main-content-container">
            <div className="profile-submain-content">
              <p className="profile-sub-detail">
                <CiUser />
                username{" "}
              </p>

              {/* render dynamically */}
              <p>Vincent</p>
            </div>

            <div className="profile-submain-content">
              <p className="profile-sub-detail">
                <CiMail />
                email{" "}
              </p>

              {/* render dynamically */}
              <p>testing@gmail.com</p>
            </div>

            <div className="profile-submain-content">
              <p className="profile-sub-detail">
                <IoCallOutline />
                Mobile{" "}
              </p>

              {/* render dynamically */}
              <p>02929020029</p>
            </div>

            <div className="profile-submain-content">
              <p className="profile-sub-detail">
                <BiWorld />
                country{" "}
              </p>

              {/* render dynamically */}
              <p>Nigeria</p>
            </div>
          </div>
        </div>

        <form className="profile-form">
          <div class="profile-form-group ">
            <label class="profile-form-label " for="firstname">
              First Name
            </label>
            <input
              type="text"
              class="profile-form-input"
              name="firstname"
              placeholder="firstname"
              required
            />
          </div>

          <div class="profile-form-group ">
            <label class="profile-form-label" for="lastname">
              Last Name
            </label>
            <input
              type="text"
              class="profile-form-input"
              required
              placeholder="lastname"
            />
          </div>

          <div class="profile-form-group ">
            <label class="profile-form-label" for="lastname">
              address
            </label>
            <input
              type="text"
              class="profile-form-input"
              required
              placeholder="address"
            />
          </div>

          <div class="profile-form-group ">
            <label class="profile-form-label" for="lastname">
              state
            </label>
            <input
              type="text"
              class="profile-form-input"
              required
              placeholder="state"
            />
          </div>
          <div class="profile-form-group ">
            <label class="profile-form-label" for="lastname">
              zipcode
            </label>
            <input
              type="text"
              class="profile-form-input"
              required
              placeholder="zipcode"
            />
          </div>

          <div class="profile-form-group ">
            <label class="profile-form-label" for="lastname">
              city
            </label>
            <input
              type="text"
              class="profile-form-input"
              required
              placeholder="city"
            />
          </div>

          <div className="profile-button-container">
            <button className="profile-button">submit</button>
          </div>
        </form>
      </div>
      //{" "}
    </section>
  );
}

export default ProfileSettingPage;
