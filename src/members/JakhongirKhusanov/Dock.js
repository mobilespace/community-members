import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/JakhongirKhusanov.css';
import './Jakhongir_Dock.css';

import DASHBOARD_ICON from '../../assets/dashboard.png';
import PORTFOLIO_ICON from '../../assets/portfolio.png';
const  JAKHONGIR_AVATAR = 'https://avatars0.githubusercontent.com/u/25942541?s=460&v=4';

export default class Dock extends Component {
  render() {
    const { active } = this.props

    return (
      <footer className="NoSelection">
        <ul>
          <li data-title="Dashboard">
            <Link to="/jakhongir/dashboard">
              <img data-title="Dashboard" src={DASHBOARD_ICON} className={active === 'dashboard' ? 'active' : ''} />
            </Link>
          </li>
          <li data-title="Portfolio">
            <Link to="/jakhongir/portfolio">
              <img data-title="Portfolio" src={PORTFOLIO_ICON} className={active === 'portfolio' ? 'active' : ''} />
            </Link>
          </li>
          <li data-title="Profile">
            <Link to="/jakhongir/profile">
              <img data-title="Profile" className="" src={JAKHONGIR_AVATAR} className={`dock-avatar ${active === 'profile' ? 'active' : ''}`} />
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}
