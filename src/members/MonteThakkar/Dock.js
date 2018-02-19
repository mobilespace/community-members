import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/MonteThakkar.css';
import './Monte_Dock.css';

import DASHBOARD_ICON from '../../assets/dashboard.png';
import PORTFOLIO_ICON from '../../assets/portfolio.png';
const MONTE_AVATAR = 'https://avatars2.githubusercontent.com/u/7840686?s=400&v=4';

export default class Dock extends Component {
  render() {
    const { active } = this.props

    return (
      <footer className="NoSelection">
        <ul>
          <li data-title="Dashboard">
            <Link to="/monte/dashboard">
              <img data-title="Dashboard" src={DASHBOARD_ICON} className={active === 'dashboard' ? 'active' : ''} />
            </Link>
          </li>
          <li data-title="Portfolio">
            <Link to="/monte/portfolio">
              <img data-title="Portfolio" src={PORTFOLIO_ICON} className={active === 'portfolio' ? 'active' : ''} />
            </Link>
          </li>
          <li data-title="Profile">
            <Link to="/monte/profile">
              <img data-title="Profile" className="" src={MONTE_AVATAR} className={`dock-avatar ${active === 'profile' ? 'active' : ''}`} />
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}
