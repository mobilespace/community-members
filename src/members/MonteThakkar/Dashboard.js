import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';

import '../../styles/MonteThakkar.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="main-container">
        <Dock />
      </div>
    );
  }
}
