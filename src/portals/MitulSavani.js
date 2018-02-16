import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactPasswordStrength from 'react-password-strength';

import '../styles/MitulSavani.css'

import CloseArrow from '../assets/close.png';
import LockIcon from '../assets/lock.png'

export default class MitulSavaniPortal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phrase: '',
      redirect: false,
      error: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event)

    this.setState({ phrase: event.password, error: null })
  }

  handleSubmit(event) {
    const { phrase } = this.state

    if (phrase === 'curious' || phrase === 'passionate') {
      this.setState({ redirect: true })
    } else {
      this.setState({ error: 'Access Denied' })
    }

    event.preventDefault();
  }

  errorClass() {
    const { error } = this.state

    return error != null ? 'error' : ''
  }

  render() {
     const { phrase, redirect, error } = this.state

    if (redirect) {
      return <Redirect to='/mitul/dashboard' />
    }

    return (
      <div className="portal-container">
        <Link to="/" className="back-arrow-container">
          <img className="close-icon" src={CloseArrow} />
        </Link>
        <div className="lock-container">
          <img className="lock-icon" src={LockIcon} />
          <div className="lock-input-container">
            <form onSubmit={this.handleSubmit}>
            <ReactPasswordStrength
              className="input-password-input"
              minLength={5}
              minScore={2}
              scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
              changeCallback={this.handleChange}
              inputProps={{ 
                name: "password_input", autoComplete: "off", className: "form-control"
              }}
            />
            </form>
            {error != null && <div className="lock-error-message">ACCESS DENIED</div>}
          </div>
        </div>
      </div>
    );
  }
}