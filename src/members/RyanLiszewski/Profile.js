import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import '../../styles/RyanLiszewski.css';

import Dock from './Dock'

export default class Profile extends Component {

  render() {
    const authenticated = sessionStorage.getItem('authenticated');

    if(!authenticated){
      return <Redirect to='/ryan/locked'/>
    }

    return(
      <div className="main-container-ryan">
        <div className="profile-container-ryan">
        </div>
      
      <Dock/>
      </div>
    );
  }

}
