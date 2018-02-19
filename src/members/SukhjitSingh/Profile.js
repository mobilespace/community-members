import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Dock from './Dock';

import '../../styles/SukhjitSingh.css'

import GithubLogo from '../../assets/github.png'
import GmailLogo from '../../assets/gmail.png'

const SUKHJIT_AVATAR = 'https://avatars1.githubusercontent.com/u/18251293?s=400&u=1ee2922f2dd90d94bb4efbec7cc815ef510a0ad7&v=4'

export default class Profile extends Component {
  render() {
    return (
      <div className="main-container-sukhjit">
        <div className="About">
          <div className="AboutLeftContainer">
            <img className="avatar" src={SUKHJIT_AVATAR} />
          </div>
          <div className="AboutRightContainer">
            <p className="AboutText">
              Hello, My name is Sukhjit Singh. 
              I am graduating in summer of 2018, major in Compuer Sciene with a Math minor. 
              I love watching Marvel and DC, huge fan of Batman.
          </p>
          </div>
        </div>
        <Dock active={'profile'} />
      </div>
    )
  }
}