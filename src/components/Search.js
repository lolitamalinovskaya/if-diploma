import React from "react";
import '../styles/components/Search.css';
import CloseIcon from "../svg/close-icon.svg";
import {useState} from 'react';


export default function Search({state, updateState, setShowSearch}) {
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
  const onClick = () => setShowSearch(false);
  return (
    <>
      <div className="search_container">
        <img className="search_close_icon" src={CloseIcon} onClick={onClick}/>
        <input onKeyDown={enterHandler} className="search_input" type="text" placeholder="ENTER SEARCH TERMS" value={query} onChange={changeHandler}/>

     {/*  <button className="search_button" onClick={clickHandler}>Search</button>*/}
      </div>
    </>
  )
}