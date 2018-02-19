import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/TeodoraCaneva.css';
import '../../styles/Teodora_DockBar.css';

import DASHBOARD_ICON from '../../assets/laptop-t.png';
import PORTFOLIO_ICON from '../../assets/portfolio-t.png';
const TEODORA_AVATAR ='https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c44.0.320.320/p320x320/20914645_1579156895438534_1027285013181250707_n.jpg?oh=0ff1b3c4c8bc8e00edb84cecd660d0fe&oe=5B1C897A'

export default class Dock extends Component {
  render() {
    const { active } = this.props

    return (
      <footer className="NoSelection">
        <ul>
          <li data-title="Profile">
            <Link to="/teodora/profile">
              <img data-title="Profile"  className="" src={TEODORA_AVATAR} className={`dock-avatar ${active === 'profile' ? 'active' : ''}`} />
            </Link>
          </li>
          <li data-title="Dashboard">
            <Link to="/teodora/dashboard">
              <img data-title="Dashboard" src={DASHBOARD_ICON} className={active === 'dashboard' ? 'active' : ''} />
            </Link>
          </li>
          <li data-title="Portfolio">
            <Link to="/teodora/portfolio">
              <img data-title="Portfolio"  src={PORTFOLIO_ICON} className={active === 'portfolio' ? 'active' : ''} />
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}
