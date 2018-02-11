import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import { ENV } from '../../utils';


import '../../styles/GirishRawat.css'

import LinkIcon from '../../assets/link.png'
import ResumeIcon from '../../assets/resume.png'

export default class Portfolio extends Component {
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
          <div className="portfolio-container">
            <div className="link-row">
              <img className="link-icon" src={LinkIcon}></img>
              <a className="link-title" href="http://www.girish.design/" target="_blank">Website</a>
            </div>
            <div className="link-row">
              <img className="link-icon" src={ResumeIcon}></img>
              <a href={`${ENV}/MonteThakkar_Resume.pdf`} className="link-title" target="_blank">Resume</a>
            </div>
          </div>
        </div>
        </div>

        );
  }
}
