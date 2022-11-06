import React from 'react'
import './EventCard.css'

const EventCard = () => {
  return (
   <div>
    <div className="canvas">
        <div className="wrapper">
            <div className="mappopup">
              <div className='closeButton'>
		                    <button className='close'>&times;</button>
              </div>
              <div className='info'>
		            <h2><b>Musical Night</b></h2>
                </div>   
              <div className='Description'>
              <p>Nov 16, 2022</p>
                <p>
                Hello Everyone, we are hosting the music show at the park. So, we would love to have you at the show and enjoy the evening.
                </p>  
                 
              </div>
              <div className='registerButton'>
            <button className="register">Register &#8594;</button>
            </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default EventCard