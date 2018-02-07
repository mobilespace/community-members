import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/GirishRawat.css'

import LeftArrow from '../assets/left-arrow.png';

const GIRISH_AVATAR = 'https://avatars2.githubusercontent.com/u/6697235?s=460&v=4'

export default class GirishRawat extends Component {
  render() {
    return (
      <div className="main-container-girish">
        <body class="noisy"></body>
        <div class="emblem"><span class="icon-information"></span></div>

        <div class="piece output">
          <h1> <span> Girish Rawat </span> </h1>
          <p class><span>Code + Deisgn + Memes</span></p>
          <p>
            <a href="http://www.girish.design/">Website ></a>
            <br />
            <a href="https://github.com/GirishRawat">Github ></a>
            <br />
            <a href="twitter.com/GirishRawatGR">Twitter ></a>
          </p>
          <p> 
          <Link to="/" className="back-arrow-container"> EXIT</Link>
          </p>
        </div>
        <div class="piece scanlines noclick"></div>
        <div class="piece glow noclick"></div>
      </div>

    );
  }
}
