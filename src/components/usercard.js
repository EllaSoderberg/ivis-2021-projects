import React from "react";

export default function UserCard(props) {
    console.log(props.data);

  if (props.data) {
    let valueSkills = Object.values(props.data).slice(10, 21);
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
          <b>Nickname:</b> {props.data.username}
        </p>
        <p>
          <b>Strongest asset:</b> {nameSkills[indexMax]}{" "}
        </p>
        <p>
          <b>Major Degree:</b> {props.data.degree_major}
        </p>
        <p>
          <b>Current degree:</b> {props.data.degree}
        </p>
 
        <p>
          <b>Expected learning:</b> {props.data.expected_learnings}
        </p>
        <p>
          <b>Interests and Hobbies:</b> {props.data.interests_and_hobbies}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
