import React, { useEffect } from "react";
import * as d3 from "d3";
import { getData } from "./scripts/data";
import { axisLeft } from "d3";

// Example taken from https://blog.logrocket.com/using-d3-js-v6-with-react/

//https://www.d3-graph-gallery.com/graph/scatter_grouped_highlight.html

export default function Example() {
  useEffect(() => {
    const margin = { top: 10, right: 40, bottom: 30, left: 80 },
      width = 800 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    const svg = d3
      .select("#area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const yLabels = d3
      .scalePoint()
      .domain(["MathWiz", "Programmer", "Artist", "UX-pro", "Communicator"])
      .range([margin.top, height]);

    svg.append("g").call(axisLeft(yLabels));

    const x = d3.scaleLinear().domain([0, 10]).range([0, width]);
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

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

    getData().then((data) => {
      var highlight = function (event) {
        let selected_user = event.target.classList[1];

        d3.selectAll(".dot")
          .transition()
          .duration(200)
          .style("fill", "lightgrey")
          .attr("r", 3);

        d3.selectAll("." + selected_user)
          .transition()
          .duration(200)
          .style("fill", "red")
          .attr("r", 7);
      };

      // Highlight the specie that is hovered
      var doNotHighlight = function () {
        d3.selectAll(".dot")
          .transition()
          .duration(200)
          .style("fill", "lightgrey")
          .attr("r", 5);
      };
      svg
        .append("g")
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", function (d) {
          return "dot " + d.username;
        })
        .attr("cx", (d) => x(d.MathWiz))
        .attr("cy", yLabels("MathWiz"))
        .attr("r", 7)
        .style("fill", "red")
        .on("mouseover", highlight)
        .on("mouseleave", doNotHighlight);
      svg
        .append("g")
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", function (d) {
          return "dot " + d.username;
        })
        .attr("cx", (d) => x(d.Programmer))
        .attr("cy", yLabels("Programmer"))
        .attr("r", 7)
        .style("fill", "red")
        .on("mouseover", highlight)
        .on("mouseleave", doNotHighlight);
      svg
        .append("g")
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", function (d) {
          return "dot " + d.username;
        })
        .attr("cx", (d) => x(d.Artist))
        .attr("cy", yLabels("Artist"))
        .attr("r", 7)
        .style("fill", "red")
        .on("mouseover", highlight)
        .on("mouseleave", doNotHighlight);
      svg
        .append("g")
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", function (d) {
          return "dot " + d.username;
        })
        .attr("cx", (d) => x(d.UX))
        .attr("cy", yLabels("UX-pro"))
        .attr("r", 7)
        .style("fill", "red")
        .on("mouseover", highlight)
        .on("mouseleave", doNotHighlight);
      svg
        .append("g")
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", function (d) {
          return "dot " + d.username;
        })
        .attr("cx", (d) => x(d.Communicator))
        .attr("cy", yLabels("Communicator"))
        .attr("r", 7)
        .style("fill", "red")
        .on("mouseover", highlight)
        .on("mouseleave", doNotHighlight);
    });
  }, []);

  return (
    <div className="App">
      <svg id="smiley"></svg>
      <svg id="area" height={500} width={900}></svg>
    </div>
  );
}
