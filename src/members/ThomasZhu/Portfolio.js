import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';

import { ENV } from '../../utils';

import '../../styles/ThomasZhu.css'

import LinkIcon from '../../assets/link.png'
import ResumeIcon from '../../assets/resume.png'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="portfolio-container">
          <div className="link-row">
            <img className="link-icon" src={LinkIcon}></img>
            <a className="link-title" href="http://thomaszhu.com/" target="_blank">thomaszhu.com</a>
          </div>
          <div className="link-row">
            <img className="link-icon" src={ResumeIcon}></img>
            <a href={`https://www.linkedin.com/in/thomashzhu`} className="link-title" target="_blank">resume</a>
          </div>
        </div>
        <Dock active={'portfolio'} />
      </div>
    );
  }
}
