import React, { Component } from 'react';
import ChartistGraph from "react-chartist";

const simpleChartData = {
          labels: ['Jan', 'Fev', 'Mar', 'Abr','Mai','Jun','Jul',
        'Ago','Set','Out','Nov','Dez'],
          series: [
            [800000, 1200000, 1400000, 1300000],
            [200000, 400000, 500000, 300000],
            [100000, 200000, 400000, 600000]
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