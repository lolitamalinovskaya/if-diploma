import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage } from "./HomePage";
import { Section2Category } from "./Section2Category";
import { Section3Modniky } from "./Section3Modniky"
import Section4Shop from "./Section4Shop";
import Footer from "./Footer";
import SectionFilters from "./SectionFilters";
import ItemPage from "./ItemPage";
import SignIN from "./SignIN";
import Bag from "./Bag";
import SectionSearch from "./SectionSearch";
import Favorite from "./Favorite";

const StateContext = React.createContext(null)

export const useAppState = () => {
  return React.useContext(StateContext)
}

function App() {
  const [state, setState] = useReducer((state, action) => {

    if (action.type === `UPDATE_DATE`) {

      return {...state, data: action.payload}
    }
    if (action.type === `UPDATE_FILTER`) {

      return {...state, filterType: action.payload}
    }
    if (action.type === 'SEARCH') {

      if (action.payload === undefined || action.payload.length === 0) {

        return state;
      }
      const data = state.data || []

      const filtered = data.filter((e) => {
        return e.name.toLowerCase().includes(action.payload.toLowerCase());
      })

      return {...state, searchResult: filtered}
    }
    if (action.type === 'LOGIN') {

      const login = action.login;
      const password = action.password;

      if (login === 'ADMIN' && password === 'ADMIN') {
        localStorage.setItem('user', login)

        return {...state, user: login, loginError: null}
      } else {

        return {...state, user: null, loginError: 'User not found'}
      }
    }
    if (action.type === 'LOGOUT') {
      localStorage.removeItem('user')

      return {...state, user: null}
    }
    if (action.type === "SLIDER_NEXT") {
      const sliderStart = state.sliderStart + 4;

      return {...state, sliderStart: Math.min(sliderStart, (state.data || []).length - 4)}

    }
    if (action.type === "SLIDER_PREV") {
      const sliderStart = state.sliderStart - 4;
      return {...state, sliderStart: Math.max(0, sliderStart)}
    }

    if (action.type === "ADD_TO_CART") {
      const id = action.payload;
      let cart = state.cart === null ? [] : state.cart;

      if (cart.includes(id)) {

        return {...state};
      }
      cart.push(id);
      localStorage.setItem('cart', JSON.stringify(cart));

      return {...state, cart: cart};
    }
    if (action.type === "REMOVE_FROM_CART") {
      const id = action.payload;
      let cart = state.cart === null ? [] : state.cart;

      if (!cart.includes(id)) {

        return {...state};
      }
      cart = [...cart].filter((e) => e !== id);
      localStorage.setItem('cart', JSON.stringify(cart));

      return {...state, cart: cart};
    }

    if (action.type === "CLEAR_CARD") {
      localStorage.setItem('cart', JSON.stringify([]));

      return {...state, cart: []};
    }

    if (action.type === "ADD_TO_FAVORITE") {
      const id = action.payload;
      let favorite = state.favorite === null ? [] : state.favorite;
      if (favorite.includes(id)) {

        return {...state};
      }
      favorite.push(id);
      localStorage.setItem('favorite', JSON.stringify(favorite));

      return {...state, favorite: favorite};
    }
    if (action.type === "REMOVE_FROM_FAVORITE") {
      const id = action.payload;
      let favorite = state.favorite === null ? [] : state.favorite;

      if (!favorite.includes(id)) {

        return {...state};
      }
      favorite = [...favorite].filter((e) => e !== id);

      localStorage.setItem('favorite', JSON.stringify(favorite));

      return {...state, favorite: favorite};
    }


    return state;
  }, {filterType: undefined}, () => {
    const width = window.innerWidth;

    return {
      user: localStorage.getItem('user'),
      filterType: 'Dresses',
      sliderStart: 0,
      sliderSize: width > 998 ? 4 : 2,
      cart: JSON.parse(localStorage.getItem('cart')),
      favorite: JSON.parse(localStorage.getItem('favorite')),
    }
  });

  useEffect(() => {
    fetch('https://shop.malinovskaya.lol/api/catalog')
      .then((x) => x.json())
      .then((x) => setState({type: `UPDATE_DATE`, payload: x}))
      .catch(() => setState({type: `UPDATE_DATE`, payload: []}));
  }, [])


  return (
    <>
      <Router>
        <Switch>
          <StateContext.Provider value={{state, updateState: setState}}>
            <Route exact path={'/'}>
              <HomePage />
              {state.searchResult && <SectionSearch />}
              <Section2Category />
              <SectionFilters />
              <Section3Modniky />
              <Section4Shop/>
              <Footer/>
            </Route>
            <Route exact path={'/signIn'}><SignIN /></Route>
            <Route path={'/bag'}> <Bag /> </Route>
            <Route path={'/favorite'}> <Favorite /> </Route>
            <Route path={'/product/:id'}> <ItemPage /> </Route>
          </StateContext.Provider>
        </Switch>
    </Router>
    </>
  );
}

export default App;
