import React from 'react'
import img1 from './Assets/5820000 1.svg'
import img2 from './Assets/5820098 1.svg'
import './CSS/Lastsection.css'
import { IoIosArrowDropup } from "react-icons/io";

function Lastsection() {
  return (
    <>
        <div className="sec">
            <div className="sec-section1">
                <div>
                    <div className='sec-head'>Your  <span className="purple-txt">hobby</span> , Your <span className="blue-txt">Community...</span></div>
                    <div>
                        <button className='secbtn'>
                            Get started
                        </button>
                    </div>
                </div>
                
            </div>
            <div className='sec-section3'>
                <div>
                <div className='secico'><IoIosArrowDropup className='sec-icon'/></div>
                <div>Go to top (Ctrl+Home)</div>
                </div>
            </div>

            <div className="sec-section2">
                <img src={img2} alt="" className="sec-img1" />
                <img src={img1} alt="" className="sec-img" />
            </div>
        </div>
    </>
  )
}

export default Lastsection
