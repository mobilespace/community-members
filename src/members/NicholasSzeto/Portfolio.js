import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';

import { ENV } from '../../utils';

import '../../styles/NicholasSzeto.css'

import ResumeIcon from '../../assets/resume.png'

const NICHOLAS_AVATAR = 'https://avatars1.githubusercontent.com/u/23561635?s=460&v=4'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="main-container-nicholas">
        <div className="title-nicholas">Nicholas Szeto</div>
        <div className="subtitle-nicholas">Aspiring Programmer</div>
        <div className="portfolio-container">
          <div className="link-row">
            <img className="link-icon" src={ResumeIcon}></img>
            <a href={`${ENV}/NicholasSzeto_Resume.pdf`} className="link-title" target="_blank">resume</a>
          </div>
        </div>
        <Dock active={'portfolio'} />
      </div>
    );
  }
}
