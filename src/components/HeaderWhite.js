import React from "react";

import LogoBlack from "../svg/brand-logo-black.svg";
import HamburgerBlack from "../svg/hamburger-menu-icon-black.svg";
import {Link} from "react-router-dom";
import ShoppingCartBlack from '../svg/shopping-cart-icon-black.svg';
import {HeaderBag} from "./HeaderBag";
import {HeaderWishList} from "./HeaderWishlist";
import WishlistBlack from "../svg/wishlist-black.svg";

import '../styles/components/HeaderWhite.css';

export default function HeaderWhite({state}) {

  return (
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
          <Link exact={"/"} to={"/"}>
            <div className="header_element_logo">
              <img src={LogoBlack} alt="logo" className="Logo"/>
            </div>
          </Link>
          <div className="header_container_right_side">
            <Link to={'/bag'} style={{textDecoration: 'none', color: 'black'}}><HeaderBag image={ShoppingCartBlack} state={state}/></Link>
            <Link to={'/favorite'}><HeaderWishList image={WishlistBlack}/></Link>
          </div>
        </div>
      </header>
    </>
  )
}
