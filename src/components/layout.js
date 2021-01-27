import React from "react";
import Archetypes from "./archetypes.js";
import Details from "./details.js";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUser: null
        }
    }
    render() {
        return (
            < div class="grid grid-cols-2 gap-4">
                <div class=" bg-gray-100 rounded-md">
                    <Archetypes onHighlight={(u) => this.setState({ selectedUser: u })} />
                </div>
                <div class=" bg-gray-100 rounded-md">
                    <Details username={this.state.selectedUser} />
                </div>
            </div >
        );
    }
}
export { Layout }