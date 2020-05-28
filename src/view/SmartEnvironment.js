import * as React from "react";
import RTChart from "react-rt-chart";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper/Paper";
import ApexChart from "./ApexChart";
import Typography from "@material-ui/core/Typography";
import SensorView from "./SensorView";
import GenderView from "./GenderView";
import {Box} from "@material-ui/core";

class SmartEnvironment extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper elevation={3} style={{margin: "20px", padding: "50px"}}>

                <Typography variant="h4" gutterBottom>
                    {this.props.home}
                </Typography>


                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img width={40} height={40} src={process.env.PUBLIC_URL + 'temperature.png'} alt="Logo"/>
                    <h6 style={{margin: 15}}> Home Temperature
                    </h6>
                </div>
                <SensorView home={this.props.home} source={'temperature'} max={100} min={10} step={1} default={20}/>


                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img width={40} height={40} src={process.env.PUBLIC_URL + 'smoke.png'} alt="Logo"/>
                    <h6 style={{margin: 15}}> Smoke Level
                    </h6>
                </div>
                <SensorView home={this.props.home} source={'smoke'} max={10} min={0} step={1} default={1}/>


                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img width={40} height={40} src={process.env.PUBLIC_URL + 'movement.png'} alt="Logo"/>
                    <h6 style={{margin: 15}}> Number of Movements In Last Hour </h6>
                </div>
                <SensorView home={this.props.home} source={'movement'} max={100} min={30} step={1} default={50}/>

            </Paper>
        );
    }
}

export default (SmartEnvironment);