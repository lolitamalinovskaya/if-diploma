import React from "react";
import '../styles/components/Section3Modniky.css';
import '../styles/components/SectionFilters.css';
import Like from '../svg/like.svg';
import LikeRed from '../svg/likeRed.svg';
import WishlistIconWhite from "../svg/likeAdded.svg";
import {Link} from "react-router-dom";


export default function Section3Modniky_1_Item({imageURL, price, priceBeforeSale, sale, name, id, state, updateState}) {
  const isInBag = (state.cart || []).includes(id);
  const onClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    updateState({type: isInBag ? "REMOVE_FROM_CART" : "ADD_TO_CART", payload: id});
  }

  const isFavorite = (state.favorite || []).includes(id);
  const onClickFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    updateState({type: isFavorite ? "REMOVE_FROM_FAVORITE":"ADD_TO_FAVORITE", payload: id});
  };


  return (
    <div className="section3Modniky_Item">
      <Link to={`/product/${id}`} style={{textDecoration: 'none', color: 'unset', margin: 'unset'}}>
      <div className="section3Modniky_Item_Card">
        <img src={isFavorite ? WishlistIconWhite : Like} alt="Like" className="Like_svg" onClick={onClickFavorite}/>
        <img src={imageURL} alt="ImageOfCatalog" className="ImageOfCatalog"/>
        <button className="ImageOfCatalog_btn" onClick={onClick}>{ isInBag ? "ADDED" : "ADD TO BAG"}</button>
        {sale > 0 ? <div className="Sale">{sale}%</div> : null}
      </div>
      <div className="Items_name">{name}</div>
      <div className="Chain_Prices">
        {priceBeforeSale ? <p className="PriceBeforeSale">{Number(priceBeforeSale).toFixed(2)} €</p> : null}
        <p className={priceBeforeSale ? "Price" : "Filter_Price"}>{Number(price).toFixed(2)} €</p>
      </div>
      </Link>
    </div>
  )
}
