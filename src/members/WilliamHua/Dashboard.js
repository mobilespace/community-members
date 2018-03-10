import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {VictoryTheme, VictoryPie, VictoryChart, VictoryBar} from 'victory';  

import Dock from './Dock';

import '../../styles/WilliamHua.css';

export default class Dashboard extends Component{

  render() {
    return (
      <div className="William-main-container">
    <div className="William-dashboard-container">
    <h1>DASHBOARD</h1>  
       <div className="William-chart-row-container">
       <div className="William-chart-container-1">
       <VictoryPie
                theme={VictoryTheme.material} 
                             
                data={[
                  { x: "Actual Searching on Google", y: 5 },
                  { x: "Too Lazy to type .com", y: 95 },
                ]}
              />
              </div> 
              <div className="William-chart-div-1">
           </div> 
           <div className="William-chart-container-2">
           <VictoryChart domainPadding={25}> 
           <VictoryBar 
           theme={VictoryTheme.material}
              categories={{x: ["Time Actually Working", "Goofing OFf"]}}
                data={[
                  {x:"Time Actually Working", y: 20},
                  {x: "Goofing Off", y:80 }
                    ]}
         />
         </VictoryChart>
         
                       </div>
                       <div className="William-chart-div-2"> 
                       </div> 
                       <div className="William-chart-container-3">
           <VictoryChart domainPadding={25}> 
           <VictoryBar 
              categories={{x: ["Small", "Medium", "Large"]}}
                data={[
                  {x:"Small", y: 5},
                  {x: "Medium", y: 10},
                  {x: "Large", y: 20}
                    ]}
         />
         </VictoryChart>
         </div>
         <div className="William-chart-div-3">
         </div>
         <div className="William-chart-container-4">
           <VictoryChart domainPadding={25}> 
           <VictoryBar 
           theme={VictoryTheme.material}
              categories={{x: ["Time you think is in a day", "Time in a day"]}}
                data={[
                  {x:"Time you think is in a day", y: 40},
                  {x: "Time in a day", y: 1}
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