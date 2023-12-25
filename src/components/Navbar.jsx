import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>WeChat</span>
      <div className='user'>
        <img src="" alt="" />
        <span>John</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar