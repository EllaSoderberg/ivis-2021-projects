import React from "react";
import Archetypes from "./archetypes.js";
import Details from "./details.js";
import Input from "./input.js"
import { getData } from "./scripts/data";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUsers: [],
      filterValues: {
        min: 0,
        max: 10
      }
    };
  }

  componentDidMount() {
    getData().then((data) => this.setState({ users: data }));
  }
  handleUsersSelected(userIDs) {
    const users = userIDs.map((userID => this.state.users.find((u) => u.id === userID)))
    this.setState({ selectedUsers: users })
  }

  checkInRange(user, min, max) {
    return ((user.MathWiz >= min && user.MathWiz <= max) &&
      (user.Programmer >= min && user.Programmer <= max) &&
      (user.Artist >= min && user.Artist <= max) &&
      (user.UX >= min && user.UX <= max) &&
      (user.Communicator >= min && user.Communicator <= max))
  }

  userIsSelected(user) {
    return this.state.selectedUsers.find((u) => u.id === user.id)
  }

  filterUsers(users) {
    var min = this.state.filterValues.min;
    var max = this.state.filterValues.max;

    return users.filter((user) => {
      return this.userIsSelected(user) || this.checkInRange(user, min, max)
    })
  }

  handleNewRange(which, value) {
    if (which === "min") {
      this.setState({
        filterValues: {
          min: value,
          max: this.state.filterValues.max
        }
      })
    } else if (which === "max") {
      this.setState({
        filterValues: {
          min: this.state.filterValues.min,
          max: value
        }
      })
    }
  }

  render() {
    return (
      <div className="flex-col justify-center">
        <div className="App mb-5 text-lg">Group Maker 6000</div>
        <div className="flex flex-col bg-gray-100 rounded-md mb-5">
          <Archetypes
            users={this.filterUsers(this.state.users)}
            selectedUsers={this.state.selectedUsers}
            onUsersSelected={(userIDs) => this.handleUsersSelected(userIDs)}
          />
          <div className="flex justify-center flex-row">
            <div className="flex content-center mr-5">
              <span className="mr-3">Min</span>
              <Input value={this.state.filterValues.min} onClick={(value) => this.handleNewRange("min", value)} />
            </div>
            <div className="flex flex-row  ml-5">
              <span className="mr-3">Max</span>
              <Input value={this.state.filterValues.max} onClick={(value) => this.handleNewRange("max", value)} />
            </div>
          </div>
        </div>
        <div className=" bg-gray-100 rounded-md">
          <Details users={this.state.selectedUsers} />
        </div>
        Credits for the input buttons: CarreonPhedz via
        <a className="text-blue" href="https://tailwindcomponents.com/component/input-number-custom-style">Tailwind</a>
      </div>
    );
  }
}
export { Layout };
