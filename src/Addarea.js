import React from 'react'
import './CSS/Addarea.css'
import add from './Assets/Add.svg'

function Addarea() {
  return (
    <>
        <div className='areacontain'>
            <div className="maintxt">
                <div className='headia'>
                    <div><img src={add} alt="" /></div>
                    <div className='headarea'>Add your own</div>
                </div>
                <div>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</div>
                <div>
                    <button className='signinbtn'>Sign in</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Addarea
