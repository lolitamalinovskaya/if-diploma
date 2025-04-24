import React from "react";
import {useState} from "react";
import '../styles/components/SectionFilters.css';
import Like from "../svg/like.svg";
import Insta1 from "../images/insta1.jpg";
import Section3Modniky_1_Item from "./Section3Modniky_1_Item";
import {Link} from "react-router-dom";
import {useAppState} from "./App";


export default function SectionFilters() {
  const {state, updateState} = useAppState();

  const [page, setPage] = useState(1);

  const clickHandler = () => setPage(page + 1);

  const data = state.data || [];

  const filtered = [...data].filter((el) => el.type === state.filterType);

  const items = filtered.splice(0, 12 * page).map((el) => {

    const price = el.price.value

    const image = el.images[0]
    const name = el.name;
    return <Section3Modniky_1_Item key={el.id} price={price} imageURL={image} name={name} state={state} updateState={updateState} id={el.id}/>
  })
  return (
    <>
      { data.length > 0 &&
        <div className="SectionFilters_container">
        <h2 className="sectionFilters_header">{state.filterType}</h2>

        <div className="sectionFilters_Item_All_items_container">
          {items.length > 0 ? items : (state.filterType === undefined ? null :
              <div className="SectionFilters_notFound_container"><p className="SectionFilters_notFound">No beauty
                products found</p></div>)}
        </div>

        {filtered.length > 0 ? <div className="Button_container">
          <button onClick={clickHandler} className="Button_show_more">Show more</button>
        </div> : null}
      </div>
      }
    </>
  )
}
