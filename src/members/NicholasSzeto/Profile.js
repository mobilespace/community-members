import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';

import '../../styles/MonteThakkar.css'

import TwitterLogo from '../../assets/twitter.png'
import GithubLogo from '../../assets/github.png'
import GmailLogo from '../../assets/gmail.png'

const NICHOLAS_AVATAR = 'https://avatars1.githubusercontent.com/u/23561635?s=460&v=4'

export default class Profile extends Component {
  render() {
    return (
      <div className="main-container-nicholas">
        <div className="About">
          <div className="AboutLeftContainer">
            <div className="ProfileImageContainer NoSelection">
              <img
                className="ProfileImage"
                src={NICHOLAS_AVATAR}
                alt="Nicholas Szeto"
              />
            </div>
            <div className="LogosImageContainer NoSelection NoMobileHighlight">
              <div className="LogosImageRow">
                <a href="https://github.com/niszeto" target="_Blank" rel="noopener noreferrer">
                  <img className="Logo"
                    src={GithubLogo}
                    alt="Github Logo"
                  />
                </a>
                <a href="mailto:niszeto@gmail.com?Subject=Hi%20Nicholas!" target="_top">
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
            <p className="AboutText"><span className="Bold AboutText Inline">tldr;</span> Aspring Programmer that works hard to become better everyday.</p>
            <p className="AboutText">-----</p>
            <p className="AboutText">I was born in 1996 and raised in San Francisco, California. I never really liked school at all while growing up. I knew that it was best to do well and work hard which I did. I just couldn't wait until the day where I did not have to think about school. During my senior year of high school in my AP Calculus class, I learned that I do not like math but I do like the problem solving aspect of math. When I got to college I had no idea what I wanted to get into as I didn't like any of my classes, but I heard of computer programming from my brother. I always liked computers and technology as they were a mean to aid in people's lives. So I gave that a chance and I stuck with pursuing a computer science degree after realizing that I like problem solving and computers. I know that I am not the best programmer around, but I put in a lot of effort in my projects and try to get better.   
            </p>
            <p className="AboutText">
              Besides school and studying, in my free time I like to cook random food dishes that I find interesting, performing archery, and just having some time to do nothing. I feel like many of these activities doesn't require too much thinking after the initial thought and planning, so I believe that is why I enjoy these activities so much.
            </p>
            <p className="AboutText">
              Currently I am a senior in San Francisco State University, and about to graduate. I am currently trying to find out which kind of programming I am most interested in going into. I am trying mobile with mobile space and web in my Internet Application and Designs class. 
            </p>
          </div>
        </div>
        <Dock active={'profile'} />
      </div>
    );
  }
}
