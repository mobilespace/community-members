import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/RyanLiszewski.css'
import '../styles/CoffeeAnimation.css'

import LeftArrow from '../assets/left-arrow.png';

const RYAN_AVATAR = 'https://avatars3.githubusercontent.com/u/5275250?s=460&v=4'

export default class RyanLiszewski extends Component {
  render() {
    return (

      <div className="main-container">
        <div className="dashboard-container">
        
              {/* <div className="title-ryan">Ryan Liszewski</div>
              <div className="subtitle-ryan">Coffee. Learning. React.</div>
              <div className="avatar-container-ryan">
                <img className="avatar-ryan" src={RYAN_AVATAR} />
            </div> */}
        </div>

      <div className="home-container"> 


      </div>
        
        
      

        {/* <div className="links-container-ryan">
          <a href="https://github.com/ryanliszewski" className="link">
            <img className="links-icon" src="http://bogas04.github.io/img/github.svg" />
          </a>
          <a href="mailto:ryanliszewski@gmail.com?Subject=I%20would%20like%20to%20know%20more%20about%20MobileSpace!" target="_top" className="link">
            <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          </a>
          <a href="https://www.linkedin.com/in/ryanliszewski" className = "link>">
            <img className="links-icon" src="http://www.iconninja.com/files/331/775/772/linkedin-website-logo-service-social-web-communication-icon.svg"/>
          </a> 
        </div> */}
      </div>
    );
  }
}