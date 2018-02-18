import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  VictoryBar, VictoryChart, VictoryAxis, VictoryTheme,
  VictoryStack, VictoryArea, VictoryLabel, VictoryPie, VictoryVoronoi, VictoryGroup
} from 'victory';



import Dock from './Dock';
import '../../styles/prakash.css'

const data = [
  { skill: 1, skill_level: 4 },
  { skill: 2, skill_level: 4 },
  { skill: 3, skill_level: 8 },
  { skill: 4, skill_level: 2 },
  { skill: 5, skill_level: 8 },
  { skill: 6, skill_level: 8 },
 
];

export default class Dashboard extends Component {
  setRating(x) {
    if(x === 10) {
      return 'Expert'
    } else if (x === 8) {
      return 'Proficient'
    } else if (x === 6) {
      return 'Competent'
    } else if (x === 4) {
      return 'Beginner'
    } else if (x === 2) {
      return 'Novice'
    } else {
      return 'Novice'
    }
  }

  render() {
    return (
    <div className="main-container-prakash">
     
      <div className="dashboard-container-prakash">
        
      <Dock active={'dashboard'} />

       </div>

      <div className="chart-container-prakash">
         <div className="row1-container-prakash">
           
            <div className="col1-container-prakash">
            <VictoryPie
              
              padAngle={3}
              innerRadius={200}
              
              
              data={[
                { x: "Eat", y: 10 },
                { x: "Sleep", y: 20 },
                { x: "Code", y: 40 },
                { x: "Soccer", y: 25 }
              ]}
              
            />
            </div>
           
           
            <div className="col2-container-prakash">

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
         <div className="row2-container-prakash">
           
            <div className="col3-container-prakash">

            <VictoryChart domainPadding={20}>
              
              <VictoryAxis
              
                tickValues={[1, 2, 3, 4, 5, 6]}
                tickFormat={[ "HTML","Express", "MySQL", "RNative", "Android","Java"]}
              />
              <VictoryAxis
                dependentAxis
                tickFormat={(x) => (this.setRating(x))}
              />
              <VictoryBar
               animate={{
                  duration: 4000,
                  onLoad: { duration: 2000 }
                }}
                data={data}
                x="skill"
                y="skill_level"
              />
            </VictoryChart>
            </div>
           
            <div className="col4-container-prakash">

            <VictoryChart>
            <VictoryGroup offset={20}
            colorScale={"qualitative"}
                                     >
           <VictoryBar
           animate={{
           duration: 3000,
           onLoad: { duration: 1000 }
           }}
           data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
        />
      <VictoryBar
     animate={{
        duration: 3000,
        onLoad: { duration: 1000 }
      }}
      data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}/>
      <VictoryBar
      animate={{
        duration: 3000,
        onLoad: { duration: 1000 }
      }}
        data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]}
      />
    </VictoryGroup>
    </VictoryChart>
            </div>
         
         </div>  

      </div> 
    </div>  
    
    );
  }
}



