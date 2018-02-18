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
              <div className="Emanuel-chart-container-2">
           </div> 
           <div className="Emanuel-chart-container-3">
           <h3>My JSX knowledge</h3>
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
              
       </div>  
          </div>
        <Dock active={'dashboard'} />
       </div>
    );
}
}
