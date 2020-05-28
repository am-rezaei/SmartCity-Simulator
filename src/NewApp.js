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
import {Box} from "@material-ui/core";

class NewApp extends React.Component {
    state = {
        homes: ['Home1', 'Home2']
    };
    idx = 3;

    constructor(props) {
        super(props);
        this.addNewHome = this.addNewHome.bind(this);

    }

    addNewHome() {
        this.setState({homes: [...this.state.homes, 'Home' + this.idx++]})
    }

    render() {
        return (
            <div className="App">
                <Grid container alignItems="stretch" direction="row">
                    {this.state.homes.map((identifier) => (
                        <Grid item xs={12} sm={12} md={4}>
                            <Box   height="100%">
                            <SmartEnvironment home={identifier}/>
                            </Box>
                        </Grid>
                    ))
                    }
                    <Grid  item xs={12} sm={12} md={4}>
                            <Box     height="50%">

                                <Button style={{alignSelf:'center',height:'100px',margin:'100px'}} variant="outlined" onClick={this.addNewHome}> Add New Smart Home </Button>

                            </Box>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default NewApp;
