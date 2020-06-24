import React, {Component} from "react";
import Split from "react-split";

class DashApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Split>
                <div>component1</div>
                <div>component2</div>
            </Split>

        </div>
    }
}

export default DashApp;
