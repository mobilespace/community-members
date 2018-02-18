import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/JakhongirKhusanov.css'
import Dock from './Dock';


import LeftArrow from '../../assets/left-arrow.png';

const JAKHONGIR_AVATAR = 'https://avatars0.githubusercontent.com/u/25942541?s=460&v=4'

export default class Profile extends Component {
  render() {
    return (
      // <div className="main-container">
      //   <Link to="/" className="back-arrow-container">
      //     <img className="back-arrow-icon" src={LeftArrow} />
      //   </Link>
      //   <div className="avatar-container">
      //     <img className="avatar" src={JAKHONGIR_AVATAR} />
      //   </div>
      //   <div className="title">Jakhongir Khusanov</div>
      //   <div className="subtitle">Innovate</div>
      //   <div className="links-container">
      //     <a href="https://github.com/jkhusanov" className="link">
      //       <img className="links-icon" src="http://bogas04.github.io/img/github.svg" />
      //     </a>
      //     <a href="https://twitter.com/iWorld09" className="link">
      //       <img className="links-icon" src="http://www.freeiconspng.com/uploads/twitter-icon-download-18.png" />
      //     </a>
      //     <a href="mailto:worldj95@gmail.com?Subject=I%20would%20like%20to%20know%20more%20about%20MobileSpace!" target="_top" className="link">
      //       <img className="links-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
      //     </a>
      //   </div>
      // </div>
      <div className="main-container-jk">
        <div className="about-jk">
          <div className="up-container-jk">
            <div className="avatar-container">
              <img className="avatar" src={JAKHONGIR_AVATAR} />
            </div>
            <div className="title">Jakhongir Khusanov</div>
          </div>

          <div className="down-container-jk">
                <div className="card"> 
                  <h2 className="card-title">Background</h2>
                  <p className="about-text">I'm an aspiring programmer who loves everything about technology. I'm interested in all types of technologies starting from simple mobile solutions to space rockets. I've been to lots of different places and have met lots of wonderful people. </p>
                  <p className="about-text">I'm excited to bring my life experience to the process of improving people's lives. Let's make our world better by using innovative technologies.</p>
                  <p className="about-text">I've been a professional IT support specialist and sales agent, and I'm a life-long learner who's always interested in expanding my skills.</p>
                  <ul className="resume">
                      <li className="about-text">To learn more, <Link className="resume-link" to="/jakhongir/portfolio">view my resume.</Link></li>
                  </ul>
                </div>
                <div className="card">
                  <h2 className="card-title">Goals</h2>
                  <p className="about-text">I want to master the process of creating useful programs and increase my knowledge and skills in:</p>
                  <ul className="skills">
                      <li>React Native</li>
                      <li>Algorithms</li>
                      <li>Machine Learning</li>
                      <li>Big Data</li>
                      <li>Artificial Intelligence</li>
                  </ul>
                  <p className="about-text">I would like to work for a technology company helping people improve their lives.</p>
              </div>
          </div>
          {/* <div className="footer-dock">
            <Dock active={'profile'} />
          </div> */}
        </div>
        <Dock active={'profile'} />
      </div>

    );
  }
}
