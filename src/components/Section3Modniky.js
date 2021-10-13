import React from "react";
import '../styles/components/Section3Modniky.css';
import Arrow from '../svg/more.svg'
import Section3Modniky_All_Items from "./Section3Modniky_All_Items";



export const Section3Modniky = ({state, updateState}) => {

  const clickLeft = () => {updateState({type: 'SLIDER_PREV'})};
  const clickRight = () => {updateState({type: 'SLIDER_NEXT'})};
  return (
    <>
      <div className="section3Modniky_container">
        <h2 className="section_header">#MODNIKKY_Sale</h2>
        <div className="spinner_container">
          <div id="spinner_all" className="arrow_position_right" onClick={clickRight}>
            <img src={Arrow} alt="arrow" className="arrow_right" />
          </div>
          <div id="spinner_all" className="arrow_position_left" onClick={clickLeft}>
            <img src={Arrow} alt="arrow" className="arrow_left" />
          </div>
        </div>
        <Section3Modniky_All_Items state={state} updateState={updateState} />
      </div>
    </>
  )}