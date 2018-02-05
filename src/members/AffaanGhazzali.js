import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/AffaanGhazzali.css'

import LeftArrow from '../assets/left-arrow.png';

const Affaan_Avatar = 'https://avatars0.githubusercontent.com/u/32111151?s=460&v=4'

export default class AffaanGhazzali extends Component {
  render() {
    return (
      <div className="main-container">
        <Link to="/" className="back-arrow-container">
          <img className="back-arrow-icon" src={LeftArrow} />
        </Link>
        <div className="avatar-container">
          <img className="avatar" src={Affaan_Avatar} />
        </div>
        <div className="title">Affaan Ghazzali</div>
        <div className="subtitle">I like cars</div>
        <div className="links-container">
          <a href="https://github.com/affaanghazzali" className="link">
            <img className="links-icon" src="http://bogas04.github.io/img/github.svg" />
          </a>
          <a href="https://www.instagram.com/affaanghazzali/" className="link">
            <img className="links-icon" src="https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png" />
          </a>
          <a href="mailto:ghazzaliaffaan@gmail.com?Subject=I%20would%20like%20to%20know%20more%20about%20MobileSpace!" target="_top" className="link">
            <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          </a>
        </div>
      </div>
    );
  }
}
