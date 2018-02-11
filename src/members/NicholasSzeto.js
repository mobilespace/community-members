import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/NicholasSzeto.css'

import LeftArrow from '../assets/left-arrow.png';

const NICHOLAS_AVATAR = 'https://avatars1.githubusercontent.com/u/23561635?s=460&v=4'

export default class NicholasSzeto extends Component {
  render() {
    return (
      <div className="main-container-nicholas">
        <Link to="/" className="back-arrow-container">
          <img className="back-arrow-icon" src={LeftArrow} />
        </Link>
        <div className="avatar-container-nicholas">
          <img className="avatar" src={NICHOLAS_AVATAR} />
        </div>
        <div className="title-nicholas">Nicholas Szeto</div>
        <div className="subtitle-nicholas">Aspiring Programmer</div>
        <div className="links-container">
          <a href="https://github.com/niszeto" className="link">
            <img className="links-icon" src="http://bogas04.github.io/img/github.svg" />
          </a>
          <a href="#" className="link">
            <img className="links-icon" src="http://www.freeiconspng.com/uploads/twitter-icon-download-18.png" />
          </a>
          <a href="mailto:niszeto@gmail.com?Subject=I%20would%20like%20to%20know%20more%20about%20MobileSpace!" target="_top" className="link">
            <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          </a>
        </div>
      </div>
    );
  }
}
