import React from "react";
import '../styles/components/HomePage.css';
import Logo from '../svg/brand-logo.svg'
import SearchIcon from '../svg/search-icon.svg';
import WishListIcon from '../svg/wishlist-icon.svg';
import Search from "./Search";
import {Link, Route, useParams} from "react-router-dom";
import {useState} from "react";


export const HomePage = ({state, updateState}) => {
  const [showSearch, setShowSearch] = useState(false);
  const onClick = () => setShowSearch(!showSearch);

  return (
    <>
      <div className="container_for_background">
      <header>
        <div className="header_container">
          <div className="header_container_NEW_ARRIVALS">
            <div className="header_element">
              <p>NEW ARRIVALS</p>
            </div>
            <div className="header_element">
              <p>SHOP</p>
            </div>
            <div className="header_element">
              <p>COLLECTIONS</p>
            </div>
          </div>
          <div className="header_element">
            <img src={Logo} alt="logo" className="Logo"/>
          </div>
          <div className="header_container_NEW_ARRIVALS">
            <div onClick={onClick} className="header_element search">
              <img src={SearchIcon} alt="search" className="SearchIcon"/>
              <p>SEARCH</p>
            </div>
            <Link to={`/signIn`} style={{textDecoration: 'none', color: 'unset', margin: 'unset'}}><div className="header_element">
              <p>SIGN IN</p>
            </div></Link>
            <div className="header_element">
              <p>BAG (2)</p>
            </div>
            <div className="header_element">
              <img src={WishListIcon} alt="wishList" className="WishListIcon"/>
            </div>
          </div>
        </div>
      </header>
        {showSearch ? <Search state={state} updateState={updateState}/> : null}
      <main className="main_container">
        <div className="main_container_NEW_COLLECTION">
          <h1>NEW COLLECTION</h1>
          <p className="main_element_text">Our easiest chuck-on-and-go staples come with a serious style heritage <br/>that’s liberating, sexy, comfy
            and supremely cool.</p>
          <button className="main_element_button">SHOP NEW ARRIVALS</button>
        </div>
      </main>
        </div>
    </>
  )
}