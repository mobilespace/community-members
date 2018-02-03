import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/App.css';

import LeftArrow from './assets/left-arrow.png';

export default class NotFound extends Component {
  render() {
    return (
      <div className="main-container">
        <Link to="/" className="back-arrow-container">
          <img className="back-arrow-icon" src={LeftArrow} />
        </Link>
        <div className="title">Intrigued?</div>
        <div className="not-found-email-text">Email:
          <a href="mailto:helloomonte@gmail.com?Subject=I%20would%20like%20to%20know%20more%20about%20MobileSpace!" target="_top" className="link"> helloomonte@gmail.com</a>
        </div>
      </div>
    );
  }
}
