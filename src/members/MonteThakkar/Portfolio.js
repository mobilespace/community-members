import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';

import '../../styles/MonteThakkar.css'

import LinkIcon from '../../assets/link.png'
import ResumeIcon from '../../assets/resume.png'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="portfolio-container">
          <div className="link-row">
            <img className="link-icon" src={LinkIcon}></img>
            <a className="link-title" href="https://montethakkar.now.sh/" target="_blank">montethakkar.com</a>
          </div>
          <div className="link-row">
            <img className="link-icon" src={ResumeIcon}></img>
            <Link to="/resumes/MonteThakkar_Resume.pdf" className="link-title" target="_blank">resume</Link>
          </div>
        </div>
        <Dock active={'portfolio'} />
      </div>
    );
  }
}
