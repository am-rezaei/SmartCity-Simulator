import * as React from "react";
import Slider from "@material-ui/core/Slider";
import {sendSensorData} from "../api/api-handler";


class SensorView extends React.Component {

    constructor(props) {
        super(props);
        let THIS=this;
        setInterval(function(){ THIS.sendData(false); }, 1000);
        setInterval(function(){ THIS.sendData(true); }, 8*1000);
    }

    currentValue=this.props.default;
    lastSentValue=0;
    state = {
        init:true
    };

    componentDidMount() {

    }

    handleDataChange = (event, newValue) => {
        if (this.state.init)
        {
            this.setState({init:false});
            return;
        }
        this.currentValue=newValue;
    };


    sendData(force)
    {
        try {
            if (this.lastSentValue!=this.currentValue || force)
            {
                // alert(data);
                let dataToSend = {
                    timestamp: new Date().valueOf(),
                    val: this.currentValue,
                    source: this.props.source,
                    home: this.props.home
                };
                sendSensorData(this.props.home, this.props.source, dataToSend, function (result, data) {

                })
                this.lastSentValue=this.currentValue;
            }
        } catch (e) {
            
        }
    }

    render() {
        function valuetext(value) {
            return `${value}`;
        }


        return <div>
            <Slider
                defaultValue={this.props.default}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                onChange={this.handleDataChange}
                step={this.props.step}
                marks
                min={this.props.min}
                max={this.props.max}
            />
        </div>;
    }
}
export default (SensorView);

