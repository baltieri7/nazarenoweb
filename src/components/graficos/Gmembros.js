import React from "react";
import Chart from "react-apexcharts";


class App extends  React.Component{
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
   
        },
        xaxis: {
          categories: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro',
          'Outubro','Novembro','Dezembro']
        }
      },
      series: [
        {
          name: "Doações",
          data: [30, 40, 45, 50, 49, 60, 70, 91,85, 42, 67, 74]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
              height="300"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;