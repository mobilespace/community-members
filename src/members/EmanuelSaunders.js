import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/MonteThakkar.css'

import LeftArrow from '../assets/left-arrow.png';

const EMANUEL_AVATAR = 'https://scontent-lax3-2.cdninstagram.com/vp/1ee634d2bdf29d5a327858a15ccfdf42/5B26F2E8/t51.2885-19/s150x150/18160691_1198139890329419_5383374010954285056_a.jpg'

export default class EmanuelSaunders extends Component {
  render() {
    return (
      <div className="main-container">
        <Link to="/" className="back-arrow-container">
          <img className="back-arrow-icon" src={LeftArrow} />
        </Link>
        <div className="avatar-container">
          <img className="avatar" src={EMANUEL_AVATAR} />
        </div>
        <div className="title">Emanuel Saunders</div>
        <div className="subtitle">Compulsive Learner</div>
        <div className="links-container">
          <a href="https://github.com/saundemanu" className="link">
            <img className="links-icon" src="http://bogas04.github.io/img/github.svg" />
          </a>
          <a href="https://www.linkedin.com/in/emanuel-saunders42/" className="link">
            <img className="links-icon" src="https://thecedaliusgroup.com/wp-content/uploads/2014/11/LinkedIn-InBug-2CRev.png" />
          </a>
          <a href="mailto:emanuelsaunders42@gmail.com?Subject=I%20would%20like%20to%20know%20more%20about%20MobileSpace!" target="_top" className="link">
            <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          </a>
        </div>
      </div>
    );
  }
}
