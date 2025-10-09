import React, { Component } from "react";
import data from "./data/complex.json";

class Example2 extends Component {
  render() {
    const skills = data.Skills || [];
    return (
      <div className="container mt-3">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, idx) => {
            // skill might be string or object
            if (typeof skill === "string") {
              return <li key={idx}>{skill}</li>;
            }
            // if object, show nested arrays
            return <li key={idx}>{JSON.stringify(skill)}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Example2;
