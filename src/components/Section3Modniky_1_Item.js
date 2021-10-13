import React from "react";
import '../styles/components/Section3Modniky.css';
import '../styles/components/SectionFilters.css';
import Like from '../svg/like.svg'


export default function Section3Modniky_1_Item({imageURL, price, priceBeforeSale, sale, name}) {

  return (
    <>
    <div className="section3Modniky_Item">
      <div className="section3Modniky_Item_Card">
        <img src={Like} alt="Like" className="Like_svg"/>
        <img src={imageURL} alt="ImageOfCatalog" className="ImageOfCatalog"/>
        <button className="ImageOfCatalog_btn">ADD TO BAG</button>
        {sale > 0 ? <div className="Sale">{sale}%</div> : null}
      </div>
      <div className="Items_name">
        {name}
      </div>
      <div className="Chain_Prices">
        {priceBeforeSale ? <p className="PriceBeforeSale">${Number(priceBeforeSale).toFixed(2)}</p> : null}
        <p className={priceBeforeSale ? "Price" : "Filter_Price"}>${Number(price).toFixed(2)}</p>
      </div>

    </div>
      </>
  )
}