import React from "react";
import '../styles/components/Bag.css';
import Dropdown from "../svg/dropdown-icon.svg"
import Remove from "../svg/remove-icon.svg"

export default function Bag1_item({state, updateState, item, isFavorite}) {
 const onClick = () => {
   updateState({type: isFavorite ? "REMOVE_FROM_FAVORITE" : "REMOVE_FROM_CART", payload: item.id});
 };

 const isInBag = (state.cart || []).includes(item.id);

  const onBagClick = () => {
    if(!isInBag) {
      updateState({type: "ADD_TO_CART", payload: item.id})
    }
  }
  return (
    <>
      <div className="bag_content_container">
        <div className="bag_image_container">
          <img src={item.images[0]} className="bag_image"/>
        </div>
        <div className="bag_description_container">
          <h5 className="bag_description">{item.description}</h5>
          <p className="bag_price">{item.price.currency} {new Number(item.price.value / 100).toFixed(2)}</p>
          <div className="bag_color_container">
            <p className="bag_color">COLOR: {item.color.name.toUpperCase()}</p>
            <img src={Dropdown} className="bag_dropdown_svg"/>
          </div>
          <div className="bag_size_container">
            <p className="bag_color">SIZE: 2</p>
            <img src={Dropdown} className="bag_dropdown_svg"/>
          </div>
          <div className="bag_size_container">
            <p className="bag_color">QUANTITY: 1</p>
            <img src={Dropdown} className="bag_dropdown_svg"/>
          </div>
          {isFavorite ? <div onClick={onBagClick} className="bag_add_button_container">
            <button className="bag_add_button">{isInBag ? 'IN BAG' : 'ADD TO BAG'}</button>
          </div> : null}
          <div className="bag_remove_container" onClick={onClick}>
            <img src={Remove} className="bag_remove_svg"/>
            <p className="bag_remove">REMOVE</p>
          </div>
        </div>
      </div>
    </>
  )
}