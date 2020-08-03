import React, { Component } from 'react';
import ChartistGraph from "react-chartist";

export default class Pie extends Component{
  render(){
    let data = {
      series: [
      {
        value:20 ,
        name:"Serie 1 "
      },
      {
        value: 30,
        name: "Serie 2"
      },
      {
        value: 50,
        name: "Series 3"
      }
    ]
    };
    let options = {
      donut: false
    };
    let type = "Pie";

    return(
      <div>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    );
  }
}