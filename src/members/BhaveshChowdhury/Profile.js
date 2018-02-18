import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock'
import '../../styles/BhaveshChowdhury.css'
import LeftArrow from '../../assets/left-arrow.png';
import TwitterLogo from '../../assets/twitter.png'
import GithubLogo from '../../assets/github.png'
import GmailLogo from '../../assets/gmail.png'

const BHAVESH_AVATAR = 'https://avatars3.githubusercontent.com/u/13439148?s=460&v=4'

export default class Profile extends Component {
    render() {
        return (
            <div className="main-container-b">
                <div className="profile-container-b">
                    <div className="row-container-b-left">
                        <Dock active="profile" />
                    </div>
                    <div className="row-container-b-right">
                        <div className="info-profile-container-b">
                            <p className="IntroHello-b">About me</p>
                            <p className="AboutText-b">Hi, I'm Bhavesh Chowdhury, a sophomore pursuing B.S in Computer Science at SFSU. I am a hackathon freak and have attended a lot of them. I am also passionate about creating technology products and designing user experiences. I strive for magnificence in each duty I do while learning however much as could be expected amid the procedure.</p>
                            <p className="AboutText-b">
                                When I'm not working, I like to play games, watch TV shows (Breaking Bad 👨‍🔬) and design. I also love discussing future project ideas and listening to music.</p>
                            <p className="AboutText-b">
                                Currently, I am the TA for <a href="https://github.com/mobilespace/Season2#season-2---looking-ahead" target="_Blank" className="LinkText-b" rel="noopener noreferrer">MobileSpace Season 2</a> .</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
