/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"


export default function ChatArea({socketRef, teamID}){
  const [inputMessage, setInputMessage] = useState('')
  const [sendMessage, setSendMessage] = useState([])
  function onChange(e){
    setInputMessage(e.target.value)
  }
  function onSend(){
    setSendMessage([...sendMessage, inputMessage])
    sendMessage.push(inputMessage)
    console.log(sendMessage, inputMessage)
    const sen = sendMessage
    socketRef.current.emit('chat', {teamID, inputMessage});
    socketRef.current.on('message',(message) => console.log('hi',message))
    setInputMessage('')
  }
  
  return( 
      <div className="chat-area">
          <div className="chat">{sendMessage.map((message, index) => <h6 key={index}>{message}</h6>)}</div>
          <div className="chat-input">
              <input type="text" value={inputMessage} onChange={onChange}/>
              <button id="send-chat" onClick={onSend}>&#11166;</button>
          </div>
      </div>
  )
}