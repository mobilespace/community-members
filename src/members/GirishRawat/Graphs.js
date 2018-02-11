import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    VictoryBar, VictoryChart, VictoryAxis, VictoryTheme,
    VictoryStack, VictoryArea, VictoryLabel, VictoryPie, VictoryVoronoi
} from 'victory';
import { ENV } from '../../utils';


import '../../styles/GirishRawat.css'

import LinkIcon from '../../assets/link.png'
import ResumeIcon from '../../assets/resume.png'


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
        return [1,8,2,4,8];
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
                                        Exit
                                    </span>
                                </a>
                            </li>

                        </ul>

                    </nav>
                    <div className="portfolio-container">
                        <VictoryChart domainPadding={{ x: 20 }} animate={{ duration: 500 }}>
                            <VictoryBar data={this.state.data}
                                style={{
                                    data: { fill: "#09e8ba", width: 12 }
                                }}
                                animate={{
                                    onExit: {
                                        duration: 500,
                                        before: () => ({
                                            _y: 0,
                                            fill: "#09e8ba",
                                            label: "sup?"
                                        })
                                    }
                                }}
                            />
                        </VictoryChart>
                    </div>
                </div>
            </div>

        );
    }
}
