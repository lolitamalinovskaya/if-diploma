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
      if(action.payload === undefined || action.payload.length === 0){
        return state;
      }
      const data = state.data || []

      const filtered = data.filter((e) => {
        return e.name.toLowerCase().includes(action.payload.toLowerCase());
      })

      return {...state, searchResult: filtered}
    }
    if(action.type === 'LOGIN') {
      const login = action.login;
      const password = action.password;
    }

    return state;
  }, {filterType: `Dresses`}, () => {
    return {filterType: `Dresses`}
  });

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
          <SectionSearch state={state} updateState={setState} />
         {/* <Sign/>*/}
          <Section2Category state={state} updateState={setState}/>
          <SectionFilters state={state} updateState={setState}/>
          <Bag/>
          <Section3Modniky state={state} updateState={setState}/>
          <Section4Shop/>
          <Footer/>
        </Route>
        <Route exact path={'/signIn'}><SignIN/></Route>
      </Switch>
    </Router>
      </>
  );
}

export default App;
