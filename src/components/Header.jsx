import React from 'react'
import AttentionBtn from './AttentionBtn'
import logo from './images/logo.svg'
import Screens from './images/screen-mockups.svg'

import './styles/header.css'


const Header = () => {
  return (
    <div className='header z-depth-1'>
        <div className='navbar'>
            <img className='logo' src={logo} alt="logo" />
            <button className="try-free z-depth-5">Try it Free</button>
        </div>

        <div className="header-body">
            <div className="text">
                <h1>Build The Community Your Fans Will Love</h1>
                <p>Huddle re-imagines the way we build communities. Tou have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                <AttentionBtn />
            </div>
            <div className="img">
                <img className='screens' src={Screens} alt="" />
            </div> 
        </div>
    </div>
  )
}

export default Header