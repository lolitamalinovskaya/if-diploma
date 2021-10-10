import React from "react";
import '../styles/components/Sign.css';
import CloseIcon from "../svg/close-icon.svg";


export default function Sign() {
  return (
    <>
      <div className="sign_container">
        <div className="sign_container_window">
          <div className="sign_window_content">

            <div className="sign_window_header_container">
              <h5 className="sign_window_header">CREATE ACCOUNT</h5>
              <img src={CloseIcon} alt="CloseIcon" className="CloseIcon"/>
            </div>
            <input className="sign_Input_First_Name" type="text" placeholder="First Name"/>
            <input className="sign_Input_First_Name" type="text" placeholder="Last Name"/>
            <input className="sign_Input_First_Name" type="text" placeholder="Email"/>
            <input className="sign_Input_First_Name" type="password" placeholder="Password"/>
            <div className="sign_Input_checkbox_container">
              <input type="checkbox" className="sign_Input_checkbox" />
              <label className="sign_label_checkbox">Let's get personal! We'll send you only the good stuff: Exclusive early access to Sale, new arrivals and promotions. No nasties.</label>
            </div>
            <p className="sign_agree">By signing up you agree to <span className="sign_agree_underline">Terms of Service</span> and <span className="sign_agree_underline">Privacy Policy</span></p>
            <div className="sign_button_container">
            <button className="sign_button">SIGN UP</button>
            </div>
            <p className="sign_have_account">I HAVE AN ACCOUNT</p>
          </div>
        </div>
      </div>
    </>
)
}