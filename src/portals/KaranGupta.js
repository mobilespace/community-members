import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../styles/KaranGupta.css'

import CloseArrow from '../assets/close.png';
import LockIcon from '../assets/lock.png'

export default class KaranGuptaPortal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phrase: '',
      redirect: false,
      error: null,
      tries: 0,
      show_hint: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({ phrase: event.target.value, error: null })
  }

  handleSubmit(event) {
    const { phrase, tries } = this.state

    if (phrase === 'damn' || phrase === 'DAMN' || phrase === 'Damn') {
      this.setState({ redirect: true, tries: tries + 1 })
    } else {
      this.setState({ error: 'Access Denied', tries: tries + 1 })
    }
    event.preventDefault();
  }

  errorClass() {
    const { error } = this.state

    return error != null ? 'error' : ''
  }

  render() {
    const { phrase, redirect, error, tries } = this.state

    if (redirect) {
      return <Redirect to='/karan/dashboard' />
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
              <input type="text"
                className={`phrase-input ${this.errorClass()}`}
                name="phrase" value={phrase}
                placeholder="Enter secret phrase"
                onChange={this.handleChange.bind(this)}
              />
            </form>
            {error != null && <div className="lock-error-message">ACCESS DENIED</div>}
            {tries >= 1 && <div className="tries-message"><b>hint:</b> try "Damn" 😉</div>}
          </div>
        </div>
      </div>
    );
  }
}
