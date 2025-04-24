import React from "react";

import Footer from "./Footer";
import HeaderWhite from "./HeaderWhite";
import MasterCard from "../svg/maestro-logo.svg";
import Visa from "../svg/visa-logo.svg";
import BagItem from "./BagItem";
import '../styles/components/Bag.css';
import {useAppState} from "./App";

export default function Favorite() {
    const {state, updateState} = useAppState();
    const favorite = state.favorite === null ? [] : state.favorite;
    const values = (state.data || []).filter((e) => favorite.includes(e.id));
    const items = values.map((e) => <BagItem isFavorite={true} state={state} updateState={updateState} key={e.id}
                                             item={e}/>);

    return (
        <>
            <HeaderWhite state={state}/>
            <div className="bag_wrapper">
                <div className="bag_header">
                    <h5 className="bag_title">FAVORITES</h5>
                    <p className="bag_subtitle">{values.length} items</p>
                </div>
                {items}
                <div className="bag_inner">
                    <div className="favorites_bag_visa">
                        <img src={MasterCard} className="bag_mastercard_svg"/>
                        <img src={Visa} className="bag_visa_svg"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
