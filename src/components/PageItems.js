import React from "react";
import '../styles/components/PageItems.css';
import Footer from "./Footer";
import LogoBlack from "../svg/brand-logo-black.svg";
import SearchIconBlack from "../svg/search-icon-black.svg";
import WishListIconBlack from "../svg/wishlist-black.svg";
import PageImage1 from "../images/pageImage1.png";
import PageImage2 from "../images/pageImage2.png";
import ColorBox from "../images/color-item.png";
import WishlistIcon from "../svg/wishlist-icon.svg";
import DecrementIcon from "../svg/collapse-icon.svg";
import IncrementIcon from "../svg/expand-icon.svg"





export default function PageItems() {

  return (
    <>

        <header className="header_black">
          <div className="header_container">
            <div className="header_container_NEW_ARRIVALS">
              <div className="header_element">
                <p>NEW ARRIVALS</p>
              </div>
              <div className="header_element">
                <p>SHOP</p>
              </div>
              <div className="header_element">
                <p>COLLECTIONS</p>
              </div>
            </div>
            <div className="header_element">
              <img src={LogoBlack} alt="logo" className="Logo-black"/>
            </div>
            <div className="header_container_NEW_ARRIVALS">
              <div className="header_element search">
                <img src={SearchIconBlack} alt="search" className="SearchIconBlack"/>
                <p>SEARCH</p>
              </div>
              <div className="header_element">
                <p>BAG (2)</p>
              </div>
              <div className="header_element">
                <img src={WishListIconBlack} alt="wishList" className="WishListIconBlack"/>
              </div>
            </div>
          </div>
        </header>
      <div className="PageItems_container">
        <div className="PageImage1_container">
          <img src={PageImage1} alt="PageImage1" className="PageImage1" />
        </div>
        <div className="PageImage2_container">
          <img src={PageImage2} alt="PageImage2" className="PageImage2" />
        </div>
        <div className="Page_description">
          <h5>
            CHALK SAINTS BOYFRIEND
          </h5>
          <p className="page_price">
            USD $300.00
          </p>
          <p className="page_pre_order">PRE-ORDER</p>
          <p className="page_color">COLOR</p>
          <img src={ColorBox} alt="ColorBox" className="ColorBox" />
          <p className="page_size_header">SIZE</p>
          <div className="page_size_container">
          <p className="page_size_item">S</p>
          <p className="page_size_item">M</p>
          <p className="page_size_item">L</p>
          <p className="page_size_item">XL</p>
          </div>
          <div className="pages_container">
          <button className="page_button">ADD TO BAG</button>
          <button className="page_button_wishlist"> <img src={WishlistIcon} alt="wishList" className="WishListIcon"/></button>
          </div>

          <div className="description_container">
            <img src={IncrementIcon} alt="IncrementIcon" className="IncrementIcon_description" />
            <img src={DecrementIcon} alt="DecrementIcon" className="DecrementIcon_description" />
            <h6 className="description_header">PRODUCT DESCRIPTION</h6>
          </div>
          <p className="description">
            Saints are a low-waist, drop crotch <br/>
            relaxed boyfriend jean. Straight fit across<br/>
            the hips, bow shape legs, with knee darts <br/>and tapered leg. Back pockets dropped<br/>
            slightly for slouch feel.
          </p>


          <div className="shipping_container">
            <img src={IncrementIcon} alt="IncrementIcon" className="IncrementIcon_shipping" />
            <img src={DecrementIcon} alt="DecrementIcon" className="DecrementIcon_shipping" />
            <h6 className="description_header">SHIPPING & RETURNS</h6>
          </div>

          <div className="fabric_container">
            <img src={IncrementIcon} alt="IncrementIcon" className="IncrementIcon_shipping" />
            <img src={DecrementIcon} alt="DecrementIcon" className="DecrementIcon_shipping" />
            <h6 className="description_header">FABRIC COMPOSITION</h6>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}