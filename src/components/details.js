import React from "react";
import UserCard from "./usercard";

export default class Details extends React.Component {
  render() {
    return this.props.users.map((user) => <UserCard user={user} />);
  }
}
