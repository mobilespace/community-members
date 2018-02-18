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

const barData = [
  { skill: 1, skill_level: 6 },
  { skill: 2, skill_level: 2 },
  { skill: 3, skill_level: 1 },
  { skill: 4, skill_level: 4 },
  { skill: 5, skill_level: 8 },
  { skill: 6, skill_level: 4 },
  { skill: 7, skill_level: 1 }
];

const polarGraphData =[
  { x: 72, y: 7 },
  { x: 144, y: 5 },
  { x: 216, y: 4 },
  { x: 288, y: 4 },
  { x: 360, y: 2 }
];

export default class Dashboard extends Component{

  setRating(x) {
    if(x === 10) {
      return 'Expert'
    } else if (x === 8) {
      return 'Proficient'
    } else if (x === 6) {
      return 'Competent'
    } else if (x === 4) {
      return 'Advanced beginner'
    } else if (x === 2) {
      return 'Novice'
    } else {
      return 'Novice'
    }
  }

  render(){
    return(
      <div className="main-container-nicholas">
        <div className="dashboard-container-nicholas">
          <div className="chart-row-container-nicholas">
            <div className="chart-container-nicholas container-1-nicholas">
            <h6 className="container-heading-nicholas">Languages</h6>
            <VictoryChart domainPadding={20}>
                <VictoryAxis
                  tickValues={[1, 2, 3, 4, 5, 6, 7]}
                  tickFormat={["C++","CSS", "Express", "HTML", "Java", "Javascript","React"]}
                />
                <VictoryAxis
                  dependentAxis
                  tickFormat={(x) => (this.setRating(x))}
                />
                <VictoryBar
                  data={barData}
                  x="skill"
                  y="skill_level"
                />
              </VictoryChart>
            </div>

            <div className="chart-container-nicholas container-2-nicholas">
            <h6 className="container-heading-nicholas">No Clue</h6>
              <VictoryChart polar
                theme={VictoryTheme.material}
              >
              <VictoryArea data={polarGraphData}/>
              <VictoryPolarAxis 
                tickValues={[72, 144, 216, 288, 360]}
                labelPlacement="vertical"
              />
              </VictoryChart>
            </div>

          </div>

          <div className="chart-row-container-nicholas">
            <div className="chart-container-nicholas container-3-nicholas">
            <h6 className="container-heading-nicholas">Click Me</h6>
              <VictoryVoronoi
                style={{ data: { stroke: "#0072ff", strokeWidth: 2 } }}
                events={[{
                  target: "data",
                  eventHandlers: {
                    onClick: () => {
                      return [{
                        target: "data",
                        mutation: (props) => {
                          const fill = props.style && props.style.fill;
                          return fill === "#16F5C4" ? null : { style: { fill: "#16F5C4" } };
                        }
                      }];
                    }
                  }
                }]}
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 40 },
                  { x: 3, y: 5 },
                  { x: 4, y: -38 },
                  { x: 5, y: 10 },
                  { x: 6, y: 9 },
                  { x: 7, y: 72 },
                  { x: 8, y: 14 },
                  { x: 9, y: -16 },
                  { x: 10, y: -6 },
                  { x: 11, y: 22 },
                  { x: 12, y: 24 },
                  { x: 13, y: 58 },
                  { x: 14, y: -50 },
                ]}
              />
            </div>

            <div className="chart-container-nicholas container-4-nicholas">
            <h6 className="container-heading-nicholas">Favorite Food</h6>
              <VictoryPie
                data={[
                  { x: "Pho", y: 35 },
                  { x: "Fried Chicken", y: 40 },
                  { x: "Ramen", y: 55 }
                ]}
              />
            </div>
          </div>
          <div className='dock-row-container-nicholas'>
            <Dock active={'dashboard'}/>
          </div>
        </div>
      </div>
    );
  }
}