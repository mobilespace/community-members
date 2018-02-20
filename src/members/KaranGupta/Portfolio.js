import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';

import { ENV } from '../../utils';

import '../../styles/KaranGupta.css'

import LinkIcon from '../../assets/link.png'
import ResumeIcon from '../../assets/resume.png'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="portfolio-container">
          <div className="link-row">
            <img className="link-icon" src={LinkIcon}></img>
          </div>
          <div className="link-row">
            <img className="link-icon" src={ResumeIcon}></img>
          </div>
        </div>
        <Dock active={'portfolio'} />
      </div>
    );
  }
}
