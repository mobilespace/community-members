import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../styles/BhaveshChowdhury.css'

import LeftArrow from '../assets/left-arrow.png';

const BHAVESH_AVATAR = 'https://avatars3.githubusercontent.com/u/13439148?s=460&v=4'

export default class BhaveshChowdhury extends Component {
    render() {
        return (
            <div className="main-container">
                <Link to="/" className="back-arrow-container">
                    <img className="back-arrow-icon" src={LeftArrow}/>
                </Link>
                <div className="avatar-container">
                    <img className="avatar" src={BHAVESH_AVATAR}/>
                </div>
                <div className="title">Bhavesh Chowdhury</div>
                <div className="subtitle">Breaker of Chains</div>
                <div className="links-container">
                    <a href="https://github.com/bhaveshc789" className="link">
                        <img className="links-icon" src="http://bogas04.github.io/img/github.svg"/>
                    </a>
                    <a href="" className="link">
                        <img
                            className="links-icon"
                            src="http://www.freeiconspng.com/uploads/twitter-icon-download-18.png"/>
                    </a>
                    <a
                        href="mailto:bhaveshchow20@gmail.com"
                        target="_top"
                        className="link">
                        <img
                            className="links-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"/>
                    </a>
                </div>
            </div>
        );
    }
}
