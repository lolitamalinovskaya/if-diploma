import React, {useState} from "react";
import '../styles/components/Bag.css';
import Footer from "./Footer";
import HeaderWhite from "./HeaderWhite";
import MasterCard from "../svg/maestro-logo.svg";
import Visa from "../svg/visa-logo.svg";
import Bag1_item from "./Bag_1item";


export default function Favorite({state, updateState}) {

  const [message, setMessage] = useState(undefined);

  const favorite = state.favorite === null ? [] : state.favorite;
  const values = (state.data || []).filter((e) => favorite.includes(e.id));
  const items = values.map((e) => <Bag1_item isFavorite={true} state={state} updateState={updateState} key={e.id} item={e}/>);

  return (
    <>
      <HeaderWhite state={state}/>
      <div className="bag_container">
        <div className="bag_header">
          <h5 className="bag_header_bag">FAVORITES</h5>
          <p className="bag_header_items">{values.length} items</p>
        </div>
        {items}
        <div className="bag_totalCount_container">
          <div className="favorites_bag_visa">
            <img src={MasterCard} className="bag_mastercard_svg"/>
            <img src={Visa} className="bag_visa_svg"/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}