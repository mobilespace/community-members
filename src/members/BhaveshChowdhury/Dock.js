import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/BhaveshChowdhury.css';
const BHAVESH_AVATAR = 'https://avatars3.githubusercontent.com/u/13439148?s=460&v=4'
export default class Dock extends Component {
    render() {
        const { active } = this.props
        return (
            // <div className="links-container-dashboard">
            //     <div className="avatar-container-dashboard">
            //         <img className="avatar-dashboard" src={BHAVESH_AVATAR} />
            //     </div>
            //     <div className="title-dashboard">Bhavesh Chowdhury</div>
            //     <div className="links-dashboard">
            //         <Link to="/bhavesh/dashboard" className="link">
            //             <h3 className={active === 'dashboard' ? 'active-link' : ''}>Dashboard</h3>
            //         </Link>
            //         <Link to="/bhavesh/portfolio" className="link">
            //             <h3 className={active === 'portfolio' ? 'active-link' : ''}>Portfolio</h3>
            //         </Link>
            //         <Link to="/bhavesh/profile" className="link">
            //             <h3 className={active === 'profile' ? 'active-link' : ''}>Profile</h3>
            //         </Link>
            //     </div>
            // </div>
            <div className="container-dock-b" >
                <div className="links-container-b">
                    <div className="avatar-container-b">
                        <img className="avatar-dock" src={BHAVESH_AVATAR} />
                    </div>
                    <div className="title-dock">Bhavesh Chowdhury</div>
                    <div className="links-dock">
                        <Link to="/bhavesh/dashboard" className="link">
                            <h3 className={active === 'dashboard' ? 'active-link' : ''}>Dashboard</h3>
                        </Link>
                        <Link to="/bhavesh/portfolio" className="link">
                            <h3 className={active === 'portfolio' ? 'active-link' : ''}>Portfolio</h3>
                        </Link>
                        <Link to="/bhavesh/profile" className="link">
                            <h3 className={active === 'profile' ? 'active-link' : ''}>Profile</h3>
                        </Link>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Link to="/" className="link">
                            <h3>Logout</h3>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
