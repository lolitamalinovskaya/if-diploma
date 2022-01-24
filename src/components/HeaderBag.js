import React from "react";

import '../styles/components/HomePage.css';

export const HeaderBag = ({image, state}) => {

  const count = state.cart === null ? 0 : state.cart.length;

  return (
    <>
      <div className="header_element_bag">
        <p className="header_element_bag_p">BAG ({count})</p>
        <img src={image} alt="ShoppingCart" className="ShoppingCart"/>
      </div>
    </>
  )
}