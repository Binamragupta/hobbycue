import React from 'react'
import './CSS/Cardsarea.css'
import Card from './Card'
import img1 from './Assets/groups_black_24dp (1) 1.svg'
import img2 from './Assets/location_on_black_24dp 1.svg'
import img3 from './Assets/shopping_basket_black_24dp (2) 1.svg'
import img4 from './Assets/event_available_black_24dp 2.svg'

function Cardsarea() {
  return (
    <>
    <div className='cardcontain'>
        <div className="cardarea">
            <div className='row1'>
                <div><Card  img={img1} desc="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator." title="People" btntxt="Connect"/></div>
                <div><Card img={img2} desc="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue." title="Place" btntxt="Meet up"/></div>
            </div>
            <div className='row1'>
                <div><Card img={img3} desc="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members." title="Product" btntxt="Get it"/></div>
                <div><Card img={img4} desc="Find events, meetups and workshops related to your hobby.  Register or buy tickets online." title="Program" btntxt="Attend"/></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cardsarea
