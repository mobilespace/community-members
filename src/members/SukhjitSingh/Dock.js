import React, { Component } from "react";
import { Link } from 'react-router-dom'

import '../../styles/MonteThakkar.css';
import './Sukhjit_Dock.css';

import DASHBOARD_ICON from '../../assets/dashboard.png';
import PORTFOLIO_ICON from '../../assets/portfolio.png';

const SUKHJIT_AVATAR = 'https://avatars1.githubusercontent.com/u/18251293?s=400&u=1ee2922f2dd90d94bb4efbec7cc815ef510a0ad7&v=4'

export default class Dock extends Component {
  render() {
    const { active } = this.props

    return (
      <footer className="NoSelection">
        <ul>
          <li data-title="Dashboard">
            <Link to="/sukhjit/dashboard">
              <img data-title="Dashboard" src={DASHBOARD_ICON} className={active === 'dashboard' ? 'active' : ''} />
            </Link>
          </li>
          <li data-title="Portfolio">
            <Link to="/sukhjit/portfolio">
              <img data-title="Portfolio" src={PORTFOLIO_ICON} className={active === 'portfolio' ? 'active' : ''} />
            </Link>
          </li>
          <li data-title="Profile">
            <Link to="/sukhjit/profile">
              <img data-title="Profile" className="" src={SUKHJIT_AVATAR} className={`dock-avatar ${active === 'profile' ? 'active' : ''}`} />
            </Link>
          </li>
        </ul>
      </footer>
    )
  }
}