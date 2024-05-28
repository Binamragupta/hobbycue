import React from 'react'
import gimg from './Assets/Google.svg'
import fimg from './Assets/Facebook.svg'
import './CSS/Signin.css'
import conimg from './Assets/Connect With Separator.svg'
import forgetimg from './Assets/lock_black_24dp 1.svg'

function Signin() {
  return (
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
        <div className='conimg'><img src={conimg} alt="" /></div>
        <div><input type="text" className='emailinp' placeholder='Email'/></div>
        <div><input type="text" className='emailinp' placeholder='Password'/></div>
        <div className='forgetpass'>
            <div>
                <input type="checkbox" name="" id="" />
                Remember me
            </div>
            <div>
                <img src={forgetimg} alt="" />
                Forgot Password ?
            </div>
        </div>
        <div className='continuebtn'>
                <div>
                     Continue
                </div>
        </div>
    </div>
  )
}

export default Signin
