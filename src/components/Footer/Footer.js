import React from 'react'
import lkdinlogo from '../../Assets/Image/Linkedin_Logo.svg'
import githublogo from '../../Assets/Image/Github_Logo.svg'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className='footer'>
      <div className="person">
        <h2>Mann Bhatt</h2>
        <div className='linkedin'>
          <a href ="https://www.linkedin.com/in/mann-bhatt-781327147/"><img src={lkdinlogo} />  </a>
        </div>
        
        <div className='github'>
          <a href ="https://github.com/MaB2210"><img src={githublogo} /> </a>  
        </div>
        
      </div>
      <div className="person">
        <h2>Evan Song</h2>
        <div className='linkedin'>
          <a href ="https://www.linkedin.com/in/evan-song-7652a620a/"><img src={lkdinlogo} />  </a>
        </div>
        
        <div className='github'>
          <a href ="https://github.com/evnsng"><img src={githublogo} /></a>  
        </div>
        
      </div>
      <div className="person">
        <h2>Kaushal Luffa</h2>
        <div className='linkedin'>
          <a href ="https://linkedin.com/in/kaushalluffa"><img src={lkdinlogo} />  </a>
        </div>
        
        <div className='github'>
          <a href ="https://github.com/kaushalluffa"><img src={githublogo} /> </a>  
        </div>
        
      </div>
      <div className="person">
        <h2>Arjun Sohal</h2>
        <div className='linkedin'>
          <a href ="https://www.linkedin.com/in/arjun-sohal-8401bb253/"><img src={lkdinlogo} />  </a>
        </div>
        
        <div className='github'>
          <a href ="https://github.com/arjunsohal12"><img src={githublogo} /> </a>  
        </div>
        
      </div>


      </div>
    </div>
  )
}

export default Footer