import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {VictoryTheme, VictoryPie, VictoryChart, VictoryBar} from 'victory';  

import Dock from './Dock';

import '../../styles/EmanuelSaunders.css';

export default class Dashboard extends Component{

  render() {
    return (
      <div className="Emanuel-main-container">
    <div className="Emanuel-dashboard-container">
    <h1>DASHBOARD</h1>  
       <div className="Emanuel-chart-row-container">
       <div className="Emanuel-chart-container-1">
       <VictoryPie
                theme={VictoryTheme.material} 
                             
                data={[
                  { x: "Time Spent Eating Pie", y: 1 },
                  { x: "Time Spent Coding Pie Chart", y: 99 },
                ]}
              />
              </div> 
              <div className="Emanuel-chart-div-1">
           </div> 
           <div className="Emanuel-chart-container-2">
           <VictoryChart domainPadding={25}> 
           <VictoryBar 
           theme={VictoryTheme.material}
              categories={{x: ["JSX I know", "JSX required to finish this page"]}}
                data={[
                  {x:"JSX I know", y: 5},
                  {x: "JSX required to finish this page", y: 100}
                    ]}
         />
         </VictoryChart>
         
                       </div>
                       <div className="Emanuel-chart-div-2"> 
                       </div> 
                       <div className="Emanuel-chart-container-3">
           <VictoryChart domainPadding={25}> 
           <VictoryBar 
              categories={{x: ["A Bar", "Bar Raised", "Even Higher"]}}
                data={[
                  {x:"A Bar", y: 5},
                  {x: "Bar Raised", y: 10},
                  {x: "Even Higher", y: 20}
                    ]}
         />
         </VictoryChart>
         </div>
         <div className="Emanuel-chart-div-3">
         </div>
         <div className="Emanuel-chart-container-4">
           <VictoryChart domainPadding={25}> 
           <VictoryBar 
           theme={VictoryTheme.material}
              categories={{x: ["Amount of Free Time", "Time Needed to function"]}}
                data={[
                  {x:"Amount of Free time", y: 1},
                  {x: "Time Needed to function", y: 40}
                    ]}
         />
         </VictoryChart>
         </div>
       </div>  
          </div>
        <Dock active={'dashboard'} />
       </div>
    );
}
}
