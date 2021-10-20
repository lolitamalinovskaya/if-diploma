import React from "react";
import '../styles/components/Section4Shop.css';
import NextIcon from '../svg/next-icon.svg'
import Mask from '../images/mask.png';
import Mask1 from '../images/mask (1).png';
import Mask2 from '../images/mask (2).png';
import Mask3 from '../images/mask (3).png';
import Mask4 from '../images/mask (4).png';


export default function Section4Shop() {

  return (
    <>
      <div className="section4Shop_container">
        <div className="section4Shop_container_flex_for_block">
        <div className="section4Shop_1block_content">
          <div className="section4Shop_1block_name">
            <p className="section4Shop_1block_name_SHOP_INSTAGRAM">SHOP INSTAGRAM</p>
            <p className="section4Shop_1block_name_SHOP">SHOP</p>
            <img src={NextIcon} alt="NextIcon" className="NextIcon_svg"/>
          </div>
            <div className="section4Shop_1block_container_for_image">
              <img src={Mask} alt="Mask" className="Mask_svg"/>
              <p className="section4Shop_1block_name_MODNIKY">#MODNIKKY</p>
            </div>
        </div>

        <div className="section4Shop_2block_content">
          <div className="section4Shop_2block_photo1_2">
            <div className="section4Shop_2block_container_for_image">
            <img src={Mask1} alt="Mask1" className="Mask1_svg"/>
            </div>
            <div className="section4Shop_2block_container_for_image">
            <img src={Mask2} alt="Mask2" className="Mask2_svg"/>
            </div>
          </div>
          <div className="section4Shop_2block_photo3_4">
            <div className="section4Shop_2block_container_for_image">
          <img src={Mask3} alt="Mask3" className="Mask3_svg"/>
            </div>
            <div className="section4Shop_2block_container_for_image">
          <img src={Mask4} alt="Mask4" className="Mask4_svg"/>
              <p className="section4Shop_1block_name_MODNIKY_response">#MODNIKKY</p>
            </div>
          </div>
        </div>
        </div>
      </div>
        </>
        )
        }