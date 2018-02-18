
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../styles/EmanuelSaunders.css'

import CloseArrow from '../assets/close.png';
import LockIcon from '../assets/lock.png'

export default class EmanuelSaundersPortal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phrase: '',
      redirect: false,
      error: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();

    this.setState({ phrase: event.target.value, error: null })
  }

  handleSubmit(event) {
    const { phrase } = this.state

    if (phrase === 'music' || phrase === 'Music') {
      this.setState({ redirect: true })
    } else {
      this.setState({ error: 'Invalid Answer' })
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
      return <Redirect to='/Emanuel' />
    }

    return (
      <div className="Emanuel-portal-container">
        <Link to="/" className="back-arrow-container">
          <img className="close-icon" src={CloseArrow} />
        </Link>
        <div className="lock-container">
        <div className="body">
        <div class="glitch" data-text="LOCKED">LOCKED</div> 
        </div>
          <div className="lock-input-container">
            <form onSubmit={this.handleSubmit}>
              <input type="text"
                className={`Emanuel-phrase-input ${this.errorClass()}`}
                name="phrase" value={phrase}
                placeholder="Enter the Code"
                onChange={this.handleChange.bind(this)}
              />
            </form>
            {error != null && <div className="lock-error-message">ACCESS DENIED</div>}
          </div>
        </div>
      </div>
    );
  }
}
