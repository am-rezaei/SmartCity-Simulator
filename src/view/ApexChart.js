import * as ReactDOM from "react-dom";
import * as React from "react";
import GenderView from "./GenderView";
import Chart from 'react-apexcharts'
import Paper from "@material-ui/core/Paper";

class ApexChart extends React.Component {
     constructor(props) {
        super(props);

        this.state = {
            load:true,
            series: [{
                data: this.props.chartData
            }],
            options: {
                chart: {
                    id: 'realtime',
                    height: 350,
                    type: 'line',
                    animations: {
                        enabled: true,
                        easing: 'linear',
                        dynamicAnimation: {
                            speed: 1
                        }
                    },
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: 'Fire Risk',
                    align: 'left'
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'category'
                },
                yaxis: {
                    min:0,
                    max: 1
                },
                legend: {
                    show: false
                },
            },


        };
    }

    componentDidMount() {
    }


    render() {
        let dataa=this.props.chartData;
        let count=this.props.chartData.length;
        if (count>10) {
            dataa = this.props.chartData.slice(count - 10, count);
        }
        return (
            <div className="donut" style={{align:'center',width:'100%'}} >

                <Chart
                    options={this.state.options}
                    series={[{
                        data: dataa
                    }]}
                    type="line"
                    width="100%"
                />
             </div>
        );
    }
}
//
// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);

export default (ApexChart);