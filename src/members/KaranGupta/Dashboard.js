import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  VictoryBar, VictoryChart, VictoryAxis, VictoryTheme,
  VictoryStack, VictoryArea, VictoryLabel, VictoryPie, VictoryVoronoi
} from 'victory';

import Dock from './Dock';

import '../../styles/KaranGupta.css';

const data = [
  { skill: 1, skill_level: 6 },
  { skill: 2, skill_level: 4 },
  { skill: 3, skill_level: 8 },
  { skill: 4, skill_level: 2 },
  { skill: 5, skill_level: 5 },
  { skill: 6, skill_level: 10 },
  { skill: 7, skill_level: 8 }
];

export default class Dashboard extends Component {
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

  render() {
    return (
      <div className="main-container">
        <div className="dashboard-container">
          <div className="chart-row-container">
            <div className="chart-container container-1">
              <VictoryPie
                padAngle={3}
                innerRadius={100}
                data={[
                  { x: "Eat", y: 10 },
                  { x: "Sleep", y: 20 },
                  { x: "Code", y: 70 },
                  { x: "Girlfriend", y: 1 }
                ]}
              />
            </div>
            <div className="chart-container container-2">
              <VictoryChart domainPadding={20}>
                <VictoryAxis
                  tickValues={[1, 2, 3, 4, 5, 6, 7]}
                  tickFormat={["CSS", "HTML", "React", "Express", "MySQL", "RNative", "iOS"]}
                />
                <VictoryAxis
                  dependentAxis
                  tickFormat={(x) => (this.setRating(x))}
                />
                <VictoryBar
                  data={data}
                  x="skill"
                  y="skill_level"
                />
              </VictoryChart>
            </div>
          </div>
          <div className="chart-row-container">
            <div className="chart-container container-3">
              <h3 className="container-heading">Click Me</h3>
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
                  { x: 2, y: 100 },
                  { x: 3, y: 5 },
                  { x: 4, y: -38 },
                  { x: 5, y: 7 },
                  { x: 6, y: 9 },
                  { x: 7, y: 12 },
                  { x: 8, y: 14 },
                  { x: 9, y: -16 },
                  { x: 10, y: 8 },
                  { x: 11, y: 22 },
                  { x: 12, y: 24 },
                  { x: 13, y: 108 },
                  { x: 14, y: -50 },
                ]}
              />
            </div>
            <div className="chart-container container-4">
              <VictoryStack>
                <VictoryArea
                  interpolation="natural"
                  data={[{ x: "a", y: 2, name: '' }, { x: "b", y: 10, name: 'Freshman' }, { x: "c", y: 15, name: '' }]}
                  labels={(datum) => datum.name}
                  labelComponent={<VictoryLabel renderInPortal dy={0} />}
                />
                <VictoryArea
                  interpolation="natural"
                  data={[{ x: "a", y: 3, name: '' }, { x: "b", y: 10, name: 'Sophmore' }, { x: "c", y: 25, name: '' }]}
                  labels={(datum) => datum.name}
                  labelComponent={<VictoryLabel renderInPortal dy={0} />}
                />
                <VictoryArea
                  interpolation="natural"
                  data={[{ x: "a", y: 8, name: '' }, { x: "b", y: 16, name: 'Junior' }, { x: "c", y: 30, name: '' }]}
                  labels={(datum) => datum.name}
                  labelComponent={<VictoryLabel renderInPortal dy={0} />}
                />
                <VictoryArea
                  interpolation="natural"
                  data={[{ x: "a", y: 15, name: 'Fall' }, { x: "b", y: 22, name: 'Senior' }, { x: "c", y: 35, name: 'Summer' }]}
                  labels={(datum) => datum.name}
                  labelComponent={<VictoryLabel renderInPortal dy={0} />}
                />
              </VictoryStack>
            </div>
          </div>
        </div>
        <Dock active={'dashboard'} />
      </div>
    );
  }
}



