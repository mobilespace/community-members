import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  VictoryBar, VictoryChart, VictoryAxis, VictoryTheme,
  VictoryStack, VictoryArea, VictoryLabel, VictoryPie, VictoryCandlestick
} from 'victory';

import Dock from './Dock';

import '../../styles/SukhjitSingh.css';

const data = [
  { skill: 1, skill_level: 8 },
  { skill: 2, skill_level: 10 },
  { skill: 3, skill_level: 6 },
  { skill: 4, skill_level: 2 },
  { skill: 5, skill_level: 5 },
  { skill: 6, skill_level: 4 },
  { skill: 7, skill_level: 8 }
];

const sampleDataDates = [
  { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
  { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
  { x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10 },
]

export default class Dashboard extends Component {

  setRating(x) {
    if (x === 10) {
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
              <VictoryChart width={500} height={350}
                theme={VictoryTheme.material}
                domainPadding={{ x: 25 }}
                scale={{ x: "time" }}
              >
                <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`} />
                <VictoryAxis dependentAxis />
                <VictoryCandlestick
                  candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
                  data={sampleDataDates}
                />
              </VictoryChart>
            </div>
            <div className="chart-container container-2">
              <VictoryChart width={500} height={350} domainPadding={20}>
                <VictoryAxis
                  label="(Skill Type)"
                  tickValues={[1, 2, 3, 4, 5, 6, 7]}
                  tickFormat={["CSS", "HTML", "React", "Express", "MySQL", "RNative", "iOS"]}
                />
                <VictoryAxis
                  label="(Skill Level)"                
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
              <VictoryPie width={500} height={350}
                innerRadius={80}
                data={[
                  { x: 1, y: 2, label: "JS" },
                  { x: 2, y: 3, label: "CSS" },
                  { x: 3, y: 5, label: "HTML" }
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