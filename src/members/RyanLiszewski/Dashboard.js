import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { VictoryTheme, VictoryChart, VictoryPie, VictoryBar, VictoryArea } from 'victory';

import '../../styles/RyanLiszewski.css'; 

import Dock from './Dock';
import { VictoryScatter } from 'victory';

const rapData = [
  {name: "Aesop Rock", unique_words: 7392},
  {name: "GZA", unique_words: 6426},
  {name: "Kool Kieth", unique_words: 6238},
  {name: "CunninLynguists", unique_words: 7392},
];

export default class Dashboard extends Component {

  render () {
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
              size={4}
              data = {rapData}
              y="name"
              x="unique_words"
              animate = {{
                duration: 2000,
                onLoad: {duration: 1000}
              }}
            />
            </VictoryChart>
          </div> 
        </div>
        <div className="chart-row-container-2">
          <div className="chart-container-2"> 
            <VictoryPie 
              theme={VictoryTheme.material}
              animate = {{
                duration: 2000,
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
                  duration: 1000,
                  onLoad: {duration: 2000}
                }}
              />
            </VictoryChart>
          </div>
          <div className="chart-container-4"> 
              <VictoryChart
                theme={VictoryTheme.material}
              >
                <VictoryArea
                  animate = {{
                    duration: 1000,
                    onLoad: {duration: 2000}
                  }}
                />
              </VictoryChart>

          </div> 
        </div>
      </div>  
      <Dock/>
      </div>
    ); 
  }
}
