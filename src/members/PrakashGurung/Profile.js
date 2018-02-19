import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';

import '../../styles/MonteThakkar.css'

import TwitterLogo from '../../assets/twitter.png'
import GithubLogo from '../../assets/github.png'
import GmailLogo from '../../assets/gmail.png'

const PRAKASH_AVATAR = 'https://avatars.githubusercontent.com/makkhay'

export default class Profile extends Component {
  render() {
    return (
      <div className="main-container-prakash">
     
     
      <div className="dashboard-container-prakash">
        
      <Dock active={'dashboard'} />

       </div>

      <div className="chart-container-prakash">
      <div className="About">
          <div className="AboutLeftContainer">
            <div className="ProfileImageContainer NoSelection">
              <img
                className="ProfileImage"
                src="https://avatars.githubusercontent.com/makkhay"
                alt="Prakash Gurung"
              />
            </div>
            <div className="LogosImageContainer NoSelection NoMobileHighlight">
              <div className="LogosImageRow">
                <a href="https://twitter.com" target="_Blank" rel="noopener noreferrer">
                  <img className="Logo"
                    src={TwitterLogo}
                    alt="Twitter Logo"
                  />
                </a>
                <a href="https://github.com/makkhay" target="_Blank" rel="noopener noreferrer">
                  <img className="Logo"
                    src={GithubLogo}
                    alt="Github Logo"
                  />
                </a>
                <a href="mailto:makkhay@gmail.com?Subject=Hi%20Monte!" target="_top">
                  <img className="Logo"
                    src={GmailLogo}
                    alt="Gmail Logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="AboutRightContainer">
            <p className="IntroHello">About me</p>
            <p className="AboutText"><span className="Bold AboutText Inline"></span> Young, independent and ambitious software engineer looking to make an impact.</p>
            <p className="AboutText">-----</p>
            <p className="AboutText">I like playing soccer. I'm in a soccer team and we play competative local soccer leagues and tournamnet. 
            </p>
            <p className="AboutText">
              Besides soccer, I like playing guitar with my band. I listen and play all types of music but I prefer rock and heavy metal.
            <p className="AboutText">
            I'm really intersted in mobile app development. I learned android development on my own and I have published a couple of apps on playstore. 
            </p>
            <p className="AboutText">
              Lastly, I really enjoy meeting new people and having a casual convo over
            </p>
            </p>
          </div>
        </div>


      </div>
      </div>
    );
  }
}
