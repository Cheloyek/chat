import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

const WebSock = () => {
    const [connected, setConnected] = useState(false)
    const [userName, setUserName] = useState('')
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')
    const socket = useRef()

    const connect = () => {
        socket.current = new WebSocket('ws://localhost:3000')

        socket.current.onopen = () => {
            setConnected(true)
            const message = {
                event: 'connection',
                userName,
                id: Date.now()
            } 
            //отправка сообщения
            socket.current.send(JSON.stringify(message))
            console.log('Подключение установлено')
        }
        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
            setMessages(prev => [message, ...prev])
            console.log('send message')

        }
        socket.current.onclose = () => {
            console.log('close')

        }
        socket.current.onerror = () => {

        }
    }

    useEffect(() => {

    }, [])

    const sendMessage = async () => {
        const message = {
            userName,
            message: value,
            id: Date.now(),
            event: 'message'
        }
        socket.current.send(JSON.stringify(message))
        setValue('')
    }

    if (!connected) {
        return (
            <div className="center">
                <div className="form">
                    <input type="text"
                           placeholder={"Введите Ваше имя"}
                           value={userName}
                           onChange={e => setUserName(e.target.value)}/>
                    <button onClick={connect}>Войти</button>
                </div>
            </div>
        );
    }
    return (
        <div className="center">
            <div>
                <div className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
                    <button onClick={sendMessage}>Отправить</button>
                </div>
                <div className="messages">
                    {messages.map(message => {
                        return <div>
                            <div key={message.id}
                                 style={{
                                     display: "flex",
                                     border: "1px solid blue",
                                     padding: "10px",
                                     height: "30px",
                                     width: "700px",
                                     alignItems: "center",
                                     overflowY: "scroll"
                                 }}>
                                {message.event === 'connection'
                                ? <div>Пользователь {message.userName} подключился</div>
                                : <div><b>{message.userName}:</b><span> {message.message}</span></div>
                                }

                                <hr/>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            {/*<ul id="messages"></ul>*/}
            {/*<form id="form" action="">*/}
            {/*    <input id="input" autoComplete="off"/>*/}
            {/*    <button>Send</button>*/}
            {/*</form>*/}
        </div>
    )

};

export default WebSock;
