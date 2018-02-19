import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/BhaveshChowdhury.css'

import LeftArrow from '../assets/left-arrow.png';

const BHAVESH_AVATAR = 'https://avatars3.githubusercontent.com/u/13439148?s=460&v=4'

export default class BhaveshChowdhury extends Component {
    render() {
        return (
            <div className="main-container2">
                <Link to="/" className="back-arrow-container">
                    <img className="back-arrow-icon" src={LeftArrow} />
                </Link>
                {/* <div className="avatar-container">
                    <img className="avatar" src={BHAVESH_AVATAR}/>
                </div> */}
                <div className="hello-parent">
                    <svg className="hello-word" width="365" height="365" viewBox="0 0 365 365">


                        <g id="H-letter">
                            <line className="H-left-stroke" x1="17" y1="0" x2="17" y2="124" stroke="#fff" fill="none" stroke-width="34" />
                            <line className="H-mid-stroke" x1="33" y1="62" x2="68" y2="62" stroke="#fff" fill="none" stroke-width="34" />
                            <line className="H-right-stroke" x1="84" y1="0" x2="84" y2="124" stroke="#fff" fill="none" stroke-width="34" />
                        </g>

                        <g id="E-letter">
                            <line className="E-left-stroke" x1="138" y1="0" x2="138" y2="124" stroke="#fff" fill="none" stroke-width="34" />
                            <line className="E-top-stroke" x1="154" y1="17" x2="201" y2="17" stroke="#fff" fill="none" stroke-width="34" />
                            <line className="E-mid-stroke" x1="154" y1="62" x2="196" y2="62" stroke="#fff" fill="none" stroke-width="34" />
                            <line className="E-bottom-stroke" x1="154" y1="107" x2="201" y2="107" stroke="#fff" fill="none" stroke-width="34" />
                        </g>

                        <g id="L-one-letter">
                            <line className="L-one-long-stroke" x1="17" y1="153" x2="17" y2="277" stroke="#fff" fill="none" stroke-width="34" />
                            <line className="L-one-short-stroke" x1="33" y1="260" x2="77" y2="260" stroke="#fff" fill="none" stroke-width="34" />
                        </g>

                        <g id="L-two-letter">
                            <line className="L-two-long-stroke" x1="104" y1="153" x2="104" y2="277" stroke="#fff" fill="none" stroke-width="34" />
                            <line className="L-two-short-stroke" x1="120" y1="260" x2="164" y2="260" stroke="#fff" fill="none" stroke-width="34" />
                        </g>

                        <g id="O-letter">
                            <circle className="O-stroke" cx="231" cy="215" r="48" stroke="#fff" fill="none" stroke-width="31" />
                        </g>

                        <g id="red-dot">


                            <circle className="red-dot" cx="325" cy="260" r="20" fill="#fff" stroke="none" />


                            <line x1="325" y1="260" x2="325" y2="260" stroke="#000" className="red-dot" />
                        </g>


                    </svg>
                </div>

                <div className="title2">BHAVESH CHOWDHURY</div>

                <div className="links-container">
                    <a href="https://github.com/bhaveshc789" className="link">
                        <img className="links-icon" src="http://bogas04.github.io/img/github.svg" />
                    </a>
                    < a href="https://www.instagram.com/bhaveshchowdhury/" className="link">
                        <img
                            className="links-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2000px-Instagram_logo_2016.svg.png" />
                    </a>
                    <a href="mailto:bhaveshchow20@gmail.com" target="_top" className="link">
                        <img
                            className="links-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
                    </a>
                </div>

            </div>
        );
    }
}
