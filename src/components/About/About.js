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
                        <h1>What is EventsHub</h1>
                        <p className="About_txt">EventsHub is a project dedicated to streamlining the process of forming relationships and gatherings. Eventhub will allow users to post their gatherings and events on our website, allowing for other users to find it and join. This makes it much easier to put together a group of people for a beach volleyball game, a potluck, a concert, and more!

                        <b>Create Events for Others to Join:</b>
                        Have you ever started a game of volleyball or frisbee and found yourself with a shortage of people? Post your game on EventsHub, and people will be able to find your game on our website!

                        <b>Join Events Near You:</b>
                        Bored and looking for a friendly ball game nearby? EventsHub can give you a list of all open gatherings near you! Look for ball games, special events, barbecues, and more! 
.</p>
                    </div>  
            </div>
        </div>
    </div>
    </div>
  )
}

export default About