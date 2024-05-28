import React from 'react'
import gimg from './Assets/Google.svg'
import fimg from './Assets/Facebook.svg'
import './CSS/Joinin.css'
import conimg from './Assets/Connect With Separator.svg'


function Joinin() {
  return (
    <>
        <div className='signcontain'>
        <div className='choosebtn'>
                <div>
                    <img src={gimg} alt="" />
                </div>
                <div>
                    Continue with Google
                </div>
        </div>
        <div className='choosebtn'>
                <div>
                    <img src={fimg} alt="" />
                </div>
                <div>
                Continue with Facebook
                </div>
        </div>
        <div><img src={conimg} alt="" className='conimg'/></div>
        <div><input type="text" className='emailinp' placeholder='Email'/></div>
        <div><input type="text" className='emailinp' placeholder='Password'/></div>
        <div className='passstrength'>
            <div className='strength'>
                <div className='stre'></div>
                <div className='stre'></div>
                <div className='stre'></div>
            </div>
            <div>
                Password strength
            </div>
        </div>
        <div className='term'>
            By continuing, you agree to our <span className="bold">Terms of Service</span> and <span className="bold">Privacy Policy</span>.
        </div>
        <div className='contibtn'>
                <div>
                     Agree and Continue
                </div>
        </div>
    </div>
    </>
  )
}

export default Joinin
