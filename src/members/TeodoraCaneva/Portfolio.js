import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';
import { ENV } from '../../utils';

import '../../styles/TeodoraCaneva.css'
import LeftArrow from '../../assets/left-arrow.png'
import PENDING_GIF from '../../assets/construction.gif'


export default class Portfolio extends Component {
  render() {
    return (
      <div className="main-container">
      <Link to="/teodora/dashboard" className="back-arrow-container">
          <img className="back-arrow-icon" src={LeftArrow} />
        </Link>
      <img className="gif" src={PENDING_GIF} />
      <p>via GIPHY</p>
      <div><Dock active={'dashboard'} /></div>    
      </div> //test if css works
    )
  }
}
