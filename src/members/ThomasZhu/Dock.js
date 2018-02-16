import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/ThomasZhu.css';
import '../../styles/Mac-OS-X-DockBar.css';

import DASHBOARD_ICON from '../../assets/dashboard.png';
import PORTFOLIO_ICON from '../../assets/portfolio.png';
const THOMAS_AVATAR = 'http://thomaszhu.com/resources/thomas_avatar.jpeg';

export default class Dock extends Component {
  render() {
    const { active } = this.props

    return (
      <footer className="NoSelection">
        <ul>
          <li data-title="Dashboard">
            <Link to="/thomas/dashboard">
              <img data-title="Dashboard" src={DASHBOARD_ICON} className={active === 'dashboard' ? 'active' : ''} />
            </Link>
          </li>
          <li data-title="Portfolio">
            <Link to="/thomas/portfolio">
              <img data-title="Portfolio" src={PORTFOLIO_ICON} className={active === 'portfolio' ? 'active' : ''} />
            </Link>
          </li>
          <li data-title="Profile">
            <Link to="/thomas/profile">
              <img data-title="Profile" className="" src={THOMAS_AVATAR} className={`dock-avatar ${active === 'profile' ? 'active' : ''}`} />
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}
