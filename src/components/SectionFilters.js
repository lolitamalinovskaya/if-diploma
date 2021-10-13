import React from "react";
import {useState} from "react";
import '../styles/components/SectionFilters.css';
import Like from "../svg/like.svg";
import Insta1 from "../images/insta1.jpg";
import Section3Modniky_1_Item from "./Section3Modniky_1_Item";
import {Link} from "react-router-dom";


export default function SectionFilters({state, updateState}) {
  const [page, setPage] = useState(1);

  const clickHandler = () => setPage(page + 1);

  const data = state.data || [];

  const filtered = [...data].filter((el) => el.type === state.filterType);

  const items = filtered.splice(0, 8 * page).map((el) => {

    const price = el.price.value / 100

    const image = el.images[0]
    const name = el.name;
    return <Link to={`/product/${el.id}`} style={{textDecoration: 'none', color: 'unset', margin: 'unset', width: '25%'}}><Section3Modniky_1_Item price={price} imageURL={image} name={name}/></Link>
  })
  return (
    <>
      <div className="SectionFilters_container">
        <h2 className="sectionFilters_header">{state.filterType}</h2>

        <div className="sectionFilters_Item_All_items_container">
          {items.length > 0 ? items : <div className="SectionFilters_notFound_container"><p className="SectionFilters_notFound">No beauty products found</p></div>}
        </div>

        {filtered.length > 0 ? <div className="Button_container">
          <button onClick={clickHandler} className="Button_show_more">Show more</button>
        </div> : null}
      </div>
    </>
  )
}