import React from "react";
import '../styles/components/PageItems.css';
import Footer from "./Footer";
import LogoBlack from "../svg/brand-logo-black.svg";
import SearchIconBlack from "../svg/search-icon-black.svg";
import WishListIconBlack from "../svg/wishlist-black.svg";
import PageImage1 from "../images/pageImage1.png";
import PageImage2 from "../images/pageImage2.png";
import Arrow from "../svg/more.svg";





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
          <p>
            USD $300.00
          </p>

        </div>



      </div>


      <Footer/>
    </>
  )
}