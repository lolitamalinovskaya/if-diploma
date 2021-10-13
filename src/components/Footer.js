import React from "react";
import '../styles/components/Footer.css';
import Facebook from '../svg/facebok-logo.svg'
import Odnoklassniki from '../svg/odonklassniki-logo.svg';
import Instagram from '../svg/instagram-logo.svg';
import Subscription from "./Subscription";

export default function Footer() {

  return (
    <>
      <div className="footer_container">
        <h3 className="footer_header">SIGN UP FOR UPDATES</h3>
        <p className="footer_LabelForInput">Sign up for exclusive early sale access and tailored new arrivals.</p>
        <Subscription />
        <div className="footer_lists_container">
          <div className="footer_lists_container_1block">
            <h4>CUSTOMER SERVICE</h4>
            <li>CONTACT</li>
            <li>TRACK ORDER</li>
            <li>DELIVERY & RETURNS</li>
            <li>PAYMENT</li>
            <li>MAKE A RETURN</li>
            <li>FAQ</li>
          </div>
          <div>
            <h4 className="footer_lists_container_2block">INFO</h4>
            <li>GIFT VOUCHERS</li>
            <li>SIZE GUIDE</li>
            <li>CAREERS AT MODNIKKY</li>
            <li>ABOUT US</li>
            <li>LEGAL POLICIES</li>
          </div>
          <div>
            <h4 className="footer_lists_container_3block">FOLLOW US</h4>
            <div className="Footer_Li_with_icon">
              <img src={Facebook} alt="Facebook" className="Facebook_svg"/>
              <li>FACEBOOK</li>
            </div>
            <div className="Footer_Li_with_icon">
              <img src={Odnoklassniki} alt="ODNOKLASSNIKI" className="Odnoklassniki_svg"/>
              <li>ODNOKLASSNIKI</li>
            </div>
            <div className="Footer_Li_with_icon">
              <img src={Instagram} alt="Instagram" className="Instagram_svg"/>
              <li>INSTAGRAM</li>
            </div>
          </div>
          <div>
            <h4>CONTACT US</h4>
            <li>hello@modnikky.com</li>
            <li>+7 910 832 26XX</li>
            <li>Visit us at Shalalaeva 23,<br/> Bologoe, Russia</li>
          </div>
        </div>
      </div>
      </>
      )
      }