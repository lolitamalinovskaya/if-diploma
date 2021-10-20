import React from "react";
import '../styles/components/Search.css';
import SearchIcon from "../svg/search-icon.svg";
import {useState} from 'react';


export default function Search({state, updateState}) {
  const [query, setQuery] = useState('');

  const changeHandler = (e) => setQuery(e.target.value)
  const clickHandler = () => {
    updateState({type: 'SEARCH', payload: query});
  }
  const enterHandler = (e) => {
    if(e.keyCode === 13) {
      clickHandler();
    }
  }
  return (
    <>
      <div className="search_container"><input onKeyDown={enterHandler} className="search_input" type="text" placeholder="Search here" value={query} onChange={changeHandler}/>
       <button className="search_button" onClick={clickHandler}>Search</button>
      </div>
    </>
  )
}