import React from "react";
import '../styles/components/Sign.css';
import CloseIcon from "../svg/close-icon.svg";
import {useState} from "react";
import {Redirect} from "react-router-dom";
import {useAppState} from "./App";


export default function SignIN() {
  const {state, updateState} = useAppState();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [cancel, setCancel] = useState(false);

  const changeHandler  = (e) => setLogin(e.target.value);
  const changeHandlerPas  = (e) => setPassword(e.target.value);
  const clickHandler = () => {
    updateState({type: "LOGIN", login: login, password: password});
  }
  if(state.user !== null) {
     return <Redirect to={'/'}/>
  }
  const clickClose = () => setCancel(true);

  if(cancel){
    return  <Redirect to={'/'}/>
  }

  return (
    <>
      <div className="sign_container">
        <div className="sign_container_window_signIN">
          <div className="sign_window_content">

            <div className="sign_window_header_container">
              <h5 className="sign_window_header">SIGN IN</h5>
              <img src={CloseIcon} alt="CloseIcon" className="CloseIcon" onClick={clickClose}/>
            </div>
            {state.loginError ? <p className="sign_message">{state.loginError}</p> : null}
            <input onChange={changeHandler} value={login} className="sign_Input_First_Name" type="text" placeholder="Email"/>
            <input onChange={changeHandlerPas} value={password} className="sign_Input_First_Name" type="password" placeholder="Password"/>
            <div className="sign_button_container">
            <button onClick={clickHandler} className="sign_button">SIGN IN</button>
            </div>
          {/*  <p className="sign_have_account">Forgot your password?</p>*/}
          </div>
        </div>
      </div>

    </>
)
}
