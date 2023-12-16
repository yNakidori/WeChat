import React from 'react'
import Camera from '../img/camera-outlined-svgrepo-com.svg'
import Add from '../img/add-circle-svgrepo-com.svg'
import More from '../img/more-vertical-square-svgrepo-com.svg'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Camera} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat