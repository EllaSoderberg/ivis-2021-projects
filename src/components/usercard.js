import React from "react";

export default class UserCard extends React.Component {
  render() {
    if (!this.props.user) {
      return <div></div>;
    }

    let valueSkills = Object.values(this.props.user).slice(11, 22);
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
      <div className="border-b-1 border-t-2 border-solid border-black p-3">
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
