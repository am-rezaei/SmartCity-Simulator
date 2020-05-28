import * as React from "react";
import { LineChart, Line } from 'recharts';

class LiveChart extends React.Component {
    constructor(props) {
        super(props);



    }
    componentDidMount() {
      //  setInterval(() => this.forceUpdate(), 1000);
    }

    render() {
        let data=this.props.chartData;
        let count=this.props.chartData.length;
        if (count>5) {
              data = this.props.chartData.slice(count - 5, count);
        }
        return  <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="pr" stroke="#8884d8" />
        </LineChart>
    }
}
//
// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);

export default (LiveChart);