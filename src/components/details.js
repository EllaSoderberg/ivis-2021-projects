import React from "react";
import UserCard from "./usercard";

export default class Details extends React.Component {
  render() {
    const cards = this.props.users.map((user) => <UserCard user={user} />);
    return <div>{cards}</div>;
  }
}
