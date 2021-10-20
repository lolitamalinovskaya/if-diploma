import React from "react";
import ShoppingCart from '../svg/shopping-cart-icon.svg'
import ShoppingCartBlack from '../svg/shopping-cart-icon-black.svg'

import '../styles/components/HomePage.css';

export const HeaderBag = ({image}) => {
  return (
    <>
            <div className="header_element_bag">
              <p className="header_element_bag_p">BAG (2)</p>
              <img src={image} alt="ShoppingCart" className="ShoppingCart"/>
            </div>
    </>
  )
}