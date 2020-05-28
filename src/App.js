import React from 'react';
import logo from './logo.svg';
import './App.css';
import TempratureView from "./view/SensorView";
import {Box} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import GenderView from "./view/GenderView";
import ApexChart from "./view/ApexChart";
import LiveChart from "./view/LiveChart";
import RealTimeChart from "./view/RealTimeChart";

class App extends React.Component {
    state = {
        idx:5,
        data: [{pr: 40}, {pr: 17}, {pr: 20}, {pr: 11}, {pr: 47}],
        dataa: [[1, 1], [2, 0.5], [3, 0.5] , [4, 0.5]]
    };

    constructor(props) {
        super(props);
        this.addData = this.addData.bind(this);
    }

    addData(name, value) {
        this.setState({idx:this.state.idx+1});
       this.setState({data: [...this.state.data,{pr:value}]});
       this.setState({dataa: [...this.state.dataa,[this.state.idx,value/100]]});
     //  alert(this.state.dataa);
        console.log("add data : "+ value);
        console.log("idx : "+ this.state.idx);
        console.log("dataa : "+ this.state.dataa);

    }

    render() {
        return (
            <div className="App" style={{margin: "200px"}}>
                <Container maxWidth="sm">

                    <Paper elevation={3} style={{margin:"20px",padding: "10px"}}>

                        <ApexChart chartData={this.state.dataa}/>
                    </Paper>
                    <Paper elevation={3} style={{margin:"20px",padding: "50px"}}>

                    {/*<LiveChart chartData={this.state.data}/>*/}
                        <Typography gutterBottom>
                            Environment Temperature
                        </Typography>

                        <TempratureView addData={this.addData}/>
                        <Typography gutterBottom>
                            Individual Age
                        </Typography>
                        <TempratureView addData={this.addData}/>
                        <GenderView/>
                    </Paper>

                </Container>
            </div>
        );
    }
}

export default App;
