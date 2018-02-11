import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    VictoryBar, VictoryChart, VictoryAxis, VictoryTheme,
    VictoryStack, VictoryArea, VictoryLabel, VictoryPie, VictoryVoronoi, VictoryLine
} from 'victory';

import "../../styles/BhaveshChowdhury.css"
import "../../styles/fontawesome.css"

const data = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 3, y: 4 },
    { x: 4, y: 1 },
    { x: 5, y: 5 }
];

const BHAVESH_AVATAR = 'https://avatars3.githubusercontent.com/u/13439148?s=460&v=4'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="main-container-b">
                <div className="dashboard-container-b">
                    <div className="chart-row-container-b-left">
                        <div className="chart-container-b container-1-b">
                            <div className="links-container-dashboard">
                                <div className="avatar-container-dashboard">
                                    <img className="avatar-dashboard" src={BHAVESH_AVATAR} />
                                </div>
                                <div className="title-dashboard">Bhavesh Chowdhury</div>
                                <div className="links-dashboard">
                                    <a href="https://github.com/affaanghazzali" className="link">
                                        <h3 className="links-subtitle">Dashboard</h3>
                                    </a>
                                    <a href="https://www.instagram.com/affaanghazzali/" className="link">
                                        <h3 className="links-subtitle">Portfolio</h3>
                                    </a>
                                    <a href="mailto:ghazzaliaffaan@gmail.com?Subject=I%20would%20like%20to%20know%20more%20about%20MobileSpace!" target="_top" className="link">
                                        <h3 className="links-subtitle">Profile</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chart-row-container-b-right">
                        <div className="chart-column-container-b">
                            <div className="chart-container-b container-2-b">
                                <VictoryChart
                                    theme={VictoryTheme.material}
                                    width={600}
                                >
                                    <VictoryLine
                                        interpolation="natural"
                                        data={data}

                                        animate={{
                                            duration: 2000,
                                            onLoad: { duration: 2000 }
                                        }}
                                        style={{
                                            data: {
                                                stroke: "#5164BE", strokeWidth: 5
                                            },
                                        }}
                                        labels={(datum) => datum.name}
                                        labelComponent={<VictoryLabel renderInPortal dy={0} />}
                                    />
                                </VictoryChart>
                            </div>
                        </div>
                        <div className="chart-column-container-b">
                            <div className="chart-container-b container-3-b">
                                <VictoryPie
                                    // padAngle={3}
                                    innerRadius={100}
                                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                                    animate={{
                                        duration: 2000,
                                    }}
                                    data={data}

                                />
                            </div>
                            <div className="chart-container-b container-4-b">
                                <VictoryChart
                                    theme={VictoryTheme.material}
                                    domainPadding={10}
                                    animate={{
                                        duration: 2000,
                                        onLoad: { duration: 1000 }
                                    }}
                                >
                                    <VictoryBar
                                        style={{ data: { fill: "#5164BE" } }}
                                        data={data}
                                    />
                                </VictoryChart>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        );
    }
}