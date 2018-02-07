import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/WilliamHua.css'

import LeftArrow from '../assets/left-arrow.png';

const WILLIAM_AVATAR = 'https://avatars3.githubusercontent.com/u/36139326?s=460&v=4'

export default class WilliamHua extends Component {
  render() {
    return (
      <div className="main-container-wh">
        <Link to="/" className="back-arrow-container">
          <img className="back-arrow-icon" src={LeftArrow} />
        </Link>
        <div className="avatar-container-wh">
          <img className="avatar-wh" src={WILLIAM_AVATAR} />
        </div>
        <div className="title-wh">William Hua</div>
        <div className="subtitle-wh">Expert Loud Mouth and Software Archivist</div>
        <div className="links-container">
          <a href="https://github.com/william-hua" className="link">
            <img className="links-icon" src="http://bogas04.github.io/img/github.svg" />
          </a>
          <a href="https://nsa.gov" className="link">
            <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" />
          </a>
          <a href="mailto:williamhua99@gmail.com?Subject=Please%20Help%20Make%20Coding%20Great%20Again!" target="_top" className="link">
            <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          </a>
          <a href="https://steamcommunity.com/id/watermelons10" className="link">
            <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1024px-Steam_icon_logo.svg.png" />
          </a>
        </div>
      </div>
    );
  }
}