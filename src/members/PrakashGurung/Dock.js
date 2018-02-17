import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/prakash.css';


import DASHBOARD_ICON from '../../assets/dashboard.png';
import PORTFOLIO_ICON from '../../assets/portfolio.png';
const PRAKASH_AVATAR = 'https://avatars.githubusercontent.com/makkhay';


export default class Dock extends Component {
  render() {
    const { active } = this.props

    return (
      <div className = "dock-container-ryan">
      <div className = "navbar-container">
        <ul className ="navbar">
          <li className="navbar-item">
            <Link to="/prakash/portfolio">
              <img className="navbar-icon" src={PORTFOLIO_ICON}/>
            </Link>  
          </li>
          <li className="navbar-item">
            <Link to="/prakash/dashboard">
              <img className="navbar-icon" src={DASHBOARD_ICON}/>
            </Link>  
          </li>
          <li className="navbar-item">
            <Link to="/prakash/profile">
              <img className="navbar-icon" src={PRAKASH_AVATAR}/>
            </Link>  
          </li>
        </ul>
      </div>
    
    </div> 
    );
  }
}
