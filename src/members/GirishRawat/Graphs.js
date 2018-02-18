import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLine, VictoryCandlestick,
    VictoryStack, VictoryArea, VictoryScatter, VictoryLabel, VictoryPie, VictoryVoronoi, VictoryPolarAxis, VictoryLegend
} from 'victory';
import { ENV } from '../../utils';


import '../../styles/GirishRawat.css'

import LinkIcon from '../../assets/link.png'
import ResumeIcon from '../../assets/resume.png'

const data = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 3, y: 4 },
    { x: 4, y: 1 },
    { x: 5, y: 5 }
];



export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getData()
        };
    }

    componentDidMount() {
        this.setStateInterval = window.setInterval(() => {
            this.setState({
                data: this.getData()
            });
        }, 3000);
    }

    componentWillUnmount() {
        window.clearInterval(this.setStateInterval);
    }

    getData() {
        const bars = 4;
        return [1, 8, 2, 4, 8];
    }


    render() {
        return (

            <div className="main-container">
                <div>
                    <div class="area"></div><nav class="main-menu">
                        <ul>
                            <li>
                                <a href="/girish/profile">
                                    <i class="fa fa-home fa-2x"></i>
                                    <span class="nav-text">
                                        Profile
                                    </span>
                                </a>
                            </li>

                            <li class="has-subnav">
                                <a href="/girish/portfolio">
                                    <i class="fa fa-list fa-2x"></i>
                                    <span class="nav-text">
                                        Portfolio
                                     </span>
                                </a>
                            </li>

                            <li>
                                <a href="/girish/graphs">
                                    <i class="fa fa-bar-chart-o fa-2x"></i>
                                    <span class="nav-text">
                                        Graphs and Statistics
                                    </span>
                                </a>
                            </li>
                        </ul>

                        <ul class="logout">

                            <li>
                                <a href="/">
                                    <i class="fa fa-power-off fa-2x"></i>
                                    <span class="nav-text">
                                        Logout
                                    </span>
                                </a>
                            </li>

                        </ul>

                    </nav>
                </div>
                <div className="sub-container">
                    <div className="row-girish">
                        <div className="column-girish">
                            <VictoryChart domain={[0, 10]}>
                                <VictoryLegend x={125} y={50}
                                 theme={VictoryTheme.material}
                                    title="Legend"
                                    centerTitle
                                    orientation="horizontal"
                                    gutter={20}
                                    style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
                                    data={[
                                        { name: "One", symbol: { fill: "tomato", type: "star" } },
                                        { name: "Two", symbol: { fill: "orange" } },
                                        { name: "Three", symbol: { fill: "gold" } }
                                    ]}
                                />
                                <VictoryBar
                                    data={[
                                        { x: 2, y: 6, fill: "tomato" },
                                        { x: 4, y: 4, fill: "orange" },
                                        { x: 6, y: 2, fill: "gold" },
                                        { x: 8, y: 4, fill: "tomato" },
                                    ]}
                                />
                            </VictoryChart>
                        </div>
                        <div className="column-girish">
                            <VictoryChart
                                theme={VictoryTheme.material}
                                domainPadding={{ x: 25 }}
                                scale={{ x: "time" }}
                            >
                                <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`} />
                                <VictoryAxis dependentAxis />
                                <VictoryCandlestick
                                    candleColors={{ positive: "white", negative: '#00FFC7' }}
                                    data={[
                                        { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
                                        { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
                                        { x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10 },
                                        { x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7 },
                                        { x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5 }
                                    ]}
                                />
                            </VictoryChart>
                        </div>
                    </div>

                    <div className="row-girish">
                        <div className="column-girish">

                            <VictoryChart
                                theme={VictoryTheme.material}
                                domainPadding={10}
                                animate={{
                                    duration: 2000,
                                    onLoad: { duration: 1000 }
                                }}
                            >
                                <VictoryBar
                                    style={{ data: { fill: "#00FFC7" } }}
                                    data={data}
                                />
                            </VictoryChart>
                        </div>
                        <div className="column-girish">

                            <VictoryPie
                                // padAngle={3}
                                animate={{
                                    duration: 2000
                                }}
                                innerRadius={100}
                                colorScale={["tomato", "orange", "gold", "cyan", "navy"]}

                                data={data}

                            />

                        </div>

                    </div>
                </div>
            </div>

        );
    }
}
