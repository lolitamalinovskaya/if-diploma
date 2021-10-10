import React from "react";
import '../styles/components/Bag.css';
import Footer from "./Footer";
import HeaderWhite from "./HeaderWhite";
import insta1 from "../images/insta1.jpg";
import Dropdown from "../svg/dropdown-icon.svg"
import Remove from "../svg/remove-icon.svg"
import MasterCard from "../svg/maestro-logo.svg"
import Visa from "../svg/visa-logo.svg"


export default function Bag() {

  return (
    <>
      <HeaderWhite/>
      <div className="bag_container">
        <div className="bag_header">
          <h5 className="bag_header_bag">BAG</h5>
          <p className="bag_header_items">2 items</p>
        </div>
        <div className="bag_content_container">
          <div className="bag_image_container">
            <img src={insta1} className="bag_image"/>
          </div>
          <div className="bag_description_container">
            <h5 className="bag_description">WHITE BEAUTY MRS BLONDES MID LENGTH DENIM SHORT</h5>
            <p className="bag_price">USD $340.00</p>
            <div className="bag_color_container">
              <p className="bag_color">COLOR: WHITE</p>
              <img src={Dropdown} className="bag_dropdown_svg"/>
            </div>
            <div className="bag_size_container">
              <p className="bag_color">SIZE: 2</p>
              <img src={Dropdown} className="bag_dropdown_svg"/>
            </div>
            <div className="bag_size_container">
              <p className="bag_color">QUANTITY: 1</p>
              <img src={Dropdown} className="bag_dropdown_svg"/>
            </div>
            <div className="bag_remove_container">
              <img src={Remove} className="bag_remove_svg"/>
              <p className="bag_remove">REMOVE</p>
            </div>
          </div>
        </div>
        <div className="bag_totalCount_container">
          <p className="bag_totalCount">Total USD $490.00</p>
          <button className="bag_button">PROCEED TO CHECKOUT</button>
          <div className="bag_visa">
            <img src={MasterCard} className="bag_mastercard_svg"/>
            <img src={Visa} className="bag_visa_svg"/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}