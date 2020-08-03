import React, { Component } from 'react';
import ChartistGraph from "react-chartist";

const simpleChartData = {
          labels: ['Jan', 'Fev', 'Mar', 'Abr','Mai','Jun','Jul',
        'Ago','Set','Out','Nov','Dez'],
          series: [

            [1000, 2000, 4000, 5000,6000,7000,6000, 5000, 4000, 3000,2000,1000]
          ]

}

const options = {
     stackBars: true
}
class Chart extends Component {

  render(){
    return(
      <div>
            <ChartistGraph data={simpleChartData} options={options} type={'Bar'} /> 
      </div>

    )}

}

export default Chart;