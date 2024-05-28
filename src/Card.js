import React from 'react'
import './CSS/Card.css'

function Card(props) {
  return (
    <>
        <div className="card">
            <div className="cardtxt">
                <div className='headia'>
                    <div><img src={props.img} alt="" /></div>
                    <div className='headarea'>{props.title}</div>
                </div>
                <div className='desccard'>{props.desc}</div>
                <div>
                    <button className='signinbtn'>{props.btntxt}</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
