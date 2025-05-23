import React, { Component } from "react";
import '../styles/components/Section3Modniky.css';
import Section3Modniky_1_Item from "./Section3Modniky_1_Item";
import {Link} from "react-router-dom";

export default function Section3Modniky_All_Items({state, updateState, response}) {


  const sliderStart = state.sliderStart;

  const data = state.data || []
  const items = [...data].splice(sliderStart, state.sliderSize).map((el) => {
    const sale = 17
    const priceBeforeSale = (el.price.value * sale / 100) + el.price.value
    const price = el.price.value

    const image = el.images[0]
    const name = el.name;

    return <Section3Modniky_1_Item key={el.id} price={price} priceBeforeSale={priceBeforeSale} sale={17} imageURL={image} name={name} state={state} updateState={updateState} id={el.id}/>
  })

  return (
    <>
      <div className="section3Modniky_container_ALL_items">
        {items}
      </div>
    </>
  )
}
