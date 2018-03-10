import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/MonteThakkar.css';
import '../MonteThakkar/Monte_Dock.css';

import DASHBOARD_ICON from '../../assets/dashboard.png';
import PORTFOLIO_ICON from '../../assets/portfolio.png';
const WILLIAM_AVATAR = 'https://avatars3.githubusercontent.com/u/36139326?s=460&v=4'

export default class Dock extends Component {
  render() {
    const { active } = this.props
    console.log(active);

    return (
      <footer className="NoSelection">
        <ul>
          <li data-title="Dashboard">
            <Link to="/william/dashboard">
              <img data-title="Dashboard" src={DASHBOARD_ICON} className={active === 'dashboard' ? 'active' : ''} />
            </Link>
          </li>
          <li data-title="Portfolio">
            <Link to="/william/portfolio">
              <img data-title="Portfolio" src={PORTFOLIO_ICON} className={active === 'portfolio' ? 'active' : ''} />
            </Link>
          </li>
          <li data-title="Profile">
            <Link to="/william/profile">
              <img data-title="Profile" className="" src={WILLIAM_AVATAR} className={`dock-avatar ${active === 'profile' ? 'active' : ''}`} />
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}