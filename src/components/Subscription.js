import React, {useState} from "react";
import '../styles/components/Footer.css';


export default function Subscription() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(undefined);
  const [message, setMessage] = useState(undefined);

  const onChange = (e) => setEmail(e.target.value);

  const clickHandler = () => {
    if (email === undefined || email.length === 0) {
      setError('Enter your email first');
      return;
    }
      const atIndex = email.indexOf('@');
    if(atIndex > 0){
      const dotIndex = email.indexOf('.', atIndex);
      if (dotIndex > atIndex+1){
        fetch('https://modnikky-api.herokuapp.com/api/subscription', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({'email': email})
        }).then((data) => data.json())
          .then((data)=>setMessage(data.message))
          .catch((e)=>setMessage('failed to subscribe'))
        return;
      }
    }
    setError('Please enter a valid email');
  }


  return (
    <>
        {message ?<div className="footer_ContainerForInput_message message_color"> <p>{message}</p> </div>:
          <>
            {error ? <div className="footer_ContainerForInput_message"> <p>{error}</p> </div>: null}
            <div className="footer_ContainerForInput">
            <input className="footer_Input" type="text" placeholder="Your email address" onChange={onChange}
                value={email}/>
          <button className="footer_button" onClick={clickHandler}>JOIN</button>
            </div>
          </>}
    </>
  )
}