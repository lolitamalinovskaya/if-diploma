import React from "react";
import '../styles/components/HeaderWhite.css';
import LogoBlack from "../svg/brand-logo-black.svg";
import SearchIconBlack from "../svg/search-icon-black.svg";
import WishListIconBlack from "../svg/wishlist-black.svg";


export default function HeaderWhite() {
  return(
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
            <div className="header_element_logo">
              <img src={LogoBlack} alt="logo" className="Logo-black"/>
            </div>
            <div className="header_container_NEW_ARRIVALS_white">
              <div className="header_element">
                <p>BAG (2)</p>
              </div>
              <div className="header_element">
                <img src={WishListIconBlack} alt="wishList" className="WishListIconBlack"/>
              </div>
            </div>
          </div>
        </header>
    </>
  )
}