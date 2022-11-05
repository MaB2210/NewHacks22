import React from 'react'
import './About.css'
import logo from '../../Assets/Image/Home-AboutUS.jpg'
const About = () => {
  return (
    <div>

<div className="canvas">
        <div className="wrapper">
            <div className="row">
                    <div className="col">
                        <h1>Are you bored<br/> get yorself participated</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>culpa enim ut fugit neque architecto</p>
                        <button className="button">Checkout Events &#8594;</button>
                    </div>
                    <div className="col">
                        <img src={logo} />
                    </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About