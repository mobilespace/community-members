import React, { Component } from 'react';
import { Link } from 'react-router-dom' ;

import '../../styles/MitulSavani.css';
import './Mitul_Dock.css';

import DASHBOARD_ICON from '../../assets/dashboard.png';
import PORTFOLIO_ICON from '../../assets/portfolio.png';
const MITUL_AVATAR = 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/18556546_1553987881278489_849408995015005895_o.jpg?oh=bb65219475a9cbac85ca7090e7ee877b&oe=5ADE398B'

export default class Dock extends Component {
    render() {
        const { active } = this.props

        return(
            <footer className = "NoSelection" >
                <ul>
                    <li data-title="Dashboard">
                        <Link to="mitul/dashboard">
                        <img data-title="Dashboard" src={DASHBOARD_ICON} className={active === 'dashboard' ? 'active' : ''} />
                        </Link>
                    </li>
                    <li data-title="Portfolio">
                        <Link to="/mitul/portfolio">
                        <img data-title="Portfolio" src={PORTFOLIO_ICON} className={active === 'portfolio' ? 'active' : ''} />
                        </Link>
                     </li>
                    <li data-title="Profile">
                        <Link to="/mitul/profile">
                        <img data-title="Profile" className="" src={MITUL_AVATAR} className={`dock-avatar ${active === 'profile' ? 'active' : ''}`} />
                        </Link>
                    </li>
                </ul>
            </footer>
        );
    }
}