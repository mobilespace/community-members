import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/App.css';

// List of members

export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="title"><a href="http://mobilespace.xyz/" className="link">MobileSpace</a> Community Members</div>
        <div className="landing-page-avatar-container">

        </div>
      </div>
    );
  }
}
