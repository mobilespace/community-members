import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';

import { ENV } from '../../utils';

import '../../styles/MonteThakkar.css'

import LinkIcon from '../../assets/link.png'
import ResumeIcon from '../../assets/resume.png'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="main-container-prakash">
      <div className="dashboard-container-prakash">
        
      <Dock active={'dashboard'} />
      </div>
      <div className="chart-container-prakash">

        <div className="link-row">
            <img className="link-icon" src={LinkIcon}></img>
            <a className="link-title" href="https://google.com/" target="_blank">google.com</a>
          </div>
          <div className="link-row">
            <img className="link-icon" src={ResumeIcon}></img>
            <a href="https://google.com/" className="link-title" target="_blank">resume</a>
          </div>
       </div>
       </div>
    );
  }
}
