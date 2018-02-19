import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../../styles/RyanLiszewski.css';

import HOME_ICON from '../../assets/home.png';
import SETTINGS_ICON from '../../assets/settings.png';
import PROFILE_ICON from '../../assets/profile.png';
import LOGOUT_ICON from '../../assets/logout.png';
import PORTFOLIO_ICON from '../../assets/portfolio-ryan.png';

export default class Dock extends Component {

  render() {
    return (
      <div className="dock-container-ryan">
        <div className="navbar-container-ryan">
          <ul className="navbar-ryan">
            <li className="navbar-item">
              <Link to="/ryan">
                <img className="navbar-icon-ryan" src={HOME_ICON}/>
              </Link>  
            </li>
            <li className="navbar-item">
              <Link to="/ryan/profile">
                <img className="navbar-icon-ryan" src={PROFILE_ICON}/>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/ryan/portfolio">
                <img className="navbar-icon-ryan" src={PORTFOLIO_ICON}/>
              </Link>  
            </li>
            <li className="navbar-item">
              <Link to="/ryan/settings">
                <img className="navbar-icon-ryan" src={SETTINGS_ICON}/>
              </Link>  
            </li>
          </ul>
        </div>

        <div className="logout-container">
          <Link className= "logout-a" to="/">
            {sessionStorage.setItem('authenticated', false)}
            <img className='logout-icon' src={LOGOUT_ICON}/>
          </Link>
        </div>
      </div> 
    );
  }
}

