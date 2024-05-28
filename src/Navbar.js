import React from 'react'
import logo from './Assets/HobbyCue Logo.svg'
import './CSS/Navbar.css'
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdBookmark } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { BiSolidCart } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import explorelogo from './Assets/Explore.svg'
import hobbylogo from './Assets/Hobbies.svg'
import ham from './Assets/menu_black_24dp 1.svg'

function Navbar() {
  return (
    <>
        <nav>
            <div className='section1'>
                <div className="logo">
                    <img src={logo} alt="" className="cuelogo" />
                </div>
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="Search here..."/>
                    <button type="submit" class="searchButton">
                        <AiOutlineSearch className='search-icon' />
                    </button>
                </div>
            </div>
            <div className='section2'>
                <div className='dropdown-txt'>
                    <div><img src={explorelogo} alt="" className="section2logo" /></div>
                    <div>Explore</div>
                    <div><RiArrowDropDownLine /></div>
                </div>
                <div className='dropdown-txt'>
                    <div><img src={hobbylogo} alt="" className="section2logo" /></div>
                    <div>Hobbies</div>
                    <div><RiArrowDropDownLine /></div>
                </div>
                <IoMdBookmark className='nav-icon'/>
                <FaBell className='nav-icon'/>
                <BiSolidCart className='nav-icon'/>
                
                <div>
                    <button className='signinbtn'>Sign in</button>
                </div>
            </div>
            <div className="section3">
                <AiOutlineSearch className='search-icon' />
                <FaBell className='nav-icon'/>
                <img src={ham} alt="" className='ham' />
            </div>
        </nav>
    </>
  )
}

export default Navbar
