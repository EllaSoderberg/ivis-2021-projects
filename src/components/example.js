import React, { useEffect } from "react";
import data_file from "../data.csv";
import * as d3 from "d3";
import { studentData } from "../data";

// Example taken from https://blog.logrocket.com/using-d3-js-v6-with-react/

const DATA = [
  { x: 1, y: 2 },
  { x: 2, y: 5 },
  { x: 8, y: 9 },
];

export default function Example() {
  useEffect(() => {
    const margin = { top: 10, right: 40, bottom: 30, left: 30 },
      width = 450 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    d3.csv(data_file, function (raw) {
      return {
        five_year_plan: raw.five_year_plan,
        canvas_use: raw.canvas_use,
        degree: raw.degree,
        degree_major: raw.degree_major,
        degree_started: parseInt(raw.degree_started),
        expected_graduation_date: Date(raw.expected_graduation_date),
        expected_learnings: raw.expected_learnings,
        facebook_use: raw.facebook_use,
        interests_and_hobbies: raw.interests_and_hobbies,
        kth_social_use: raw.kth_social_use,
        personal_art_skills: parseInt(raw.personal_art_skills),
        personal_collab_skills: parseInt(raw.personal_collab_skills),
        personal_comms_skills: parseInt(raw.personal_comms_skills),
        personal_comp_skills: parseInt(raw.personal_comp_skills),
        personal_git_skills: parseInt(raw.personal_git_skills),
        personal_graphics_skills: parseInt(raw.personal_graphics_skills),
        personal_hci_skills: parseInt(raw.personal_hci_skills),
        personal_math_skills: parseInt(raw.personal_math_skills),
        personal_progr_skills: parseInt(raw.personal_progr_skills),
        personal_stat_skills: parseInt(raw.personal_stat_skills),
        personal_ux_skills: parseInt(raw.personal_ux_skills),
        personal_vis_skills: parseInt(raw.personal_vis_skills),
        previous_university: raw.previous_university,
        relevant_course_experience: raw.relevant_course_experience,
        thesis_status: raw.thesis_status,
        timestamp: raw.timestamp,
        username: raw.username
      }
    }).then(function (data) {
      console.log(data[0]);
    });
    // console.log(data[0]);

    const svg = d3
      .select("#area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const x = d3.scaleLinear().domain([0, 10]).range([0, width]);
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    const y = d3.scaleLinear().domain([0, 12]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    svg
      .selectAll("whatever")
      .data(studentData)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d.personak_git_skills))
      .attr("cy", (d) => y(d.personal_art_skills))
      .attr("r", 7);

    const circle = d3
      .select("#smiley")
      .append("svg")
      .attr("width", 50)
      .attr("height", 50);
    circle
      .append("circle")
      .attr("cx", 25)
      .attr("cy", 25)
      .attr("r", 25)
      .attr("fill", "yellow");
    circle
      .append("circle")
      .attr("cx", 15)
      .attr("cy", 20)
      .attr("r", 3)
      .attr("fill", "black");
    circle
      .append("circle")
      .attr("cx", 35)
      .attr("cy", 20)
      .attr("r", 3)
      .attr("fill", "black");
    circle
      .append("ellipse")
      .attr("cx", 25)
      .attr("cy", 26)
      .attr("rx", 6)
      .attr("ry", 3)
      .attr("fill", "black");
    circle
      .append("ellipse")
      .attr("cx", 25)
      .attr("cy", 24)
      .attr("rx", 6)
      .attr("ry", 3)
      .attr("fill", "yellow");
  }, []);

  return (
    <div className="App">
      <svg id="smiley"></svg>
      <svg id="area" height={400} width={500}></svg>
    </div>
  );
}
