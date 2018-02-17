import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../../styles/BhaveshChowdhury.css'
import LeftArrow from '../../assets/left-arrow.png';
import TwitterLogo from '../../assets/twitter.png'
import GithubLogo from '../../assets/github.png'
import GmailLogo from '../../assets/gmail.png'

const BHAVESH_AVATAR = 'https://avatars3.githubusercontent.com/u/13439148?s=460&v=4'

export default class Profile extends Component {
    render() {
        return (
            <div className="main-container-portfolio">
                <Link to="/bhavesh/dashboard" className="back-arrow-container">
                    <img className="back-arrow-icon" src={LeftArrow} />
                </Link>
                <div className="About">
                    <div className="AboutLeftContainer">
                        <div className="ProfileImageContainer NoSelection">
                            <img
                                className="ProfileImage avatar-profile"
                                src={BHAVESH_AVATAR}
                                alt="Bhavesh Chowdhury"
                            />
                        </div>
                        <div className="LogosImageContainer NoSelection NoMobileHighlight">
                            <div className="LogosImageRow">
                                <a href="https://twitter.com/mthakkar_" target="_Blank" rel="noopener noreferrer">
                                    <img className="Logo"
                                        src={TwitterLogo}
                                        alt="Twitter Logo"
                                    />
                                </a>
                                <a href="https://github.com/Monte9" target="_Blank" rel="noopener noreferrer">
                                    <img className="Logo"
                                        src={GithubLogo}
                                        alt="Github Logo"
                                    />
                                </a>
                                <a href="mailto:manthan.thakkar@gmail.com?Subject=Hi%20Monte!" target="_top">
                                    <img className="Logo"
                                        src={GmailLogo}
                                        alt="Gmail Logo"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="AboutRightContainer">
                        <p className="IntroHello">About me</p>
                        <p className="AboutText">Hi, I'm Bhavesh Chowdhury and I'm a Sophomore pursuing B.S in Computer Science at SFSU. I am a hackathon freak and have attended a lot of them. I am also passionate about creating technology products and designing user experiences. I strive for magnificence in each duty I do while learning however much as could be expected amid the procedure.


            </p>
                        <p className="AboutText">
                            When I'm not working, I like to play games, watch TV shows (Breaking Bad 👨‍🔬) and design. I also love discussing future project ideas and listening to music.
            </p>
                        <p className="AboutText">
                            Currently, I am the TA for <a href="https://github.com/mobilespace/Season2#season-2---looking-ahead" target="_Blank" className="LinkText" rel="noopener noreferrer">MobileSpace Season 2</a> .
            </p>
                    </div>
                </div>

            </div>
        );
    }
}
