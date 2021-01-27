import React from "react";
import { getData } from "./scripts/data.js"
import Archetypes from "./archetypes.js";
import Details from "./details.js";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {},
            selectedUser: null
        }
    }

    componentDidMount() {
        console.log("LAYOUT: Did Mount")
        getData().then((data) => this.setState({ users: data }));
    }
    componentDidUpdate() {
        console.log("LAYOUT: Layout Updated")
    }

    render() {
        return (
            < div className="grid grid-cols-2 gap-4">
                <div className=" bg-gray-100 rounded-md">
                    <Archetypes users={this.state.users} onUserSelected={(u) => this.setState({ selectedUser: u })} />
                </div>
                <div className=" bg-gray-100 rounded-md">
                    <Details username={this.state.selectedUser} />
                </div>
                <div className=" bg-gray-100 rounded-md">Soon</div>
                <div className=" bg-gray-100 rounded-md">Soon</div>
            </div >
        );
    }
}
export { Layout }