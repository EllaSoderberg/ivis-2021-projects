import React from "react";
import Archetypes from "./archetypes.js";
import Details from "./details.js";
import { getData } from "./scripts/data";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      selectedUser: null,
    };
  }

  componentDidMount() {
    getData().then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <div className="grid grid-cols-2 gap-4">
        <div className=" bg-gray-100 rounded-md">
          <Archetypes
            users={this.state.users}
            onUserSelected={(u) => this.setState({ selectedUser: u })}
          />
        </div>
        <div className=" bg-gray-100 rounded-md">
          <Details
            data={this.state.users}
            username={[this.state.selectedUser]}
          ></Details>
        </div>
        <div className=" bg-gray-100 rounded-md">Soon</div>
        <div className=" bg-gray-100 rounded-md">Soon</div>
      </div>
    );
  }
}
export { Layout };
