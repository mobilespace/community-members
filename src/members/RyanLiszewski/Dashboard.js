import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/RyanLiszewski.css'; 

import Dock from './Dock';


export default class Dashboard extends Component {


  render () {
    return (
      <div className="main-container-ryan"> 
       <div className="data-container-ryan">
       </div>
       <div className="dashboard-container-ryan">
        </div>  
      
      <Dock/>
      </div>
    ); 
  }
}
