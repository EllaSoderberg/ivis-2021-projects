import React from "react";
import { getData } from "./scripts/data.js";
import Archetypes from "./archetypes.js";
import Details from "./details.js";
import UserCard from "./usercard";
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
          <UserCard
            data={this.state.users}
            username={this.state.selectedUser}
          />
        </div>
        <div className=" bg-gray-100 rounded-md">Soon</div>
        <div className=" bg-gray-100 rounded-md">Soon</div>
      </div>
    );
  }
}
export { Layout };
