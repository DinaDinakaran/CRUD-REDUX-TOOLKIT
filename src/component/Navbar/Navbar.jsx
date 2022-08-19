import React from 'react'
import "./navbar.css"
import profileimg from "./natasha.png"
import Searchbar from './searchbar/Searchbar'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarwarrap">
            <div className="rightcontend">
              <div className="navbarTitle">
                School Manegment
              </div>
            </div>
            <div className="leftcontend">
              <Searchbar/>
              <div className="profile">
                <img src={profileimg} alt="name" className="profileImg" />
                <span className="profileName">Natasha</span>
              </div>
            </div>
        </div>
    </div>
  )
}
