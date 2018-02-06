import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/MitulSavani.css'

import LeftArrow from '../assets/left-arrow.png';

const MITUL_AVATAR = 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAqdAAAAJGYzNDZlZmE5LWUwYWEtNGVlMC1hODE5LTBmY2JkYTQ2ZDEwOA.jpg'

export default class MitulSavani extends Component {
  render() {
    return (
      <div className="main-container2">
        <Link to="/" className="back-arrow-container">
          <img className="back-arrow-icon" src={LeftArrow} />
        </Link>
        <div className="avatar-container">
          <img className="avatar" src={MITUL_AVATAR} />
        </div>
        <div className="title">Mitul Savani</div>
        <div className="subtitle">In love with Java Mathematics</div>
        <div className="links-container">
          <a href="https://github.com/mitulsavani" className="link">
            <img className="links-icon" src="http://bogas04.github.io/img/github.svg" />
          </a>
          <a href="https://twitter.com/mitul_savani" className="link">
            <img className="links-icon" src="http://www.freeiconspng.com/uploads/twitter-icon-download-18.png" />
          </a>
          <a href="mailto:mitul.savani1@gmail.com?Subject=I%20would%20like%20to%20know%20more%20about%20MobileSpace!" target="_top" className="link">
            <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          </a>
        </div>
      </div>
    );
  }
}
