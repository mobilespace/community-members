import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';

import '../../styles/KaranGupta.css'


const KARAN_AVATAR = 'https://avatars1.githubusercontent.com/u/19352928?s=460&v=4'

export default class Profile extends Component {
  render() {
    return (
      <div className="main-container">
        
        <div className="avatar-container">
          <img className="avatar" src={KARAN_AVATAR} />
        </div>
        <div className="title">Karan Gupta</div>
        <div className="subtitle">Always Busy :)</div>
        <div className="links-container">
          <a href="https://github.com/karanguptak9" className="link">
            <img className="links-icon" src="http://bogas04.github.io/img/github.svg" />
          </a>
          <a href="" className="link">
            <img className="links-icon" src="http://www.freeiconspng.com/uploads/twitter-icon-download-18.png" />
          </a>
          <a href="" target="_top" className="link">
            <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          </a>
        </div>
        <Dock active={'profile'} />
      </div>
    );
  }
}
