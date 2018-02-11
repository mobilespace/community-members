import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { VictoryBar } from 'victory';
import '../../styles/GirishRawat.css';


const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div class="area"></div><nav class="main-menu">
          <ul>
            <li>
              <a href="/girish/profile">
                <i class="fa fa-home fa-2x"></i>
                <span class="nav-text">
                  Profile
                        </span>
              </a>

            </li>

            <li class="has-subnav">
              <a href="/girish/portfolio">
                <i class="fa fa-list fa-2x"></i>
                <span class="nav-text">
                  Portfolio
                        </span>
              </a>

            </li>

            <li>
              <a href="/girish/graphs">
                <i class="fa fa-bar-chart-o fa-2x"></i>
                <span class="nav-text">
                  Graphs and Statistics
                        </span>
              </a>
            </li>
          </ul>

            <ul class="logout">

              <li>
                <a href="/">
                  <i class="fa fa-power-off fa-2x"></i>
                  <span class="nav-text">
                  
                    Exit
                    
                        </span>
                </a>
              </li>

            </ul>
            
        </nav>
      </div>
    )
  }
}