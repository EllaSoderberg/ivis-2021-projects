import React, { Component } from "react";
import * as d3 from "d3";
import { axisLeft } from "d3";

// Example taken from https://blog.logrocket.com/using-d3-js-v6-with-react/

//https://www.d3-graph-gallery.com/graph/scatter_grouped_highlight.html
const USER_ID_PREFIX = "userid-"
export default class ArchetypesGraph extends Component {
  constructor(props) {
    super(props);
    this.creatGraph = this.creatGraph.bind(this)
    this.state = {
      highlightColors: [
        { c: "red", userId: null },
        { c: "blue", userId: null },
        { c: "green", userId: null },
        { c: "yellow", userId: null },
        { c: "black", userId: null }
      ]
    }

  }

  componentDidMount() {
    this.creatGraph();
  }
  componentDidUpdate() {
    this.creatGraph();
  }

  assignColor(userID) {
    var assignedColor = this.state.highlightColors.find((color) => color.userId === userID)
    if (assignedColor) {
      return assignedColor.c
    } else {
      const assignedColor = { c: this.state.highlightColors[0].c, userId: userID }
      const colorUpdate = this.state.highlightColors.slice(1).concat(assignedColor)
      this.setState({ highlightColors: colorUpdate });
      return assignedColor;
    }
  }

  highlightUser() {
    this.props.selectedUsers.forEach((user) => {
      d3.selectAll("." + USER_ID_PREFIX + user.id)
        .transition()
        .duration(200)
        .style("fill", this.assignColor(user.id))
        .attr("r", 7);
    })
  }

  handleClick(userID) {
    if (!this.props.selectedUsers.find((u) => u.id === userID)) {
      if (this.props.selectedUsers.length >= 5) {
        const userIDs = this.props.selectedUsers.slice(1).map((u) => u.id).concat(userID)
        this.props.onUsersSelected(userIDs)
      } else {
        this.props.onUsersSelected(this.props.selectedUsers.map((u) => u.id).concat(userID))
      }
    }
  }

  extractIDfromD3class(d3Class) {
    // D3 uses the ID to create the dots.
    // It has class in the form: "userid-#####"
    // So we extract and return only the numeric value
    return d3Class.slice(7)
  }

  creatGraph() {
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

    let categories = [
      "MathWiz",
      "Programmer",
      "Artist",
      "UX",
      "Communicator",
    ];
    categories.map((cat) => {
      let numberDict = {};
      let dots = svg.append("g").selectAll("dot").data(this.props.users).enter();

      dots
        .append("circle")
        .attr("class", (d) => { return "dot " + USER_ID_PREFIX + d.id })
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
        .style("fill", "lightgray")
        .on("click", (event) => {
          let userID = this.extractIDfromD3class(event.target.classList[1]);
          this.handleClick(userID);
        })
      return "";
    });

    this.highlightUser()
  }

  render() {
    return (
      <div className="App" >
        <h1>Archetypes</h1>
        <svg id="area" height={500} width={900}></svg>
      </div>
    );
  }
}
