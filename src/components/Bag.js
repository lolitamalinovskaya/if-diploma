import React, {useState} from "react";
import '../styles/components/Bag.css';
import Footer from "./Footer";
import HeaderWhite from "./HeaderWhite";
import MasterCard from "../svg/maestro-logo.svg";
import Visa from "../svg/visa-logo.svg";
import Bag1_item from "./Bag_1item";

export default function Bag({state, updateState}) {

  const [message, setMessage] = useState(undefined);

  const cart = state.cart === null ? [] : state.cart;
  const values = (state.data || []).filter((e) => cart.includes(e.id));
  const items = values.map((e) => <Bag1_item state={state} updateState={updateState} key={e.id} item={e}/>);

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
        updateState({type: "CLEAR_CART"})
      }).catch(() => setMessage('Failed to proceed'))
    }
  }

  return (
    <>
      <HeaderWhite state={state}/>
      <div className="bag_container">
        <div className="bag_header">
          <h5 className="bag_header_bag">BAG</h5>
          <p className="bag_header_items">{values.length} items</p>
        </div>
        {items}
        <div className="bag_totalCount_container">
          {cart.length > 0 ? <p className="bag_totalCount">Total {currency} {price}</p> : null}
          {message ? <p className="bag_message">{message}</p> : null}
          {cart.length > 0 ? <button className="bag_button" onClick={onClick}>PROCEED TO CHECKOUT</button> : null}
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