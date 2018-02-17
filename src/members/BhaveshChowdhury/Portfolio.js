import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import { ENV } from '../../utils';

import '../../styles/BhaveshChowdhury.css'

import LeftArrow from '../../assets/left-arrow.png';

import LinkIcon from '../../assets/link.png'
import ResumeIcon from '../../assets/resume.png'

export default class Portfolio extends Component {
    render() {
        return (
            <div className="main-container-portfolio">
                <Link to="/bhavesh/dashboard" className="back-arrow-container">
                    <img className="back-arrow-icon" src={LeftArrow} />
                </Link>
                <div className="portfolio-container">
                    <div className="link-row">
                        <img className="link-icon" src={LinkIcon}></img>
                        <a className="link-title" href="http://bhavesh.xyz" target="_blank">bhavesh.xyz</a>
                    </div>
                    <div className="link-row">
                        <img className="link-icon" src={ResumeIcon}></img>
                        <a href="http://bhavesh.xyz/Resume_Bhavesh_Chowdhury.pdf" className="link-title" target="_blank">resume</a>
                    </div>
                </div>
                {/* <Dock active={'portfolio'} /> */}
            </div>
        );
    }
}
