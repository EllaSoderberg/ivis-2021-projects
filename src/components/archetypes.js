import React, { useEffect } from "react";
import * as d3 from "d3";
import { getData } from "./scripts/data";
import { axisLeft } from "d3";

// Example taken from https://blog.logrocket.com/using-d3-js-v6-with-react/

//https://www.d3-graph-gallery.com/graph/scatter_grouped_highlight.html

export default function Archetypes(props) {
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
      .domain(["MathWiz", "Programmer", "Artist", "UX", "Communicator"])
      .range([margin.top + margin.bottom, height - margin.bottom]);

    svg.append("g").call(axisLeft(yLabels));

    const x = d3.scaleLinear().domain([0, 10]).range([0, width]);
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    getData().then((data) => {
      var highlight = function (event) {
        let selected_user = event.target.classList[1];

        // 
        console.log("Lifitng up the state (change)");
        console.log("1: " + selected_user);
        props.onUserSelected(selected_user);

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
      let categories = [
        "MathWiz",
        "Programmer",
        "Artist",
        "UX",
        "Communicator",
      ];
      categories.map((cat) => {
        let numberDict = {};
        let dots = svg.append("g").selectAll("dot").data(data).enter();

        dots
          .append("circle")
          .attr("class", function (d) {
            console.log(d.username, d[cat]);
            return "dot " + d.username;
          })
          .attr("cx", (d) => x(d[cat]))
          .attr("cy", (d) => {
            let info = d[cat];
            let margin = -1;
            if (!numberDict[info]) {
              numberDict[info] = -1;
            } else if (numberDict[info]) {
              numberDict[info] -= 5;
              margin = numberDict[info];
            }
            return yLabels(cat) + margin;
          })
          .attr("r", 7)
          .style("fill", "red")
          .on("mouseover", highlight)
          .on("mouseleave", doNotHighlight);
        return "";
      });
      /*const circle = d3
      .selectAll(".dot")
      .append("svg")
      .attr("width", 10)
      .attr("height", 10);
    circle
      .append("circle")
      .attr("cx", 5)
      .attr("cy", 5)
      .attr("r", 10)
      .attr("fill", "lightgray");
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
      .attr("fill", "yellow");*/
    });
  }, []);

  return (
    <div className="App">
      <h1>Archetypes</h1>
      <svg id="area" height={500} width={900}></svg>
    </div>
  );
}
