import React, { Component } from 'react';

import "../css/graphStyle.css"

const Line = ({ left }) => {
    return (
        <div
            className="line"
            style={{ left: `${left}%` }}
        />
    )
}

const BarTextContent = ({ times }) => {
    return (
        <div className="bar-text-content">
            {
             times.map((timeSpent) => (
                <div className="text">
                    { timeSpent.employeeName }
                </div>
                ))
            }
        </div>
    )
}

const Bar = ({ percent }) => {
    return(
        <div className="bar" style={{ width: `${percent}%` }} />
    )
}

const Markers = () => {
    const markerArr = Array(11).fill(null);
    
    return (
      <div className="markers">
        {
          markerArr.map((el, i) => (
           <span className="marker" style={{ left: `${i * 10}%` }}>
            { i * 10 }
           </span>
          ))
        }
      </div>
    )
  }

class Graph extends Component {
    constructor(props){
    super(props);
        this.state = {
            
        };
};

renderLines(){
    return Array(10).fill(null).map((el, i) => (
        <Line
            left={i*10}
            key={i}
        />
    ))
}

renderBars(){
    const { times } = this.props;

    let sumOfAllTimes = times.reduce((acc, timeSpent) => {
        return acc + timeSpent.currentTime; //timeSpent.marketCap
    }, 0);

    return times.map((timeSpent) => {
        const percent = (timeSpent.currentTime); /*/ sumOfAllTimes); * 100; //timeSpent.marketCap*/
        return(
            <Bar
                percent={percent}
                key={timeSpent.employeeName}
            />
        )
    });
}

render(){
    return(
        <div className="graph-wrapper">

            <div className="graph">
                <BarTextContent times={this.props.times}/>

                <div className="bar-lines-container">
                    { this.renderLines() }
                    { this.renderBars() }
                </div>

                <div style={{ width: '12%' }} />
                <Markers />  
            </div>

        </div>
    )
}
}
export default Graph;