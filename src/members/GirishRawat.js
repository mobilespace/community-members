import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/MonteThakkar.css'

import LeftArrow from '../assets/left-arrow.png';

const GIRISH_AVATAR = 'https://avatars2.githubusercontent.com/u/6697235?s=460&v=4'

export default class GirishRawat extends Component {
  render() {
    return (
      <div className="main-container">
        <Link to="/" className="back-arrow-container">
          <img className="back-arrow-icon" src={LeftArrow} />
        </Link>
        <div className="avatar-container">
          <img className="avatar" src={GIRISH_AVATAR} />
        </div>
        <div className="title">Girish Rawat</div>
        <div className="subtitle">Meme Connoisseur</div>
        <div className="links-container">
          <a href="https://github.com/GirishRawat" className="link">
            <img className="links-icon" src="http://bogas04.github.io/img/github.svg" />
          </a>
          <a href="twitter.com/GirishRawatGR" className="link">
            <img className="links-icon" src="http://www.freeiconspng.com/uploads/twitter-icon-download-18.png" />
          </a>
          <a href="mailto:hi@girish.design?Subject=I%20would%20like%20to%20know%20more%20about%20MobileSpace!" target="_top" className="link">
            <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          </a>
        </div>
      </div>
    );
  }
}
