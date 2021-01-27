import React from "react";

export default function Archetypes(props) {
    return (
        <div className="App">
            <h1>Name: {props.username}</h1>
            <svg id="area" height={500} width={900}></svg>
        </div>
    );
}
