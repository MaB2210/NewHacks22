import React from 'react'
import './About.css'
import logo from '../../Assets/Image/Home-AboutUS.jpg'
const About = () => {
  return (
    <div>

<div className="canvas">
        <div className="wrapper">
            <div className="home">
                    <div className="home_intro">
                        <h1>Are you bored<br/> get yorself participated</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>culpa enim ut fugit neque architecto</p>
                        <button className="button">Checkout Events &#8594;</button>
                    </div>

                    <div className="home_intro">
                        <img src={logo} />
                    </div>  

                    <div className='home_About'>
                        <h1>What is Project</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>  
            </div>
        </div>
    </div>
    </div>
  )
}

export default About