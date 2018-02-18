import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';

import '../../styles/ThomasZhu.css'

import TwitterLogo from '../../assets/twitter.png'
import GithubLogo from '../../assets/github.png'
import GmailLogo from '../../assets/gmail.png'

const THOMAS_AVATAR = 'http://thomaszhu.com/resources/thomas_avatar.jpeg'

export default class Profile extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="About">
          <div className="AboutLeftContainer">
            <div className="ProfileImageContainer NoSelection">
              <img
                className="ProfileImage"
                src="http://thomaszhu.com/resources/thomas_avatar.jpeg"
                alt="Thomas"
              />
            </div>
            <div className="LogosImageContainer NoSelection NoMobileHighlight">
              <div className="LogosImageRow">
                <a href="https://twitter.com/thomashzhu" target="_Blank" rel="noopener noreferrer">
                  <img className="Logo"
                    src={TwitterLogo}
                    alt="Twitter Logo"
                  />
                </a>
                <a href="https://github.com/thomashzhu" target="_Blank" rel="noopener noreferrer">
                  <img className="Logo"
                    src={GithubLogo}
                    alt="Github Logo"
                  />
                </a>
                <a href="mailto:thomas.h.zhu@gmail.com" target="_top">
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
            <p className="AboutText"><span className="Bold AboutText Inline">tldr;</span> Just a cool person...</p>
            <p className="AboutText">-----</p>
            <p className="AboutText">
              My name is Thomas. I was born in Beijing, China and moved to the United Stated when I was 15.
            </p>
            <p className="AboutText">
              I have an bachelor simultaneous degree in finance and economics. I have been working in the mortgage and real estate investment trust (REIT) industry for about 4 years.
            </p>
            <p className="AboutText">
              Although that's still a fun career to explore, I've decided to make a switch and become a mobile engineer, mainly because of the freedom and, well, the $$$MONEY$$$. So far, I've learned HTML, CSS, Java, Kotlin, Android, Swift, iOS development, and some basic VBA and Objective-C. And now, I am just excited to learn about React.
            </p>
          </div>
        </div>
        <Dock active={'profile'} />
      </div>
    );
  }
}
