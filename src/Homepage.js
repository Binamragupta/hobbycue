import React from 'react'
import Navbar from './Navbar'
import './CSS/Homepage.css'
import img1 from './Assets/5793401 1.svg'
import img2 from './Assets/5793404 1.svg'
import Bottom from './Bottom'
import Lastsection from './Lastsection'
import Testimonialsection from './Testimonialsection'
import Addarea from './Addarea'
import Cardsarea from './Cardsarea'
import { useState } from 'react'
import Signin from './Signin'
import Joinin from './Joinin'

function Homepage() {

    const [signin,setsignin]=useState(true);

    const toggle=()=>{
        signin? setsignin(false):setsignin(true);
    }
    const activeStyle = {
        color:"#8064A2",
        textDecoration: 'underline',
      };

  return (
    <>
        <div>
            <Navbar id="nav" />
            <div className="landing-area" >
                <div className='landing-txt-area'>
                    <div className='head'>Explore your <span className="blue-txt">hobby</span> or <span className="purple-txt">passion</span></div>
                    <div className='landing-desc'>
                        <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
                        <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
                    </div>
                    <div className='landing-image-area'>
                        <img src={img2} alt=""  className='landing-image1'/>
                        <img src={img1} alt=""  className='landing-image2'/>
                    </div>
                </div>
                <div className='signup-area'>
                    <div className='sign-btnarea'>
                        <button className='sign' onClick={toggle} style={signin ? activeStyle : {}}>SignIn</button>
                        <button className='sign' onClick={toggle} style={!signin ? activeStyle : {}}>Join In</button>
                    </div>
                    <div >
                        {signin && <Signin/>}
                        {!signin && <Joinin/>}
                    </div>
                </div>
            </div>
            <div><Cardsarea className="compo"/></div>
            <div><Addarea className="compo"/></div>
            <div><Testimonialsection className="compo"/></div>
            <div><Lastsection className="compo"/></div>
            <div><Bottom className="compo"/></div>
        </div>
    </>
  )
}

export default Homepage
