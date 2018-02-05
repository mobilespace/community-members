import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/MonteThakkar.css'

import LeftArrow from '../assets/left-arrow.png';

const SUKHJIT_AVATAR = 'https://avatars1.githubusercontent.com/u/18251293?s=400&u=1ee2922f2dd90d94bb4efbec7cc815ef510a0ad7&v=4'

export default class MonteThakkar extends Component {
  render() {
    return (
      <div className="main-container">
        <Link to="/" className="back-arrow-container">
          <img className="back-arrow-icon" src={LeftArrow} />
        </Link>
        <div className="avatar-container">
          <img className="avatar" src={SUKHJIT_AVATAR} />
        </div>
        <div className="title">Sukhjit Singh</div>
        <div className="subtitle">Inspiring Mobile Developer</div>
        <div className="links-container">
          <a href="https://github.com/sukhjitsingh" className="link">
            <img className="links-icon" src="http://bogas04.github.io/img/github.svg" />
          </a>
          <a href="mailto:hms2012ca@gmail.com?Subject=I%20would%20like%20to%20know%20more%20about%20MobileSpace!" target="_top" className="link">
            <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          </a>
        </div>
      </div>
    );
  }
}
