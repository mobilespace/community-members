import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { VictoryTheme, VictoryChart, VictoryPie, VictoryBar, VictoryArea } from 'victory';

import '../../styles/RyanLiszewski.css'; 

import Dock from './Dock';
import { VictoryScatter } from 'victory';
import Authenticated from './Authenticated';

const rapData = [
  {name: "Aesop Rock", unique_words: 7392},  
  {name: "GZA", unique_words: 6426},
  {name: "Kool Kieth", unique_words: 6238},
  {name: "CunninLynguists", unique_words: 7392},
];

export default class Dashboard extends Component {

  render () {
    const authenticated = localStorage.getItem('authenticated');

    if(authenticated === "false" || authenticated === null){
      return <Redirect to='/ryan/locked'/>
    }
  
    return (
      <div className="main-container-ryan"> 
       <div className="data-container-ryan">
        </div>

      <div className="dashboard-container-ryan">
        <div className="chart-row-container-1">
          <div className="chart-container-1">
            <VictoryChart
              theme={VictoryTheme.material}
            >
            <VictoryScatter
              style={{ data: { fill: "#c43a31" }}}
              size={10}
              data = {rapData}
              x="name"
              y="unique_words"
            />
            </VictoryChart>
          </div> 
        </div>
        <div className="chart-row-container-2">
          <div className="chart-container-2"> 
            <VictoryPie 
              theme={VictoryTheme.material}
              animate = {{
                 easing: "bounce",
                 onLoad: {duration: 1000}
              }}
            />
          </div>
          <div className="chart-container-3"> 
            <VictoryChart 
              theme={VictoryTheme.material}
            >
              <VictoryBar
                animate = {{
                  easing: "bounce",
                  onLoad: {duration: 1000}
                }}
              />
            </VictoryChart>
          </div>
          <div className="chart-container-4"> 
              <VictoryChart
                theme={VictoryTheme.material}
              >
                 <VictoryArea
                />
              </VictoryChart>
          </div> 
        </div>
      </div>  
      <Dock active='dashboard'/>
      </div>
    ); 
  }
}
