import { data } from "autoprefixer";
import React from "react";
import Archetypes from "./archetypes.js";
import Details from "./details.js";
import UserCard from './usercard';
import { getData } from './scripts/data';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUser: null,
            data: {}
        }
    }
    componentDidMount() {
        getData().then(d => this.setState({data: d}))
    }
    render() {
        return (
            <div class="grid grid-cols-2 gap-4">
                <div class=" bg-gray-100 rounded-md">
                    <Archetypes onHighlight={(u) => this.setState({ selectedUser: u })} />
                </div>
                <div class=" bg-gray-100 rounded-md">
                    <UserCard data={this.state.data} username={this.state.selectedUser} />
                </div>
            </div>
        );
    }
}
export { Layout }