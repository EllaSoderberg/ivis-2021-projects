import React from "react";

export default class UserCard extends React.Component {
  render() {
    if (!this.props.user) {
      return <div></div>
    }

    let valueSkills = Object.values(this.props.user).slice(10, 21);
    let nameSkills = [
      "A great Artist",
      "A master Collaborator",
      "Communication master",
      "General Computer skills",
      "A Git god!",
      "Great with Graphics",
      "Knows Human Computer Interaction",
      "A Math Master!",
      "A Programming Pro",
      "Statistics Superhero",
      "Builds great User Experience",
    ];
    let max = Math.max(...valueSkills);
    let indexMax = valueSkills.indexOf(max);

    return (
      <div class="w-full border-t-2 border-b-2 border-black border-solid px-6 py-2">
        <p>
          <b>Nickname:</b> {this.props.user.username}
        </p>
        <p>
          <b>Strongest asset:</b> {nameSkills[indexMax]}{" "}
        </p>
        <p>
          <b>Major Degree:</b> {this.props.user.degree_major}
        </p>
        <p>
          <b>Current degree:</b> {this.props.user.degree}
        </p>

        <p>
          <b>Expected learning:</b> {this.props.user.expected_learnings}
        </p>
        <p>
          <b>Interests and Hobbies:</b> {this.props.user.interests_and_hobbies}
        </p>
      </div>
    );
  }

}
