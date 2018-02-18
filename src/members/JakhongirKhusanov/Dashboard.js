import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLine,
  VictoryStack, VictoryArea, VictoryLabel, VictoryPie, VictoryVoronoi
} from 'victory';

import Dock from './Dock';

import '../../styles/JakhongirKhusanov.css';

const data = [
  { skill: 1, skill_level: 4 },
  { skill: 2, skill_level: 4.5 },
  { skill: 3, skill_level: 2 },
  { skill: 4, skill_level: 4 },
  { skill: 5, skill_level: 4.5 },
  { skill: 6, skill_level: 4 },
  { skill: 7, skill_level: 10 }
];

const dataCities=[
  { year: 1, cities: 2 },
  { year: 2, cities: 3 },
  { year: 3, cities: 7 },
  { year: 4, cities: 5 },
  { year: 5, cities: 1 }
  ];

export default class Dashboard extends Component {
  setRating(x) {
    if(x === 10) {
      return 'Expert'
    } else if (x === 8) {
      return 'Proficient'
    } else if (x === 6) {
      return 'Competent'
    } else if (x == 4) {
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
                  events={[{
                    target: "data",
                    eventHandlers: {
                      onClick: () => {
                        return [
                          {
                            target: "data",
                            mutation: (props) => {
                              const fill = props.style && props.style.fill;
                              return fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
                            }
                          }, {
                            target: "labels",
                            mutation: (props) => {
                              return props.text === "clicked"  ? null : { text: "clicked" };
                            }
                          }
                        ];
                      }
                    }
                  }]}
                padAngle={3}
                innerRadius={100}
                data={[
                  { x: "Eat", y: 10 },
                  { x: "Sleep", y: 20 },
                  { x: "Code", y: 70 },
                  { x: "Sport", y: 10 },
                  { x: "Read Book", y: 20}
                ]}
              />
            </div>
            <div className="chart-container container-2">
              <VictoryChart 
                domainPadding={20}
              >
                <VictoryAxis
                  tickValues={[1, 2, 3, 4, 5, 6, 7]}
                  tickFormat={["CSS", "HTML", "React", "Java", "Python", "C++", "motivation :)"]}
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
              <h3 className="container-heading">New Cities Visited In A Year</h3>
              <VictoryChart
                // theme={VictoryTheme.material}
                domainPadding={20}
                padding={{top: 20, bottom: 60}}

              >
              <VictoryLine
                data = {dataCities}
                style={{
                  data: { stroke: "blue", strokeWidth: 10, strokeLinecap: "round" },
                  parent: { border: "1px solid #ccc"}
                }}
                x="year"
                y="cities"
                labels={(datum) => datum.y}

                />
                <VictoryAxis
                  tickValues={[1, 2, 3, 4, 5,]}
                  tickFormat={["2014", "2015", "2016", "2017", "2018"]}
                />
                <VictoryAxis
                  dependentAxis
                  tickFormat={(x) => (`${x} cities`)}                />
              </VictoryChart>
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



