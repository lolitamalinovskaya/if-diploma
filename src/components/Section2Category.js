import React from "react";
import '../styles/components/Section2Category.css';
import Dress from '../svg/dress.svg'
import Tees from '../svg/tees.svg';
import Swimwear from '../svg/swimwear.svg';
import Denim from '../svg/denim.svg';
import Tops from '../svg/tops.svg';
import Beauty from '../svg/beauty.svg';


export const Section2Category = () => {
  return (
    <>
      <div className="section2Category_container">
        <h2 className="section_header">Shop by the Category</h2>
        <div className="section2Category_container_ALL_items">
        <div className="section2Category_container_items">
          <img src={Dress} alt="dress" className="dress_svg"/>
          <p className="dress_name">Dresses</p>
        </div>
        <div className="section2Category_container_items">
          <img src={Tees} alt="tees" className="tees_svg"/>
          <p className="dress_name">Tees</p>
        </div>
        <div className="section2Category_container_items">
          <img src={Swimwear} alt="Swimwear" className="Swimwear_svg"/>
          <p className="dress_name">Swimwear</p>
        </div>
        <div className="section2Category_container_items">
          <img src={Denim} alt="Denim" className="Denim_svg"/>
          <p className="dress_name">Denim</p>
        </div>
        <div className="section2Category_container_items">
          <img src={Tops} alt="Tops" className="Tops_svg"/>
          <p className="dress_name">Tops</p>
        </div>
        <div className="section2Category_container_items">
          <img src={Beauty} alt="Beauty" className="Beauty_svg"/>
          <p className="dress_name">Beauty</p>
        </div>
        </div>


      </div>


    </>
  )}