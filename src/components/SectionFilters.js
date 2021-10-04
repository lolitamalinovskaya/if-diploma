import React from "react";
import '../styles/components/SectionFilters.css';
import Like from "../svg/like.svg";
import Insta1 from "../images/insta1.jpg";


export default function SectionFilters() {

  return (
    <>
      <div className="SectionFilters_container">
        <h2 className="sectionFilters_header">Dresses</h2>

        <div className="sectionFilters_Item_All_items_container">

          <div className="sectionFilters_Item">
            <div className="sectionFilters_Item_Card">
              <img src={Like} alt="Like" className="Like_svg"/>
              <img src={Insta1} alt="ImageOfCatalog" className="ImageOfCatalog"/>
            </div>
            <div className="Chain_Prices">
              <p className="Price">$5.90</p>
            </div>
          </div>

          <div className="sectionFilters_Item">
            <div className="sectionFilters_Item_Card">
              <img src={Like} alt="Like" className="Like_svg"/>
              <img src={Insta1} alt="ImageOfCatalog" className="ImageOfCatalog"/>
            </div>
            <div className="Chain_Prices">
              <p className="Filter_Price">$5.90</p>
            </div>
          </div>

          <div className="sectionFilters_Item">
            <div className="sectionFilters_Item_Card">
              <img src={Like} alt="Like" className="Like_svg"/>
              <img src={Insta1} alt="ImageOfCatalog" className="ImageOfCatalog"/>
            </div>
            <div className="Chain_Prices">
              <p className="Filter_Price">$5.90</p>
            </div>
          </div>

          <div className="sectionFilters_Item">
            <div className="sectionFilters_Item_Card">
              <img src={Like} alt="Like" className="Like_svg"/>
              <img src={Insta1} alt="ImageOfCatalog" className="ImageOfCatalog"/>
            </div>
            <div className="Chain_Prices">
              <p className="Filter_Price">$5.90</p>
            </div>
          </div>

          <div className="sectionFilters_Item">
            <div className="sectionFilters_Item_Card">
              <img src={Like} alt="Like" className="Like_svg"/>
              <img src={Insta1} alt="ImageOfCatalog" className="ImageOfCatalog"/>
            </div>
            <div className="Chain_Prices">
              <p className="Filter_Price">$5.90</p>
            </div>
          </div>

          <div className="sectionFilters_Item">
            <div className="sectionFilters_Item_Card">
              <img src={Like} alt="Like" className="Like_svg"/>
              <img src={Insta1} alt="ImageOfCatalog" className="ImageOfCatalog"/>
            </div>
            <div className="Chain_Prices">
              <p className="Filter_Price">$5.90</p>
            </div>
          </div>

          <div className="sectionFilters_Item">
            <div className="sectionFilters_Item_Card">
              <img src={Like} alt="Like" className="Like_svg"/>
              <img src={Insta1} alt="ImageOfCatalog" className="ImageOfCatalog"/>
            </div>
            <div className="Chain_Prices">
              <p className="Filter_Price">$5.90</p>
            </div>
          </div>

          <div className="sectionFilters_Item">
            <div className="sectionFilters_Item_Card">
              <img src={Like} alt="Like" className="Like_svg"/>
              <img src={Insta1} alt="ImageOfCatalog" className="ImageOfCatalog"/>
            </div>
            <div className="Chain_Prices">
              <p className="Filter_Price">$5.90</p>
            </div>
          </div>
        </div>

        <div className="Button_container">
          <button className="Button_show_more">Show more</button>
        </div>
      </div>
    </>
  )
}