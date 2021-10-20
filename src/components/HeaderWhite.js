import React from "react";
import '../styles/components/HeaderWhite.css';
import LogoBlack from "../svg/brand-logo-black.svg";
import WishListIconBlack from "../svg/wishlist-black.svg";
import HamburgerBlack from "../svg/hamburger-menu-icon-black.svg";
import Logo from "../svg/brand-logo.svg";
import SearchIcon from "../svg/search-icon.svg";
import {Link} from "react-router-dom";
import ShoppingCart from '../svg/shopping-cart-icon.svg'
import ShoppingCartBlack from '../svg/shopping-cart-icon-black.svg'
import {HeaderBag} from "./HeaderBag";
import {HeaderWishList} from "./HeaderWishlist";
import WishlistBlack from "../svg/wishlist-black.svg"


export default function HeaderWhite() {


  return(
    <>
      <header className="header_container_black">
        <div className="header_container">
          <div className="header_container_NEW_ARRIVALS">
            <div className="header_element_p1">
              <p>NEW ARRIVALS</p>
              <img src={HamburgerBlack} alt="hamburger" className="HamburgerBlack"/>
            </div>
            <div className="header_element_p2">
              <p>SHOP</p>
            </div>
            <div className="header_element_p3">
              <p>COLLECTIONS</p>
            </div>
          </div>
          <div className="header_element_logo">
            <img src={LogoBlack} alt="logo" className="Logo"/>
          </div>
          <div className="header_container_right_side">
            <HeaderBag image={ShoppingCartBlack}/>
            <HeaderWishList image={WishlistBlack}/>
          </div>
        </div>
      </header>
    </>
  )
}