import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';
import '../../styles/SukhjitSingh.css'

import ResumeIcon from '../../assets/resume-icon-80.png'

const SUKHJIT_AVATAR = 'https://avatars1.githubusercontent.com/u/18251293?s=400&u=1ee2922f2dd90d94bb4efbec7cc815ef510a0ad7&v=4'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="main-container-portfolio">
        <div className="portfolio-container-sukhjit">
          <div className="link-row">
          <img className="avatar" src={SUKHJIT_AVATAR} />
          </div>
          <div className="link-row">
            <img className="link-icon" src={ResumeIcon}></img>
            <a className="link-title" href="https://drive.google.com/file/d/1AdE5AkDA8Sm7FfDcyaHEOwpaqdtUQDdK/view?usp=sharing" target="_blank">Resume</a>
          </div>
        </div>
        <Dock active={'portfolio'} />
      </div>
    );
  }
}
