import React from "react";
import '../styles/components/Section2Category.css';
import Dress from '../svg/dress.svg'
import Tees from '../svg/tees.svg';
import Swimwear from '../svg/swimwear.svg';
import Denim from '../svg/denim.svg';
import Tops from '../svg/tops.svg';
import Beauty from '../svg/beauty.svg';

export const FilterButtonItem = ({className, image, name, updateState}) => {

  const clickHandler = () => {
    updateState({type: `UPDATE_FILTER`, payload: name})
  }
  return (
    <div className="section2Category_container_items" onClick={clickHandler}>
      <img src={image} alt={name} className={className}/>
      <p className="dress_name">{name}</p>
    </div>
  )
}

export const Section2Category = ({state, updateState}) => {
  return (
    <>
      <div className="section2Category_container">
        <h2 className="section_header">Shop by the Category</h2>

        <div className="section2Category_container_ALL_items">

          <FilterButtonItem className={`dress_svg`} image={Dress} name={`Dresses`} updateState={updateState}/>


          <FilterButtonItem className={`tees_svg`} image={Tees} name={`Tees`} updateState={updateState}/>


          <FilterButtonItem className={`Swimwear_svg`} image={Swimwear} name={`Swimwear`} updateState={updateState}/>


          <FilterButtonItem className={`Denim_svg`} image={Denim} name={`Denim`} updateState={updateState}/>


          <FilterButtonItem className={`Tops_svg`} image={Tops} name={`Tops`} updateState={updateState}/>


          <FilterButtonItem className={`Beauty_svg`} image={Beauty} name={`Beauty`} updateState={updateState}/>

        </div>
      </div>


    </>
  )
}