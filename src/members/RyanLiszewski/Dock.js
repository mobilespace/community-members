import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/RyanLiszewski.css';

import HOME_ICON from '../../assets/home.png';

export default class Dock extends Component {

  render() {
    return (
      <div className = "dock-container-ryan">
        <div className = "navbar-container">
          <ul className ="navbar">
            <li className="navbar-item">
              <Link to="/ryan/dashboard">
                <img className="navbar-icon" src={HOME_ICON}/>
              </Link>  
            </li>
            <li className="navbar-item">
              <Link to="/ryan/dashboard">
                <img className="navbar-icon" src={HOME_ICON}/>
              </Link>  
            </li>
          </ul>
        </div>
      
      </div> 

    );
  }
}

