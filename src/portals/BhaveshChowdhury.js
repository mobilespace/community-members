import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import ReactPasswordStrength from 'react-password-strength';

import '../styles/BhaveshChowdhury.css'

import CloseArrow from '../assets/close.png';
import LockIcon from '../assets/lock.png'

export default class BhaveshChowdhuryPortal extends Component {

    state = {passLength: 0}
    changeCallback = state => this.setState({passLength: state.password.length})

    clear = () => this.ReactPasswordStrength.clear()

    render() {
        // const {phrase, redirect, error} = this.state

        // if (redirect) {
        //     return <Redirect to='/bhavesh'/>
        const inputProps = {
            placeholder: "Enter password",
            autoFocus: true,
            // className: 'another-input-prop-class-name',
        };

        return (
            <div className="portal-container">
                <Link to="/" className="back-arrow-container">
                    <img className="close-icon" src={CloseArrow}/>
                </Link>
                <div className="lock-container">
                    <img className="lock-icon" src={LockIcon}/>
                    <div className="lock-input-container-b">
                        {/* <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                className={`phrase-input ${this.errorClass()}`}
                                name="phrase"
                                value={phrase}
                                placeholder="Enter secret phrase"
                                onChange={this
                                .handleChange
                                .bind(this)}/>
                        </form> */}
                        <ReactPasswordStrength
                            minLength={6}
                            inputProps={{ ...inputProps, id: 'inputPassword2' }}
                            // defaultValue="defaultValue"
                        />
                    </div>
                        {/* {error != null && <div className="lock-error-message">ACCESS DENIED</div>} */}
                    </div>
                </div>
        );
    }
}
