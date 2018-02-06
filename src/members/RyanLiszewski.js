import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/RyanLiszewski.css'

import LeftArrow from '../assets/left-arrow.png';

const RYAN_AVATAR = 'https://avatars3.githubusercontent.com/u/5275250?s=460&v=4'

export default class RyanLiszewski extends Component {
  render() {
    return (
      <div className="main-container">
        <Link to="/" className="back-arrow-container">
          <img className="back-arrow-icon" src={LeftArrow} />
        </Link>
        <div className="avatar-container">
          <img className="avatar" src={RYAN_AVATAR} />
        </div>
        <div className="title">Ryan Liszewski</div>
        <div className="subtitle">Jerk of all trades.</div>
        <div className="links-container">
          <a href="https://github.com/ryanliszewski" className="link">
            <img className="links-icon" src="http://bogas04.github.io/img/github.svg" />
          </a>
          <a href="mailto:ryanliszewski@gmail.com?Subject=I%20would%20like%20to%20know%20more%20about%20MobileSpace!" target="_top" className="link">
            <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          </a>
        </div>
      </div>
    );
  }
}