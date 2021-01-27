import React from "react";
import UserCard from "./usercard";

export default function Details(props) {
  let userData = [];

  if (props.username) {
    props.username.map((name) => {
      for (let i = 0; i < props.data.length; i++) {
        if (props.data[i].username === name) {
          userData.push(props.data[i]);
        } else if (props.data[i].username.includes(name)) {
          userData.push(props.data[i]);
        }
      }
    });
  }
  if (userData) {
    return userData.map((info) => <UserCard data={info} />);
  }
  return null;
}
