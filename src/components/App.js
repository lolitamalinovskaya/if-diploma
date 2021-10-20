import logo from '../logo.svg';
import '../App.css';
import {HomePage} from "./HomePage";
import {Section2Category} from "./Section2Category";
import {Section3Modniky} from "./Section3Modniky"
import Section4Shop from "./Section4Shop";
import Footer from "./Footer";
import SectionFilters from "./SectionFilters";
import PageItems from "./PageItems";
import Sign from "./Sign";
import React, {useState, useEffect, useReducer, useRef} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignIN from "./SignIN";
import Bag from "./Bag";
import SectionSearch from "./SectionSearch";


function App() {
  const [state, setState] = useReducer((state, action) => {
    if (action.type === `UPDATE_DATE`) {

      return {...state, data: action.payload}
    }
    if (action.type === `UPDATE_FILTER`) {

      return {...state, filterType: action.payload}
    }
    if (action.type === 'SEARCH') {
      console.log(action.payload);
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
      if(login === 'ADMIN' && password === 'ADMIN'){
        localStorage.setItem('user', login)
        return {...state, user: login, loginError: null}
      } else {
        return {...state, user: null, loginError: 'User not found'}
      }
    }
    if(action.type === 'LOGOUT') {
      localStorage.removeItem('user')
      return {...state, user: null}
    }
    if(action.type === "SLIDER_NEXT") {
      const sliderStart = state.sliderStart + 4;

      return {...state, sliderStart: Math.min(sliderStart, (state.data || []).length - 4)}

    }
    if(action.type === "SLIDER_PREV") {
      const sliderStart = state.sliderStart - 4;
      return {...state, sliderStart: Math.max(0, sliderStart)}
    }
    /*if(action.type === "RESIZE") {
      return {...state, sliderSize: action.payload > 998 ? 4 : 2}
    }*/
    return state;
  }, {filterType: undefined}, () => {
    const width = window.innerWidth;
    return {user: localStorage.getItem('user'),filterType: undefined, sliderStart: 0, sliderSize: width > 998 ? 4 : 2}
  });

//window.addEventListener('resize', () => setState({type: 'RESIZE', payload: window.innerWidth}))

  useEffect(() => {
    fetch('https://modnikky-api.herokuapp.com/api/catalog')
      .then((x) => x.json())
      .then((x) => setState({type: `UPDATE_DATE`, payload: x}))
      .catch(() => setState({type: `UPDATE_DATE`, payload: []}));

  }, [])


  return (
    <>
      <Router>
        <Switch>
          <Route path={'/product/:id'}> <PageItems state={state} updateState={setState}/> </Route>
          <Route exact path={'/'}>
            <HomePage state={state} updateState={setState}/>
          {/*  { state.searchResult ? <SectionSearch state={state} updateState={setState}/> : null}*/}


           <Section2Category state={state} updateState={setState}/>

             <SectionFilters state={state} updateState={setState}/>
            <Bag/>

            <Section3Modniky state={state} updateState={setState}/>

               <Section4Shop/>
              <Footer/>
          </Route>
          <Route exact path={'/signIn'}><SignIN state={state} updateState={setState}/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
