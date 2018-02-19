import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';

import '../../styles/EmanuelSaunders.css'

import TwitterLogo from '../../assets/twitter.png'
import GithubLogo from '../../assets/github.png'
import GmailLogo from '../../assets/gmail.png'

const EMANUEL_AVATAR = 'https://scontent-lax3-2.cdninstagram.com/vp/1ee634d2bdf29d5a327858a15ccfdf42/5B26F2E8/t51.2885-19/s150x150/18160691_1198139890329419_5383374010954285056_a.jpg'

export default class Profile extends Component {
  render() {
    return (
      <div className="Emanuel-main-container">
        <div className="About">
          <div className="AboutLeftContainer">
            <div className="ProfileImageContainer NoSelection">
              <img
                className="ProfileImage"
                src="https://scontent-lax3-2.cdninstagram.com/vp/1ee634d2bdf29d5a327858a15ccfdf42/5B26F2E8/t51.2885-19/s150x150/18160691_1198139890329419_5383374010954285056_a.jpg"
                alt="Emanuel Saunders"
              />
            </div>
            <div className="LogosImageContainer NoSelection NoMobileHighlight">
              <div className="LogosImageRow">
                <a href="https://twitter.com/mthakkar_" target="_Blank" rel="noopener noreferrer">
                  <img className="Logo"
                    src={TwitterLogo}
                    alt="Twitter Logo"
                  />
                </a>
                <a href="https://github.com/saundemanu" target="_Blank" rel="noopener noreferrer">
                  <img className="Logo"
                    src={GithubLogo}
                    alt="Github Logo"
                  />
                </a>
                <a href="mailto:emanuelsaunders42@gmail.com?Subject=Hi%Emanuel!" target="_top">
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
            <p className="AboutText"><span className="Bold AboutText Inline">tldr;</span>Ambitious Student always eager to learn.</p>
            <p className="AboutText">-----</p>
            <p className="AboutText"> As a Military Brat, I've traveled around the world and seen the amazing ways technology can bring people together from great distances. 
              I hope to one day to be a part of a team that employs novel software solutions to further connect people, regardless of what difference lie inbetween.
              In pursuit of such a lofty goal, I'm always eager to learn new things. 
            </p>
            <p className="AboutText">
            Other than Software Development, I'm very passionate about music. I'm self-taught and reguarly practice drumming, production, and DJing. 
            </p>
            <p className="AboutText">
              Currently, I am taking this course: <a href="https://github.com/mobilespace/Season2#season-2---looking-ahead" target="_Blank" className="LinkText" rel="noopener noreferrer">MobileSpace Season 2</a> in React Native. Looking ahead, I am excited to be able to master React Native and find an internship or full-time position using these skills alongside my classmates.
            </p>
           
          </div>
        </div>
        <Dock active={'profile'} />
      </div>
    );
  }
}
