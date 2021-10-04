import React from "react";
import '../styles/components/Section3Modniky.css';
import Like from '../svg/like.svg'
import {useEffect, useState} from "react/cjs/react.production.min";
import Insta1 from '../images/insta1.jpg';
import Insta2 from '../images/insta2.jpg';
import Insta3 from '../images/insta3.jpg';
import Insta4 from '../images/insta4.jpg';


export default function Section3Modniky_All_Items () {
/*const [state, setState] = useState([]);

  useEffect(() => {
      fetch('https://modnikky-api.herokuapp.com/api/catalog')
        .then((x) => x.json())
        .then((x) => setState({ data: x }))
        .catch(() => setState({ data: [] }));

  }, [])*/

  return (
    <>
      <div className="section3Modniky_container_ALL_items">
        <div className="section3Modniky_Item">
          <div className="section3Modniky_Item_Card">
            <img src={Like} alt="Like" className="Like_svg"/>
            <img src={Insta1} alt="ImageOfCatalog" className="ImageOfCatalog"/>
            <button className="ImageOfCatalog_btn">ADD TO BAG</button>
            <div className="Sale">-55%</div>
          </div>
          <div className="Chain_Prices">
          <p className="PriceBeforeSale">$13.00</p>
          <p className="Price">$5.90</p>
          </div>
        </div>

        <div className="section3Modniky_Item">
          <div className="section3Modniky_Item_Card">
            <img src={Like} alt="Like" className="Like_svg"/>
            <img src={Insta2} alt="ImageOfCatalog" className="ImageOfCatalog"/>
            <button className="ImageOfCatalog_btn">ADD TO BAG</button>
            <div className="Sale">-39%</div>
          </div>
          <div className="Chain_Prices">
            <p className="PriceBeforeSale">$8.00</p>
            <p className="Price">$4.90</p>
          </div>
        </div>

        <div className="section3Modniky_Item">
          <div className="section3Modniky_Item_Card">
            <img src={Like} alt="Like" className="Like_svg"/>
            <img src={Insta3} alt="ImageOfCatalog" className="ImageOfCatalog"/>
            <button className="ImageOfCatalog_btn">ADD TO BAG</button>
            <div className="Sale">-58%</div>
          </div>
          <div className="Chain_Prices">
            <p className="PriceBeforeSale">$14.00</p>
            <p className="Price">$5.90</p>
          </div>
        </div>

        <div className="section3Modniky_Item">
          <div className="section3Modniky_Item_Card">
            <img src={Like} alt="Like" className="Like_svg"/>
            <img src={Insta4} alt="ImageOfCatalog" className="ImageOfCatalog"/>
            <button className="ImageOfCatalog_btn">ADD TO BAG</button>
            <div className="Sale">-34%</div>
          </div>
          <div className="Chain_Prices">
            <p className="PriceBeforeSale">$9.00</p>
            <p className="Price">$5.90</p>
          </div>
        </div>
      </div>
    </>
  )
}