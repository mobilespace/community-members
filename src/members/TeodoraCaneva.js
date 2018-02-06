import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/MonteThakkar.css'

import LeftArrow from '../assets/left-arrow.png';


const TEODORA_AVATAR ='https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c44.0.320.320/p320x320/20914645_1579156895438534_1027285013181250707_n.jpg?oh=0ff1b3c4c8bc8e00edb84cecd660d0fe&oe=5B1C897A'
export default class TeodoraCaneva extends Component {
  render() {
    return (
      <div className="main-container">
        <Link to="/" className="back-arrow-container">
          <img className="back-arrow-icon" src={LeftArrow} />
        </Link>
        <div className="avatar-container">
          <img className="avatar" src={TEODORA_AVATAR} />
        </div>
        <div className="title">Teodora Caneva</div>
        <div className="subtitle">On a Secret Adventure</div>
        <div className="links-container">
          <a href="https://github.com/kodekat" className="link">
            <img className="links-icon" src="http://bogas04.github.io/img/github.svg" />
          </a>
          <a href="https://twitter.com/" className="link">
            <img className="links-icon" src="http://www.freeiconspng.com/uploads/twitter-icon-download-18.png" />
          </a>
          <a href="mailto:teddycaneva@gmail.com?Subject=I%20would%20like%20to%20know%20more%20about%20MobileSpace!" target="_top" className="link">
            <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          </a>
        </div>
      </div>
    );
  }
}