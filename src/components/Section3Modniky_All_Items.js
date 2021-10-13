import React, { Component } from "react";
import '../styles/components/Section3Modniky.css';
import Section3Modniky_1_Item from "./Section3Modniky_1_Item";
import {Link} from "react-router-dom";

export default function Section3Modniky_All_Items({state, updateState}) {
  const sliderStart = state.sliderStart;

  const data = state.data || []
  const items = [...data].splice(sliderStart, 4).map((el) => {
    const sale = 17
    const priceBeforeSale = el.price.value / 100
    const price = priceBeforeSale - priceBeforeSale * sale / 100

    const image = el.images[0]
    const name = el.name;

    return <Link to={`/product/${el.id}`} style={{textDecoration: 'none', color: 'unset', margin: 'unset', width: '25%'}}><Section3Modniky_1_Item price={price} priceBeforeSale={priceBeforeSale} sale={17} imageURL={image} name={name}/></Link>
  })

  return (
    <>
      <div className="section3Modniky_container_ALL_items">
        {items}
      </div>
    </>
  )
}