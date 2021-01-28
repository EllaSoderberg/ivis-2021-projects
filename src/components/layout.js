import React from "react";
import Archetypes from "./archetypes.js";
import Details from "./details.js";
import Input from "./input.js";
import { getData } from "./scripts/data";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],
      selectedUsers: [],
      filterValues: {
        min: 0,
        max: 10,
      },
    };
  }

  componentDidMount() {
    getData().then((data) => this.setState({ users: data, filteredUsers: this.filterUsers(data, this.state.filterValues.min, this.state.filterValues.max) }));
  }

  // componentDidUpdate() {
  //   console.log(this.state.filteredUsers)
  // }

  handleUsersSelected(userIDs) {
    const users = userIDs.map((userID) =>
      this.state.users.find((u) => u.id === userID)
    );
    this.setState({ selectedUsers: users });
  }

  checkInRange(user, min, max) {
    return (
      user.MathWiz >= min &&
      user.MathWiz <= max &&
      user.Programmer >= min &&
      user.Programmer <= max &&
      user.Artist >= min &&
      user.Artist <= max &&
      user.UX >= min &&
      user.UX <= max &&
      user.Communicator >= min &&
      user.Communicator <= max
    );
  }

  userIsSelected(user) {
    return this.state.selectedUsers.find((u) => u.id === user.id);
  }

  filterUsers(users, min, max) {
    return users.filter((user) => {
      return this.userIsSelected(user) || this.checkInRange(user, min, max);
    });
  }

  handleNewRange(which, value) {
    if (which === "min") {
      this.setState({
        filteredUsers: this.filterUsers(this.state.users, value, this.state.filterValues.max),
        filterValues: {
          min: value,
          max: this.state.filterValues.max,
        },
      });
    } else if (which === "max") {
      this.setState({
        filteredUsers: this.filterUsers(this.state.users, this.state.filterValues.min, value),
        filterValues: {
          min: this.state.filterValues.min,
          max: value,
        },
      });
    }
  }

  render() {
    return (
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-2xl self-center pb-10">
          Group selection tool for Ivis DH2321/FDK3260 2021
        </h1>
        <div className="flex flex-col xl:flex-row">
          <div className="m-6">
            <Archetypes
              users={this.state.filteredUsers}
              selectedUsers={this.state.selectedUsers}
              onUsersSelected={(userIDs) => this.handleUsersSelected(userIDs)}
            />

            <div className="flex ml-24 mt-8 flex-row">
              <div className="flex content-center mr-5">
                <span className="mr-3">Min</span>
                <Input
                  value={this.state.filterValues.min}
                  onClick={(value) => this.handleNewRange("min", value)}
                />
              </div>
              <div className="flex flex-row  ml-5">
                <span className="mr-3">Max</span>
                <Input
                  value={this.state.filterValues.max}
                  onClick={(value) => this.handleNewRange("max", value)}
                />
              </div>
            </div>
          </div>

          <div className="mt-14">
            <Details users={this.state.selectedUsers} />
          </div>
        </div>
        <p className="mt-20">Credits for the input buttons:
        <a
            className="font-bold"
            href="https://tailwindcomponents.com/component/input-number-custom-style"
          >
            {" "}CarreonPhedz via Tailwind
        </a></p>
      </div>
    );
  }
}
export { Layout };
