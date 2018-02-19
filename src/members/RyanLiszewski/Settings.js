import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../../styles/RyanLiszewski.css';

import Dock from './Dock';
import Page from './Page';

export default class Settings extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      originalPassword: '',
      newPassword: '', 
      error: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    if( event.target.name === "originalPassword"){
      this.setState({ originalPassword: event.target.value })
    } else {
      this.setState({ newPassword: event.target.value })
    }
  }

  handleSubmit(event) {
    const { originalPassword, newPassword } = this.state;

    if(originalPassword === newPassword && originalPassword !== '') {
     localStorage.setItem('password', newPassword);
    }
  }

  render(){
    const authenticated = localStorage.getItem('authenticated');

    if(authenticated === "false" || authenticated === null){
      return <Redirect to='/ryan/locked'/>
    }

    const {originalPassword, 
      newPassword, 
      passwordCheck, 
      error} = this.state

    return(
      <div className="main-container-ryan">
        <div className="settings-container-ryan">
        <div className="password-container">
            <div className="password-field-container">
            <label className="field field_type2">
              <input className="field__input" 
              placeholder="You know this."
              name="originalPassword" value={originalPassword}
              onChange={this.handleChange.bind(this)}

            />
              <span className="field__label-wrap">
                <span className="field__label">Enter your old password</span>
              </span>
            </label>
          </div>

          <div className="password-field-container">
            <label className="field field_type2">
              <input className="field__input" 
              placeholder="Not password, please."
              name="newPassword" value={newPassword}
              onChange={this.handleChange.bind(this)}
            />
              <span className="field__label-wrap">
                <span className="field__label">Enter your new password</span>
              </span>
            </label>
          </div>
            <button className="submit-button"
              onClick={this.handleSubmit}
            > 
            </button>
        </div>
      </div>
      <Dock active='settings'/>
      </div>
    );
  }
}


