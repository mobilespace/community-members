import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  VictoryBar, VictoryChart, VictoryAxis, VictoryTheme,
  VictoryStack, VictoryArea, VictoryLabel, VictoryPie, 
  VictoryVoronoi, VictoryPolarAxis, VictoryCandlestick
} from 'victory';

import Dock from './Dock';

import '../../styles/NicholasSzeto.css';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

export default class Dashboard extends Component{
  render(){
    return(
      <div className="main-container-nicholas">
        <div className="dashboard-container-nicholas">
          <div className="chart-row-container-nicholas">
            <div className="chart-container-nicholas container-1-nicholas">
            <VictoryBar
            theme={VictoryTheme.material}
              data={data}
              // data accessor for x values
              x="quarter"
              // data accessor for y values
              y="earnings"
            />
            </div>

            <div className="chart-container-nicholas container-2-nicholas">
            <VictoryChart polar theme={VictoryTheme.material} innerRadius={50}>
              <VictoryPolarAxis/>
              <VictoryPolarAxis dependentAxis tickValues={[1, 3, 5]} axisAngle={40}/>
              <VictoryBar data={data} style={{ data: { fill: "#020E4E", width: 30 } }}/>
            </VictoryChart>
            </div>

          </div>

        
          <div className="chart-row-container-nicholas">
            <div className="chart-container-nicholas container-3-nicholas">
            <VictoryCandlestick
              data = { [
                {x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0},
                {x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5},
                {x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10},
                {x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7},
                {x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5}
              ]}
              candleColors={{ positive: "#020E4E", negative: "#c43a31" }}
            />
            </div>

            <div className="chart-container-nicholas container-4-nicholas">
              <VictoryPie
                data={[
                  { x: "Cats", y: 35 },
                  { x: "Dogs", y: 40 },
                  { x: "Birds", y: 55 }
                ]}
              />

            </div>
          </div>
        </div>
        <Dock active={'dashboard'}/>
      </div>
    );
  }
}