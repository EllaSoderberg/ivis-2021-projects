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
  handleUserSelected(userID) {
    console.log("handleUserSelected")
    const user = this.state.users.find((u) => u.id === userID)
    console.log(user)
    this.setState({ selectedUser: user })
  }

  render() {
    return (
      <div className="grid grid-cols-2 gap-4">
        <div className=" bg-gray-100 rounded-md">
          <Archetypes
            users={this.state.users}
            highlightedUser={this.state.selectedUser}
            onUserSelected={(userID) => this.handleUserSelected(userID)}
          />
        </div>
        <div className=" bg-gray-100 rounded-md">
          <Details users={[this.state.selectedUser]} />
        </div>
        <div className=" bg-gray-100 rounded-md">Soon</div>
        <div className=" bg-gray-100 rounded-md">Soon</div>
      </div>
    );
  }
}
export { Layout };
