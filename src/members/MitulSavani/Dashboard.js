import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { VictoryPie } from 'victory';


import '../../styles/MitulSavani.css'

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000},
    {quarter: 5, earnings: 15000},
  ];

  export default class Dashboard extends Component {
  
    render(){
        return (

            <div className="main-container-dashboard">
                <div className="chart-row-container-mitul">
                    <div className="chart-container container-1-mitul">
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
                    <div className="chart-container container-2-mitul">
                        <VictoryPie
                        innerRadius={100}
                        colorScale={["wheat", "orange"]}
                        data={[
                        { x: "", y: 50 },
                        { x: "Sleep", y:  20}
                        ]}
                        />
                    </div>
                    <div className="chart-container container-3-mitul">
                        <VictoryPie
                        innerRadius={100}
                        colorScale={["tomato", "orange"]}
                        data={[
                        { x: " 73 Hours completed", y: 73 },
                        { x: "27 Hours left", y: 27 }
                        ]}
                        />
                    </div>
                 </div>
                 <div className="chart-row-container-mitul">
                     <div className="chart-container container-4-mitul">
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
                </div>
            </div>
        );
    }

}
