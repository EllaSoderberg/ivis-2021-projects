import React from "react";
import Archetypes from "./archetypes.js";
import Details from "./details.js";
import { getData } from "./scripts/data";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      selectedUsers: [],
    };
  }

  componentDidMount() {
    getData().then((data) => this.setState({ users: data }));
  }
  handleUsersSelected(userIDs) {
    const users = userIDs.map((userID => this.state.users.find((u) => u.id === userID)))
    this.setState({ selectedUsers: users })
  }

  render() {
    return (
      <div className="flex-col justify-center">
        <div className="App mb-5 text-lg">Group Maker 6000</div>
        <div className=" bg-gray-100 rounded-md mb-5">
          <Archetypes
            users={this.state.users}
            selectedUsers={this.state.selectedUsers}
            onUsersSelected={(userIDs) => this.handleUsersSelected(userIDs)}
          />
        </div>
        <div className=" bg-gray-100 rounded-md">
          <Details users={this.state.selectedUsers} />
        </div>
      </div>
    );
  }
}
export { Layout };
