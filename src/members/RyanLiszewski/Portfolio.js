import React, { Component } from 'react'; 
import {Redirect} from 'react-router-dom'

import '../../styles/RyanLiszewski.css';

import LinkIcon from '../../assets/link.png'
import ResumeIcon from '../../assets/resume.png'

import { ENV } from '../../utils';

import Dock from './Dock';

export default class Portfolio extends Component {
  render(){
    const authenticated = localStorage.getItem('authenticated');
    console.log(authenticated);

    if(authenticated === "false" || authenticated === null){
      return <Redirect to='/ryan/locked'/>
    }

    return(
      <div className="main-container-ryan">
        <div className="portfolio-container-ryan">
          <div className="link-row">
            <img className="link-icon" src={LinkIcon}></img>
            <a className="link-title" href="https://montethakkar.now.sh/" target="_blank">montethakkar.com</a>
          </div>
          <div className="link-row">
            <img className="link-icon" src={ResumeIcon}></img>
            <a href={`${ENV}/Resume_2018_Feb_Twitter.pdf`} className="link-title" target="_blank">resume</a>
          </div>
        </div>
        <Dock/>
      </div>
    );
  }
}