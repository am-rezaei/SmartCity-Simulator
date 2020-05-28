import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import SmartEnvironment from "./view/SmartEnvironment";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography";
import TempratureView from "./view/SensorView";
import GenderView from "./view/GenderView";
import ApexChart from "./view/ApexChart";
import {getResult, sendSensorData} from "./api/api-handler";

class Result extends React.Component {


    constructor(props) {
        super(props);
       this.state = {
        };
        this.getEnvs = this.getEnvs.bind(this);
        let THIS=this;
        setInterval(function(){ THIS.getEnvs(); }, 5000);


    }
    getEnvs()
    {
        let THIS=this;
        console.log("connecting to get data...");
            getResult(null, function (result, data) {

                if (result === 'ok') {
                    console.log("reading  result len" + data.length)

                    for(var i = 0; i < data.length; i++) {
                        console.log("reading result : " +i);
                        var obj = data[i];

                        // this.setState({
                        //     [obj.ref]: [ 'aa']  });
                        // try {
                        //     this.setState(prevState => ({
                        //         [obj.ref]: [...prevState[obj.ref], 'aa']
                        //     }))
                        // }catch (e) {
                        //
                        // }
                    //    THIS.setState({[obj.ref]:[...THIS.state[obj.ref],[obj.timestamp,obj.value]]})
                        // THIS.setState({[obj.ref]:{val:'mm'}})
                        try {
                           // alert ()
                            var ss = THIS.state[obj.ref];
                            var rr = [...ss,[obj.timestamp,obj.value]];

                            THIS.setState({[obj.ref]: rr});
                        }catch (e) {
                            THIS.setState({[obj.ref]:[[obj.timestamp,obj.value]]});

                        }
                    }
                 //  alert(JSON.stringify(THIS.state));

                } else {
                    console.log("error in 1 reading result " + result);
                   // alert(JSON.stringify(result));

                    //error in sending data
                }
            })
    }
    render() {
       let stateData=this.state;
        return (
            <div className="App"  >
                <h1>Monitoring Panel</h1>
                <Grid container   justify="space-around"
                      alignItems="center"  direction="row">

                    {Object.keys(stateData).map((env) => (
                        <Grid key={env} item xs={6} sm={12} md={4} >
                            <Paper style={{margin:20 ,alignItems:'center'}}>
                                <div>
                                <img width={64} height={64} src={process.env.PUBLIC_URL + 'home.png'} alt="Logo" />
                                <h3>{env}</h3>
                                </div>
                            <ApexChart style={{width:'100%'}} chartData={stateData[env]}/>
                            </Paper>
                        </Grid>
                    ))
                    }
                </Grid>
            </div>
        );
    }
}

export default Result;