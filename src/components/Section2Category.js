import React from "react";
import '../styles/components/Section2Category.css';
import Dress from '../svg/dress.svg'
import Tees from '../svg/tees.svg';
import Swimwear from '../svg/swimwear.svg';
import Denim from '../svg/denim.svg';
import Tops from '../svg/tops.svg';
import Beauty from '../svg/beauty.svg';
import {useAppState} from "./App";

export const FilterButtonItem = ({className, image, name, updateState, currentType}) => {

  const clickHandler = () => {
    updateState({type: `UPDATE_FILTER`, payload: name})
  }
  return (
    <div className={currentType === name ? "section2Category_container_items section2Category_active" : "section2Category_container_items section2Category_no_active"} onClick={clickHandler}>
      <img src={image} alt={name} className={className}/>
      <p className="dress_name">{name}</p>
    </div>
  )
}

export const Section2Category = () => {
  const {state, updateState} = useAppState();

  return (
    <>
      <div className="section2Category_container">
        <h2 className="section_header">Shop by the Category</h2>

        <div className="section2Category_container_ALL_items">
          <FilterButtonItem className={`dress_svg`} image={Dress} name={`Dresses`} updateState={updateState} currentType={state.filterType}/>

          <FilterButtonItem className={`tees_svg`} image={Tees} name={`Tees`} updateState={updateState} currentType={state.filterType}/>

          <FilterButtonItem className={`Swimwear_svg`} image={Swimwear} name={`Swimwear`} updateState={updateState} currentType={state.filterType}/>

          <FilterButtonItem className={`Denim_svg`} image={Denim} name={`Denim`} updateState={updateState} currentType={state.filterType}/>

          <FilterButtonItem className={`Tops_svg`} image={Tops} name={`Tops`} updateState={updateState} currentType={state.filterType}/>

          <FilterButtonItem className={`Beauty_svg`} image={Beauty} name={`Beauty`} updateState={updateState} currentType={state.filterType}/>
        </div>
      </div>
    </>
  )
}
