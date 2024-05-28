import React from 'react'
import './CSS/Bottom.css'
import facebook from './Assets/Group 60.svg'
import twitter from './Assets/Group 61.svg'
import insta from './Assets/Group 62.svg'
import pinterest from './Assets/Group 63.svg'
import google from './Assets/Group 59.svg'
import youtube from './Assets/Group 58.svg'
import telegram from './Assets/Group 57.svg'
import gmail from './Assets/Group 56.svg'


function Bottom() {
  return (
    <>
        <footer>
            <div className="foot-section1">
                <div classname="link-text">
                    <div className='foot-head'>Hobbycue</div>
                    <div>About Us</div>
                    <div>Our Services</div>
                    <div>Work with Us</div>
                    <div>FAQ</div>
                    <div>Contact Us</div>
                </div>
                <div classname="link-text">
                    <div className='foot-head'>How Do I</div>
                    <div>Sign Up</div>
                    <div>Add a Listing</div>
                    <div>Claim Listing</div>
                    <div>Post a Query</div>
                    <div>Add a Blog Post</div>
                    <div>Other Queries</div>
                </div>
                <div classname="link-text">
                    <div className='foot-head'>Quick Links</div>
                    <div>Listings</div>
                    <div>Blog Posts</div>
                    <div>Shop / Store</div>
                    <div>Community</div>
                </div>
                <div classname="link-text social">
                    <div className='foot-head'>Social Media</div>
                    <div className='social-icons'>
                        <img src={facebook} alt="" className="foot-social-img" />
                        <img src={twitter} alt="" className="foot-social-img" />
                        <img src={insta} alt="" className="foot-social-img" />
                        <img src={pinterest} alt="" className="foot-social-img" />
                        <img src={google} alt="" className="foot-social-img" />
                        <img src={youtube} alt="" className="foot-social-img" />
                        <img src={telegram} alt="" className="foot-social-img" />
                        <img src={gmail} alt="" className="foot-social-img" />
                    </div>
                    <div className='foot-head'>Invite Friends</div>
                    <div>
                        <div className="invite">
                        <input type="text" className="searchTerm" placeholder="Email ID"/>
                        <button type="submit" className="searchButton">
                            <p className='search-icon'>Invite</p>
                        </button>
                </div>
                    </div>
                </div>
            </div>
            <div className="foot-section2">
                <div>
                    © Purple Cues Private Limited
                </div>
            </div>
        </footer>
    </>
  )
}

export default Bottom
