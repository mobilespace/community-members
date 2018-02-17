import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  VictoryBar, VictoryChart, VictoryLabel, VictoryPie, VictoryVoronoi
} from 'victory';

import Dock from './Dock';
import '../../styles/TeodoraCaneva.css';
import CloseArrow from '../../assets/close.png';

const SLIDESHOW_AVATAR = 'https://media.giphy.com/media/m95Nrh5s7LOIrt3qGh/giphy.gif'

export default class Dashboard extends Component {

  render() {
    return (
      <div className="main-container">
        <Link to="/" className="close-icon-container">
          <img className="close-icon-dash" src={CloseArrow} alt="Close"/>
        </Link>
        <div className="dashboard-container">
          <div className="chart-row-container">
            <div className="chart-container container-1">
              <VictoryPie
                padAngle={1.5}
                innerRadius={100}
                colorScale={[ "tomato", "orange", "navy", "cyan", "#CC0066","lime","#006600" ]}
                data={[
                  { x: "Food", y: 17 },
                  { x: "Sleep", y: 15 },
                  { x: "Code", y: 20 },
                  { x: "Travel", y: 20 },
                  { x: "Neflix", y: 9 },
                  { x: "Family", y: 12 },
                  { x: "Friends", y: 12 }
                ]}
              />
            </div>
            <div className="chart-container container-2">
            <VictoryBar 
                data={[
                 {x: 1, y: 3.4, label: "C++"},
                 {x: 2, y: 4, label: "Python"},
                 {x: 3, y: 6, label: "Java"},
                 {x: 4, y: 2.3, label: "React Native"},
                 ]}
                labelComponent={
                <VictoryLabel angle={90} verticalAnchor="middle" textAnchor="end" />
                }
              /> 
            </div>
          </div>
          <div className="chart-row-container">
            <div className="chart-container container-3">
              <div class="box">
             <img className="slideshow" src={SLIDESHOW_AVATAR} />
             </div>
            </div> 
            <div className="chart-container container-4">
                  <h3 className="container-heading">Puzzle</h3>
              <VictoryVoronoi
                style={{ data: { stroke: "#0072ff", strokeWidth: 1 } }}
                events={[{
                  target: "data",
                  eventHandlers: {
                    onClick: () => {
                      return [{
                        target: "data",
                        mutation: (props) => {
                          const fill = props.style && props.style.fill;
                          return fill === "#d4ffea" ? null : { style: { fill: "#d4ffea" } };
                        }
                      }];
                    }
                  }
                }]}
                data={[
                  { x: 1, y: 2 },{ x: 2, y: 100 },
                  { x: 3, y: 5 },{ x: 4, y: -38 },
                  { x: 10, y: 7 }, { x: 6, y: 9 },
                  { x: 7, y: 30 },{ x: 8, y: 14 },
                  { x: 9, y: -16 },{ x: 10, y: 8 },
                  { x: 11, y: 22 },{ x: 12, y: 24 },
                  { x: 13, y: 138 },{ x: 14, y: -60 },
                ]}
              />


            </div>
          </div>
        </div>
        <Dock active={'dashboard'} /> 
      </div>
    ); 
  } 
}

