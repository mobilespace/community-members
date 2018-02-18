import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';

import '../../styles/MitulSavani.css'

import TwitterLogo from '../../assets/twitter.png'
import GithubLogo from '../../assets/github.png'
import GmailLogo from '../../assets/gmail.png'

const MITUL_AVATAR = 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/18556546_1553987881278489_849408995015005895_o.jpg?oh=bb65219475a9cbac85ca7090e7ee877b&oe=5ADE398B'

export default class Profile extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="About">
          <div className="AboutLeftContainer">
            <div className="ProfileImageContainer NoSelection">
              <img
                className="ProfileImage"
                src={MITUL_AVATAR}
                alt="Mitul Savani"
              />
            </div>
            <div className="LogosImageContainer NoSelection NoMobileHighlight">
              <div className="LogosImageRow">
                <a href="https://github.com/mitulsavani" target="_Blank" rel="noopener noreferrer">
                  <img className="Logo"
                    src={GithubLogo}
                    alt="Github Logo"
                  />
                </a>
                <a href="mailto:mitul.savani1@gmail.com?Subject=Hi%20Monte!" target="_top">
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
            <p className="AboutText"><span className="Bold AboutText Inline">tldr;</span> A passionate and curious student at SF State. WHO-HOO</p>
            <p className="AboutText">-----</p>
            <p className="AboutText"> Hello Everyone,
              I am born in India and moved here 2 years ago. I came here to pursue undergrad degree in CS, and planning to do
              Minor in Mathematics; and guess what? I don't want to go back to India. I like going out with friends and kill time when I have nothing to do. 
              I like attending tech conference and love to learn something new out of it all the time.
            </p>
            <p className="AboutText">
              I also like playing bowling and golf, but I hate reading novels.
            </p>
            <p className="AboutText">
              Currently, I am a member of <a href="https://github.com/mobilespace/Season2#season-2---looking-ahead" target="_Blank" className="LinkText" rel="noopener noreferrer">MobileSpace Season 2</a> in React Native. My current goal is to master RN.
            </p>
            <p className="AboutText">
              Lastly, I really enjoy meeting new people and having a casual convo over <span role="img" aria-label="Coffee" className="Inline">☕.</span> <a href="https://twitter.com/MThakkar_" target="_Blank" className="LinkText" rel="noopener noreferrer">hmu</a>
            </p>
          </div>
        </div>
        <Dock active={'profile'} />
      </div>
    );
  }
}
