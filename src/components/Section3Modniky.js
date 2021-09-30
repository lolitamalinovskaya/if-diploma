import React from "react";
import '../styles/components/Section3Modniky.css';
import Arrow from '../svg/more.svg'
import Section3Modniky_All_Items from "./Section3Modniky_All_Items";



export const Section3Modniky = (props) => {
  return (
    <>
      <div className="section3Modniky_container">
        <h2 className="section_header">#MODNIKKY_Sale</h2>
        <div className="spinner_container">
          <div id="spinner_all" className="arrow_position_right">
            <img src={Arrow} alt="arrow" className="arrow_right" />
          </div>
        </div>
        <Section3Modniky_All_Items  />
      </div>
    </>
  )}