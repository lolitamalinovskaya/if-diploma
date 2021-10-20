import React from "react";
import '../styles/components/PageItems.css';
import Footer from "./Footer";
import WishlistIcon from "../svg/wishlist-icon.svg";
import DecrementIcon from "../svg/collapse-icon.svg";
import IncrementIcon from "../svg/expand-icon.svg"
import HeaderWhite from "./HeaderWhite";
import {useParams, Redirect} from "react-router-dom";
import Sizes from "./Sizes";
import {useState} from "react";


export default function PageItems({state, updateState}) {

  React.useEffect(() => {
      window.scrollTo(0,0);
  }, []);

  const [showDescription, setShowDescription] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const [showFabric, setShowFabric] = useState(false);

  const toggleDescription = () => setShowDescription(!showDescription);
  const toggleShipping = () => setShowShipping(!showShipping);
  const toggleFabric = () => setShowFabric(!showFabric);


  const {id} = useParams();
  const item = (state.data || []).find((e) => e.id === id)
  if(item === undefined) {
    return <Redirect to={'/'}/>
  }
  return (
    <>
      <HeaderWhite />
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
            {item.price.currency} {Number(item.price.value / 100).toFixed(2)}
          </p>
          <p className="page_pre_order">PRE-ORDER</p>
          <p className="page_color">COLOR</p>
          <div alt="ColorBox" className="ColorBox" style={{'background-color': item.color.hex}}></div>
          <p className="page_size_header">SIZE</p>
          <Sizes sizes={item.availableSizes}/>
          <div className="pages_container">
          <button className="page_button">ADD TO BAG</button>
          <button className="page_button_wishlist"> <img src={WishlistIcon} alt="wishList" className="WishListIcon"/></button>
          </div>

          <div className="description_container">
            {showDescription ? <img src={DecrementIcon} alt="DecrementIcon" className="DecrementIcon_description" /> :
              <img src={IncrementIcon} alt="IncrementIcon" className="IncrementIcon_description" />}
            <h6 className="description_header" onClick={toggleDescription}>PRODUCT DESCRIPTION</h6>
          </div>
          {showDescription ? <p className="description"> {item.description} </p> : null}


          <div className="shipping_container">
            {showShipping ? <img src={DecrementIcon} alt="DecrementIcon" className="DecrementIcon_shipping" /> :
              <img src={IncrementIcon} alt="IncrementIcon" className="IncrementIcon_shipping" />}
            <h6 className="description_header" onClick={toggleShipping}>SHIPPING & RETURNS</h6>
          </div>
          {showShipping ? <p className="description">FREE DELIVERY. FREE RETURNS.</p> : null}

          <div className="fabric_container">
            {showFabric ?  <img src={DecrementIcon} alt="DecrementIcon" className="DecrementIcon_shipping" /> :
            <img src={IncrementIcon} alt="IncrementIcon" className="IncrementIcon_shipping" />}
            <h6 className="description_header" onClick={toggleFabric}>FABRIC COMPOSITION</h6>
          </div>
          {showFabric ? <p className="description">LIGHTWEIGHT. COTTON. SOFT, STRONG AND BREATHABLE. MAIN: 100% COTTON</p> : null}
        </div>
      </div>
      <Footer/>
    </>
  )
}