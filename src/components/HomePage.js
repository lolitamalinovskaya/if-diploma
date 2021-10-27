import React from "react";
import '../styles/components/HomePage.css';
import Logo from '../svg/brand-logo.svg'
import SearchIcon from '../svg/search-icon.svg';
import WishListIcon from '../svg/wishlist-icon.svg';
import Hamburger from '../svg/hamburger-menu-icon.svg';
import ShoppingCart from '../svg/shopping-cart-icon.svg'
import Search from "./Search";
import {Link, Route, useParams} from "react-router-dom";
import {useState} from "react";
import {HeaderBag} from "./HeaderBag";
import {HeaderWishList} from "./HeaderWishlist";


export const HomePage = ({state, updateState}) => {
  const [showSearch, setShowSearch] = useState(false);
  const onClick = () => setShowSearch(!showSearch);

  const SignOutHandler = () => updateState({type: 'LOGOUT'})

  return (
    <>
      <div className="container_for_background">
        <header>
          <div className="header_container">
            <div className="header_container_NEW_ARRIVALS">
              <div className="header_element_p1">
                <p>NEW ARRIVALS</p>
                <img src={Hamburger} alt="hamburger" className="Hamburger"/>
              </div>
              <div className="header_element_p2">
                <p>SHOP</p>
              </div>
              <div className="header_element_p3">
                <p>COLLECTIONS</p>
              </div>
            </div>
            <div className="header_element_logo">
              <img src={Logo} alt="logo" className="Logo"/>
            </div>
            <div className="header_container_right_side">
              <div onClick={onClick} className="header_search_container">
                <img src={SearchIcon} alt="search" className="SearchIcon"/>
                <p className="header_search_p">SEARCH</p>
              </div>
              {state.user === null ?
                <Link to={`/signIn`} style={{textDecoration: 'none', color: 'unset', margin: 'unset'}}>
                  <div className="header_element_sign">
                    <p>SIGN IN</p>
                  </div>
                </Link> : <div className="header_element_sign_out" onClick={SignOutHandler}>
                  <p>SIGN OUT</p>
                </div>}
              <Link to={'/bag'} style={{textDecoration: 'none', color: 'white'}}><HeaderBag image={ShoppingCart}
                                                                                            state={state}/></Link>
              <Link to={'/favorite'}><HeaderWishList image={WishListIcon}/></Link>
            </div>
          </div>
        </header>
        {showSearch ? <Search state={state} updateState={updateState} setShowSearch={setShowSearch}/> : null}
        <main className="main_container">
          <div className="main_container_NEW_COLLECTION">
            <h1>NEW COLLECTION</h1>
            <p className="main_element_text">Our easiest chuck-on-and-go staples come with a serious style
              heritage <br/>that’s liberating, sexy, comfy
              and supremely cool.</p>
            <button className="main_element_button">SHOP NEW ARRIVALS</button>
          </div>
        </main>
      </div>
    </>
  )
}