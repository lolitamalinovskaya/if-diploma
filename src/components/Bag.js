import React, { useState } from "react";

import Footer from "./Footer";
import HeaderWhite from "./HeaderWhite";
import MasterCard from "../svg/maestro-logo.svg";
import Visa from "../svg/visa-logo.svg";
import BagItem from "./BagItem";

import '../styles/components/Bag.css';

export default function Bag({ state, updateState }) {

  const [message, setMessage] = useState(undefined);

  const cart = state.cart === null ? [] : state.cart;
  const values = (state.data || []).filter((e) => cart.includes(e.id));
  const items = values.map((e) => <BagItem state={state} updateState={updateState} key={e.id} item={e}/>);

  const price = Number(values.map((e) => +e.price.value).reduce((a, b) => a + b, 0) / 100).toFixed(2);
  const currency = values.length > 0 ? values[0].price.currency : '';

  const onClick = () => {
    if (cart.length !== 0){
      fetch('https://modnikky-api.herokuapp.com/api/cart', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({products: cart})
      }).then((e) => e.json()).then((e) => {
        setMessage(e.message);
        updateState({type: "CLEAR_CARD"})
      }).catch(() => setMessage('Failed to proceed'))
    }
  }

  return (
    <>
      <HeaderWhite state={state}/>
      <div className="bag_wrapper">
        <div className="bag_header">
          <h5 className="bag_title">BAG</h5>
          <p className="bag_subtitle">{values.length} items</p>
        </div>
        {items}
        <div className="bag_inner">
          {cart.length > 0 && <p className="bag_currency">Total {currency} {price}</p>}
          {message && <p className="bag_message">{message}</p>}
          {cart.length > 0 && <button className="bag_button" onClick={onClick}>PROCEED TO CHECKOUT</button>}
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