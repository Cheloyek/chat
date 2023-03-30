import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'
import WebSock from "./WebSock";

function App() {
    useEffect(() => {
        // let socket = io()
    }, [])
  const [messages, setMessages] = useState([
      {message: "Good", id: "1", user: {id: "1", name: "userName1"} },
    {message: "Good", id: "2", user: {id: "2", name: "userName2"} }
  ])


  return (
    <div className="App">
        <WebSock/>
        {/*<div>*/}
        {/*<div>*/}
        {/*    {messages.map(m => {*/}
        {/*       return  <div>*/}
        {/*           <div style={{display: "flex", border: "1px solid blue", padding: "10px", height: "30px", width: "700px", alignItems: "center", overflowY: "scroll"}}><b>{m.user.name}:</b><span> {m.message}</span> <hr/></div>*/}
        {/*       </div>*/}
        {/*    })}*/}
        {/*</div>*/}
        {/*<ul id="messages"></ul>*/}
        {/*<form id="form" action="">*/}
        {/*    <input id="input" autoComplete="off"/>*/}
        {/*    <button>Send</button>*/}
        {/*</form>*/}
        {/*</div>*/}
    </div>
  );
}

export default App;
