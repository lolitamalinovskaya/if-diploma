import React from "react";
import '../styles/components/SectionFilters.css';
import Like from "../svg/like.svg";
import Insta1 from "../images/insta1.jpg";
import Section3Modniky_1_Item from "./Section3Modniky_1_Item";


export default function SectionFilters({state, updateState}) {
  const data = state.data || [];
  const items = [...data].filter((el) => el.type === state.filterType).splice(0, 8).map((el) => {

    const price = el.price.value / 100


    const image = el.images[0]
    return <Section3Modniky_1_Item price={price} imageURL={image}/>
  })
  return (
    <>
      <div className="SectionFilters_container">
        <h2 className="sectionFilters_header">{state.filterType}</h2>

        <div className="sectionFilters_Item_All_items_container">
          {items}
        </div>

        <div className="Button_container">
          <button className="Button_show_more">Show more</button>
        </div>
      </div>
    </>
  )
}