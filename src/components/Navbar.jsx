import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>WeChat</span>
      <div className='user'>
        <img src="" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar