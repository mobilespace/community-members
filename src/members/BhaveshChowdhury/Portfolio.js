import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// import { ENV } from '../../utils';

import '../../styles/BhaveshChowdhury.css'

import LeftArrow from '../../assets/left-arrow.png';
import Dock from './Dock'
import LinkIcon from '../../assets/link2.png'
import ResumeIcon from '../../assets/resume2.png'

export default class Portfolio extends Component {
    render() {
        return (
            <div className="main-container-b">
                <div className="portfolio-container-b">
                    <div className="row-container-b-left">
                            <Dock active="portfolio" />
                    </div>
                    <div className="row-container-b-right">
                       
                            <div className="link-row">
                                <img className="link-icon" src={LinkIcon}></img>
                                <a className="link-title-b" href="http://bhavesh.xyz" target="_blank">bhavesh.xyz</a>
                            </div>
                            <div className="link-row">
                                <img className="link-icon" src={ResumeIcon}></img>
                                <a href="http://bhavesh.xyz/Resume_Bhavesh_Chowdhury.pdf" className="link-title-b" target="_blank">resume</a>
                            </div>
                        
                    </div>
                </div>
                {/* <Dock active={'portfolio'} /> */}
            </div>
        );
    }
}
