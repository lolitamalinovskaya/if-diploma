import React from "react";
import '../styles/components/HomePage.css';

export const HeaderWishList = ({image}) => {
  return (
    <>
      <div className="header_element_wishlist">
        <img src={image} alt="wishList" className="WishListIcon"/>
      </div>
    </>
  )
}