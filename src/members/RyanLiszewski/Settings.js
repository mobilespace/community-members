import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../../styles/RyanLiszewski.css';

import Dock from './Dock';

export default class Settings extends Component {

  render(){

    return(
      <div className="main-container-ryan">
        <div className="settings-container-ryan">
        <div className="password-container">
            <div className="password-field-container">
            <label className="field field_type2">
              <input className="field__input" placeholder="You know this."/>
              <span className="field__label-wrap">
                <span className="field__label">Enter your old password</span>
              </span>
            </label>
          </div>

          <div className="password-field-container">
            <label className="field field_type2">
              <input className="field__input" placeholder="Not password, please."/>
              <span className="field__label-wrap">
                <span className="field__label">Enter your new password</span>
              </span>
            </label>
          </div>

          <div className="password-field-container">
            <label className="field field_type2">
              <input className="field__input" placeholder="No Mistakes."/>
              <span className="field__label-wrap">
                <span className="field__label">Renter your new password</span>
              </span>
            </label>
          </div>
        </div>
      </div>
      <Dock active='settings'/>
      </div>
    );
  }
}


