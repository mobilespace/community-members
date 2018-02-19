import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/App.css';

// List of members
const MONTE_AVATAR = 'https://avatars2.githubusercontent.com/u/7840686?s=400&v=4'
const MITUL_AVATAR = 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/18556546_1553987881278489_849408995015005895_o.jpg?oh=bb65219475a9cbac85ca7090e7ee877b&oe=5ADE398B'
const WILLIAM_AVATAR = 'https://avatars3.githubusercontent.com/u/36139326?s=460&v=4'
const TEODORA_AVATAR ='https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c44.0.320.320/p320x320/20914645_1579156895438534_1027285013181250707_n.jpg?oh=0ff1b3c4c8bc8e00edb84cecd660d0fe&oe=5B1C897A'
const PRAKASH_AVATAR = 'https://avatars.githubusercontent.com/makkhay'
const EMANUEL_AVATAR = 'https://scontent-lax3-2.cdninstagram.com/vp/1ee634d2bdf29d5a327858a15ccfdf42/5B26F2E8/t51.2885-19/s150x150/18160691_1198139890329419_5383374010954285056_a.jpg'
const JAKHONGIR_AVATAR = 'https://avatars0.githubusercontent.com/u/25942541?s=460&v=4'
const SUKHJIT_AVATAR = 'https://avatars1.githubusercontent.com/u/18251293?s=400&u=1ee2922f2dd90d94bb4efbec7cc815ef510a0ad7&v=4'
const RYAN_AVATAR = 'https://avatars3.githubusercontent.com/u/5275250?s=460&v=4'
const THOMAS_AVATAR = 'http://thomaszhu.com/resources/thomas_avatar.jpeg'
const BHAVESH_AVATAR = 'https://avatars3.githubusercontent.com/u/13439148?s=460&v=4'
const GIRISH_AVATAR = 'https://avatars2.githubusercontent.com/u/6697235?s=460&v=4'
const AFFAAN_AVATAR = 'https://avatars0.githubusercontent.com/u/32111151?s=460&v=4'
const NICHOLAS_AVATAR = 'https://avatars1.githubusercontent.com/u/23561635?s=460&v=4'
const KARAN_AVATAR = 'https://avatars1.githubusercontent.com/u/19352928?s=460&v=4'

export default class App extends Component {
  render() {
    return (

      <div className="main-container">
        <div className="title"><a href="http://mobilespace.xyz/" className="main-link">MobileSpace</a> Community Members</div>
        <div className="landing-page-avatar-container">
          <Link to="/bhavesh/locked">
            <img className="landing-page-avatar" src={BHAVESH_AVATAR} />
          </Link>
          <Link to="/monte/locked">
            <img className="landing-page-avatar" src={MONTE_AVATAR} />
          </Link>
          <Link to="/mitul/locked">
            <img className="landing-page-avatar" src={MITUL_AVATAR} />
          </Link>
          <Link to="/william">
            <img className="landing-page-avatar" src={WILLIAM_AVATAR} />
          </Link>
          <Link to="/teodora/locked">
            <img className="landing-page-avatar" src={TEODORA_AVATAR} />
          </Link>
          <Link to="/prakash/locked">
            <img className="landing-page-avatar" src={PRAKASH_AVATAR} />
          </Link>
          <Link to="/emanuel/locked">
            <img className="landing-page-avatar" src={EMANUEL_AVATAR} />
          </Link>
          <Link to="/affaan">
            <img className="landing-page-avatar" src={AFFAAN_AVATAR} />
          </Link>
          <Link to="/nicholas/locked">
            <img className="landing-page-avatar" src={NICHOLAS_AVATAR} />
          </Link>
          <Link to="/jakhongir/locked">
            <img className="landing-page-avatar" src={JAKHONGIR_AVATAR} />
          </Link>
          <Link to="/sukhjit/locked">
            <img className="landing-page-avatar" src={SUKHJIT_AVATAR} />
          </Link>
          <Link to="/mitul">
            <img className="landing-page-avatar" src={MITUL_AVATAR} />
          </Link>
          <Link to="/ryan/locked">
            <img className="landing-page-avatar" src={RYAN_AVATAR} />
          </Link>
          <Link to="/thomas/locked">
            <img className="landing-page-avatar" src={THOMAS_AVATAR} />
          </Link>
          <Link to="/girish">
            <img className="landing-page-avatar" src={GIRISH_AVATAR} />
          </Link>
          <Link to="/karan">
            <img className="landing-page-avatar" src={KARAN_AVATAR} />
          </Link>
        </div>
      </div>
    );
  }
}
