import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import '../../styles/RyanLiszewski.css';
import TwitterLogo from '../../assets/twitter.png'
import GithubLogo from '../../assets/github.png'
import GmailLogo from '../../assets/gmail.png'

import Dock from './Dock'

export default class Profile extends Component {

  render() {
    const authenticated = localStorage.getItem('authenticated');

    if(authenticated === "false" || authenticated === null){
      return <Redirect to='/ryan/locked'/>
    }

    return(
      <div className="main-container-ryan">
        <div className="profile-container-ryan">
        <div className="About">
          <div className="AboutLeftContainer">
            <div className="ProfileImageContainer NoSelection">
              <img
                className="ProfileImage"
                src="https://avatars3.githubusercontent.com/u/5275250?s=460&v=4"
                alt="Monte Thakkar"
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
                <a href="https://github.com/ryanliszewski" target="_Blank" rel="noopener noreferrer">
                  <img className="Logo"
                    src={GithubLogo}
                    alt="Github Logo"
                  />
                </a>
                <a href="mailto:manthan.thakkar@gmail.com?Subject=Hi%20Monte!" target="_top">
                  <img className="Logo"
                    src={GmailLogo}
                    alt="Gmail Logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="AboutRightContainer">
            <p className="IntroHello">I'm the real Monte!</p>
            <p className="AboutText"><span className="Bold AboutText Inline">tldr;</span> Young, independent and ambitious software engineer looking to make an impact.</p>
            <p className="AboutText">-----</p>
            <p className="AboutText">I was born and raised in Bangalore, India and moved to the Bay Area in 2012 to pursue an undergrad degree in CS.
              During my junior & senior year in college, I attended over a couple dozen hackathons and worked on a whole range of web and mobile projects, learning several different technologies in the process such as rails, express, swift, java, parse, firebase, javascript and realm.
              Working in a team setting (often with people I just met at the hackathon), I developed an interest for communicating and implementing big lofty ideas using technology.
            </p>
            <p className="AboutText">
              Besides tech, I am also really passionate about teaching and take any oppurtunity I get to help mentor junior developers and share my technical expertise with them. In this spirit, I founded MobileSpace; a weekly meetup to teach iOS development at SF State. You can read more about it <a href="https://medium.com/@mthakkar_/mobilespace-a-passion-story-9dbc8afd5221" target="_Blank" className="LinkText" rel="noopener noreferrer">here</a>.
            </p>
            <p className="AboutText">
              Currently, I am teaching <a href="https://github.com/mobilespace/Season2#season-2---looking-ahead" target="_Blank" className="LinkText" rel="noopener noreferrer">MobileSpace Season 2</a> in React Native. Looking ahead, I am excited to see all our members master React Native and be able to find a internship or full-time position using these skills.
            </p>
            <p className="AboutText">
              Lastly, I really enjoy meeting new people and having a casual convo over <span role="img" aria-label="Coffee" className="Inline">☕.</span> <a href="https://twitter.com/MThakkar_" target="_Blank" className="LinkText" rel="noopener noreferrer">hmu</a>
            </p>
          </div>
        </div>

        </div>
      
      <Dock/>
      </div>
    );
  }

}
