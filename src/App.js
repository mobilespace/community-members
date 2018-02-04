import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/App.css';

// List of members
const MONTE_AVATAR = 'https://avatars2.githubusercontent.com/u/7840686?s=400&v=4'
const SUKHJIT_AVATAR = 'https://avatars1.githubusercontent.com/u/18251293?s=400&u=1ee2922f2dd90d94bb4efbec7cc815ef510a0ad7&v=4'

export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="title"><a href="http://mobilespace.xyz/" className="link">MobileSpace</a> Community Members</div>
        <div className="landing-page-avatar-container">
          <Link to="/monte">
            <img className="landing-page-avatar" src={MONTE_AVATAR} />
          </Link>
          <Link to="/sukhjit">
            <img className="landing-page-avatar" src={SUKHJIT_AVATAR} />
          </Link>
        </div>
      </div>
    );
  }
}
