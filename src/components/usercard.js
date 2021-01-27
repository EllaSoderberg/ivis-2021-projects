import React from "react";

export default function UserCard(props) {
  let userInfo = function findUserInfo() {
    if (props.username) {
      for (let i = 0; i <= props.data.length; i++) {
        if (props.data[i].username === props.username) {
          return props.data[i];
        } else if (props.data[i].username.includes(props.username)) {
          return props.data[i];
        }
      }
    }
  };
  let data = userInfo();

  if (data) {
    let valueSkills = Object.values(data).slice(10, 21);
    let nameSkills = [
      "A great Artist",
      "A master Collaborator",
      "Communication master",
      "Got all the Computer skills",
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
      <div class="w-full border-2 h-28 border-black border-solid px-6 py-2">
        <p>
          <b>Nickname:</b> {data.username}
        </p>
        <p>
          <b>Major Degree:</b> {data.degree_major}
        </p>
        <p>
          <b>Current degree:</b> {data.degree}
        </p>
        <p>
          <b>Strongest asset:</b> {nameSkills[indexMax]}{" "}
        </p>
        <p>
          <b>Expected learning:</b> {data.expected_learnings}
        </p>
        <p>
          <b>Interests and Hobbies:</b> {data.interests_and_hobbies}
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
}
