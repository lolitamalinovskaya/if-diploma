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
import {useState, useEffect, useReducer} from "react";


function App() {
    const [state, setState] = useReducer((state, action) => {
        if (action.type === `UPDATE_DATE`) {

            return {...state, data: action.payload}
        }
        if (action.type === `UPDATE_FILTER`) {

            return {...state, filterType : action.payload}
        }

        return state;
    }, {filterType: `Dresses`}, () => {return{filterType: `Dresses`}});

    useEffect(() => {
        fetch('https://modnikky-api.herokuapp.com/api/catalog')
          .then((x) => x.json())
          .then((x) => setState({ type: `UPDATE_DATE`, payload: x }))
          .catch(() => setState({ type: `UPDATE_DATE`, payload: [] }));

    }, [])

  return (
    <>
      <HomePage />
      <Sign />
      <Section2Category state={state} updateState={setState} />
      <SectionFilters state={state} updateState={setState} />{/*это должно быть пока  */}
      <PageItems />
      <Section3Modniky state={state} updateState={setState} />
      <Section4Shop />
      <Footer />
      </>
  );
}

export default App;
