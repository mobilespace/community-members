import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../../styles/RyanLiszewski.css';

import HOME_ICON from '../../assets/home.png';
import SETTINGS_ICON from '../../assets/settings.png';
import PROFILE_ICON from '../../assets/profile.png';
import LOGOUT_ICON from '../../assets/logout.png';

export default class Dock extends Component {

  render() {
    return (
      <div className="dock-container-ryan">
        <div className="navbar-container">
          <ul className="navbar">
            <li className="navbar-item">
              <Link to="/ryan">
                <img className="navbar-icon" src={HOME_ICON}/>
              </Link>  
            </li>
            <li className="navbar-item">
              <Link to="/ryan/profile">
                <img className="navbar-icon" src={PROFILE_ICON}/>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/ryan/settings">
                <img className="navbar-icon" src={SETTINGS_ICON}/>
              </Link>  
            </li>
          </ul>
        
        <div className="logout-container">
          <Link to="/">
            {sessionStorage.setItem('authenticated', false)}
            <img className='logout-icon' src={LOGOUT_ICON}/>
          </Link>
        </div>

        </div>
      </div> 
    );
  }
}

