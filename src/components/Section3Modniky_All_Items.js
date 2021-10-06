import React from "react";
import '../styles/components/Section3Modniky.css';
import Like from '../svg/like.svg'
import {useEffect, useState} from "react";
import Insta1 from '../images/insta1.jpg';
import Insta2 from '../images/insta2.jpg';
import Insta3 from '../images/insta3.jpg';
import Insta4 from '../images/insta4.jpg';
import Section3Modniky_1_Item from "./Section3Modniky_1_Item";


export default function Section3Modniky_All_Items({state, updateState}) {

  const data = state.data || []
  const items = [...data].splice(0, 4).map((el) => {
    const sale = 17
    const priceBeforeSale = el.price.value / 100
    const price = priceBeforeSale - priceBeforeSale * sale / 100

    const image = el.images[0]
    return <Section3Modniky_1_Item price={price} priceBeforeSale={priceBeforeSale} sale={17} imageURL={image}/>
  })

  return (
    <>
      <div className="section3Modniky_container_ALL_items">
        {items}
      </div>
    </>
  )
}