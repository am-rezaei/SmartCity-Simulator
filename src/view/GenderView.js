import * as React from "react";
import Switch from "@material-ui/core/Switch";
class GenderView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    state = {
        checkedB: false
    };


    render() {


        const handleChange = (event) => {

            this.setState({ checkedB: event.target.checked });
        };


        return <div>
            <Switch
                checked={this.state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
            />
        </div>;
    }
}
export default (GenderView);