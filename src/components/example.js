import React, { useEffect } from "react";
import data_file from "../data.csv";
import * as d3 from "d3";

// Example taken from https://blog.logrocket.com/using-d3-js-v6-with-react/

const DATA = [
  { x: 10, y: 20 },
  { x: 20, y: 50 },
  { x: 80, y: 90 }
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

    const x = d3.scaleLinear().domain([0, 100]).range([0, width]);
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    svg
      .selectAll("whatever")
      .data(DATA)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d.x))
      .attr("cy", (d) => y(d.y))
      .attr("r", 7);
  }, []);

  return (
    <div className="App">
      <svg id="area" height={400} width={500}></svg>
    </div>
  );
}