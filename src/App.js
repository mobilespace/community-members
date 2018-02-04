import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/App.css';

// List of members
const MONTE_AVATAR = 'https://avatars2.githubusercontent.com/u/7840686?s=400&v=4'
const EMANUEL_AVATAR = 'https://scontent-lax3-2.cdninstagram.com/vp/1ee634d2bdf29d5a327858a15ccfdf42/5B26F2E8/t51.2885-19/s150x150/18160691_1198139890329419_5383374010954285056_a.jpg'
export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="title"><a href="http://mobilespace.xyz/" className="link">MobileSpace</a> Community Members</div>
        <div className="landing-page-avatar-container">
          <Link to="/monte">
            <img className="landing-page-avatar" src={MONTE_AVATAR} />
          </Link>
          <Link to="/emanuel">
            <img className="landing-page-avatar" src={EMANUEL_AVATAR} />
          </Link> 
        </div>
      </div>
    );
  }
}
