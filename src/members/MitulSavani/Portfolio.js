import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock';

import { ENV } from '../../utils';

import '../../styles/MitulSavani.css'

import LinkIcon from '../../assets/link.png'
import ResumeIcon from '../../assets/resume.png'

export default class Portfolio extends Component{
    render() {
        return (
            <div className="main-container">
                <div className="portfolio-container">
                    <div className="link-row">
                        <img className="link-icon" src={LinkIcon}></img>
                        <a className="link-title" href="https://mitulsavani.github.io" target="_blank">mitulsavani.com</a>
                    </div>
                    <div className="link-row">
                        <img className="link-icon" src={ResumeIcon}></img>
                        <a href={`${ENV}/MitulSavani_Resume.pdf`} className="link-title" target="_blank">resume</a>
                    </div>    
                </div>
                <Dock active={'portfolio'} />
            </div>
        );
    }
}