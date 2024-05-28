import React from 'react'
import './CSS/Testi.css'
import quote from './Assets/quote.svg'
import audioimg from './Assets/Audio Track.svg'
import info from './Assets/Group 108.svg'

function Testimonialsection() {
  return (
    <>
        <div className="contain">
            <div className='con'>
                <div className='headi'>
                    <img src={quote} alt="" />
                    <div className="head">Testimonials</div>
                </div>
                <div className='testi-desc'>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</div>
                <div className='imgt'>
                    <img src={audioimg} alt=""  className='audioimg'/>
                    <img src={info} alt="" className='info' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonialsection
