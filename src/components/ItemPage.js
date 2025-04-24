import React from "react";

import Footer from "./Footer";
import WishlistIcon from "../svg/wishlist-icon.svg";
import WishlistIconWhite from "../svg/heart.svg";
import DecrementIcon from "../svg/collapse-icon.svg";
import IncrementIcon from "../svg/expand-icon.svg"
import HeaderWhite from "./HeaderWhite";
import {useParams, Redirect} from "react-router-dom";
import Sizes from "./Sizes";
import {useState, useEffect} from "react";

import '../styles/components/PageItems.css';
import {useAppState} from "./App";

export default function ItemPage() {
  const {state, updateState} = useAppState();
  const {id} = useParams();
  const [item, setItem] = useState(null);

  const [showDescription, setShowDescription] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const [showFabric, setShowFabric] = useState(false);

  const toggleDescription = () => setShowDescription(!showDescription);
  const toggleShipping = () => setShowShipping(!showShipping);
  const toggleFabric = () => setShowFabric(!showFabric);

  useEffect(() => {
      window.scrollTo(0,0);
  }, []);

    useEffect(() => {
      if (state.data === undefined) {
        fetch(`https://shop.malinovskaya.lol/api/catalog/product/${id}`)
            .then((response) => response.json())
            .then((response) => {
              if (response === null) {
                // 404
                return <Redirect to={'/'}/>
              } else {
                setItem(response);
              }
            })
            .catch(() => {
              return <Redirect to={'/'}/>
            })
      } else {
        setItem(state.data.find((e) => e.id.toString() === id));
      }
    }, []);

  const onClick = () => {updateState({type: "ADD_TO_CART", payload: id})}

  const isAdded = state.cart !== null && state.cart.includes(id);

  const isFavorite = (state.favorite || []).includes(id);

  const onClickFavorite = () => {updateState({type: isFavorite ? "REMOVE_FROM_FAVORITE" :"ADD_TO_FAVORITE", payload: id})}

  return (
    item && <>
      <HeaderWhite state={state}/>
      <div className="PageItems_container">
        <div className="PageImage1_container">
          <img src={item.images[0]} alt="PageImage1" className="PageImage1" />
        </div>
        <div className="PageImage2_container">
          <img src={item.images[1]} alt="PageImage2" className="PageImage2" />
        </div>
        <div className="Page_description">
          <h5>
            {item.name}
          </h5>
          <p className="page_price">
            {item.price.currency} {Number(item.price.value)}
          </p>
          <p className="page_pre_order">PRE-ORDER</p>
          <p className="page_color">COLOR</p>
          <div className="ColorBox" style={{'backgroundColor': item.color.hex}}></div>
          <p className="page_size_header">SIZE</p>
          <Sizes sizes={item.availableSizes}/>
          <div className="pages_container">
          <button className="page_button" onClick={onClick}>{isAdded ? `ADDED` : `ADD TO BAG`}</button>
          <button className="page_button_wishlist" onClick={onClickFavorite}> <img src={isFavorite ? WishlistIconWhite : WishlistIcon} alt="wishList" className="WishListIcon"/></button>
          </div>

          <div className="description_container">
            {showDescription ? <img src={DecrementIcon} alt="DecrementIcon" className="DecrementIcon_description" /> :
              <img src={IncrementIcon} alt="IncrementIcon" className="IncrementIcon_description" />}
            <h6 className="description_header" onClick={toggleDescription}>PRODUCT DESCRIPTION</h6>
          </div>
          {showDescription && <p className="description"> {item.description} </p>}


          <div className="shipping_container">
            {showShipping ? <img src={DecrementIcon} alt="DecrementIcon" className="DecrementIcon_shipping" /> :
              <img src={IncrementIcon} alt="IncrementIcon" className="IncrementIcon_shipping" />}
            <h6 className="description_header" onClick={toggleShipping}>SHIPPING & RETURNS</h6>
          </div>
          {showShipping && <p className="description">FREE DELIVERY. FREE RETURNS.</p>}

          <div className="fabric_container">
            {showFabric ? <img src={DecrementIcon} alt="DecrementIcon" className="DecrementIcon_shipping" /> :
            <img src={IncrementIcon} alt="IncrementIcon" className="IncrementIcon_shipping" />}
            <h6 className="description_header" onClick={toggleFabric}>FABRIC COMPOSITION</h6>
          </div>
          {showFabric && <p className="description">LIGHTWEIGHT. COTTON. SOFT, STRONG AND BREATHABLE. MAIN: 100% COTTON</p>}
        </div>
      </div>
      <Footer/>
    </>
  )
}
