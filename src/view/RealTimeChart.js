import * as React from "react";
import RTChart from 'react-rt-chart';

class LiveChart extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //  setInterval(() => this.forceUpdate(), 1000);
    }

    render() {
        var data = [{
            date: new Date(),
            Car: 14
        },{
            date: new Date(),
            Car: 1
        },{
            date: new Date(),
            Car: 123
        },{
            date: new Date(),
            Car: 2
        },{
            date: new Date(),
            Car: 98
        }];
        return <RTChart
            fields={['Car','add']}
            initialData={data} />
    }
}
//
// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);

export default (LiveChart);