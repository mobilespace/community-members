import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../../styles/MonteThakkar.css'

import TwitterLogo from '../../assets/twitter.png'
import GithubLogo from '../../assets/github.png'
import GmailLogo from '../../assets/gmail.png'

const GIRISH_AVATAR = 'https://avatars2.githubusercontent.com/u/7840686?s=400&v=4'

export default class Profile extends Component {
  render() {
    return (
      <div className="main-container">
      <div>
        <div class="area"></div><nav class="main-menu">
          <ul>
            <li>
              <a href="/girish/profile">
                <i class="fa fa-home fa-2x"></i>
                <span class="nav-text">
                  Profile
                        </span>
              </a>

            </li>

            <li class="has-subnav">
              <a href="/girish/portfolio">
                <i class="fa fa-list fa-2x"></i>
                <span class="nav-text">
                  Portfolio
                        </span>
              </a>

            </li>

            <li>
              <a href="/girish/graphs">
                <i class="fa fa-bar-chart-o fa-2x"></i>
                <span class="nav-text">
                  Graphs and Statistics
                        </span>
              </a>
            </li>
          </ul>

            <ul class="logout">

              <li>
                <a href="/">
                  <i class="fa fa-power-off fa-2x"></i>
                  <span class="nav-text">
                    Exit
                        </span>
                </a>
              </li>

            </ul>
            
        </nav>
      </div>
        <div className="About">
          <div className="AboutLeftContainer">
            <div className="ProfileImageContainer NoSelection">
              <img
                className="ProfileImage"
                src="https://avatars2.githubusercontent.com/u/6697235?s=460&v=4"
                alt="Girish Rawat"
              />
            </div>
            <div className="LogosImageContainer NoSelection NoMobileHighlight">
              <div className="LogosImageRow">
                <a href="https://twitter.com/GirishRaatGR" target="_Blank" rel="noopener noreferrer">
                  <img className="Logo"
                    src={TwitterLogo}
                    alt="Twitter Logo"
                  />
                </a>
                <a href="https://github.com/GirishRawat" target="_Blank" rel="noopener noreferrer">
                  <img className="Logo"
                    src={GithubLogo}
                    alt="Github Logo"
                  />
                </a>
                <a href="mailto:hi@girish.design?Subject=Hi%20Girish!" target="_top">
                  <img className="Logo"
                    src={GmailLogo}
                    alt="Gmail Logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="AboutRightContainer">
            <p className="IntroHello">Welcome to my MySpace</p>
            <p className="AboutText"> Add me on AOL: @girishROXX69</p>
            <p className="AboutText">-----</p>
            <p className="AboutText"> Sup y'all? 
            </p>
            <p className="AboutText">
              The new snapchat update is shite, isn't it? Here'a a bit of filler text:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>
          </div>
        </div>

      </div>
    );
  }
}
