import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/MitulSavani.css'

import LeftArrow from '../assets/left-arrow.png';

const MITUL_AVATAR = 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/18556546_1553987881278489_849408995015005895_o.jpg?oh=bb65219475a9cbac85ca7090e7ee877b&oe=5ADE398B'

export default class MitulSavani extends Component {
  render() {
    return (
      <div className="main-container-mitul">
        <Link to="/" className="back-arrow-container">
          <img className="back-arrow-icon" src={LeftArrow} />
        </Link>
        <div className="avatar-container-mitul">
          <img className="avatar-mitul" src={MITUL_AVATAR} />
        </div>
        <div className="title-mitul">MITUL SAVANI</div>
        <div className="subtitle-mitul">Lower than 100% is considered as Failure</div>
        <div className="thirdheading">Computer Science | Mathematics</div>
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
          <a href="https://www.linkedin.com/in/mitul-savani-3b5123133/" className="link">
            <img className="links-icon" src="http://clipground.com/images/linkedin-background-clipart-5.png" />
          </a>
        </div>
      </div>
    );
  }
}
