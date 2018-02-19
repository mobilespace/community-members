import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';

import '../../styles/EmanuelSaunders.css'

import LinkIcon from '../../assets/link.png'
import ResumeIcon from '../../assets/resume.png'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="Emanuel-main-container">
        <div className="portfolio-container">
          <div className="link-row">
            <img className="link-icon" src={LinkIcon}></img>
            <a className="link-title" href="www.linkedin.com/in/emanuel-saunders42" target="_blank">LinkedIn</a>
          </div>
        </div>
        <Dock active={'portfolio'}/>
      </div>
    );
  }
}
