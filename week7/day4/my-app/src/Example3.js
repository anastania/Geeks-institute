import React, { Component } from "react";
import data from "./data/complex.json";

class Example3 extends Component {
  render() {
    const experiences = data.Experiences || [];
    return (
      <div className="container mt-3">
        <h3>Experiences</h3>
        {experiences.map(exp => (
          <div key={exp.id} className="mb-2 p-2 border">
            <h5>{exp.company}</h5>
            {exp.roles && exp.roles.map((role, i) => (
              <div key={i}>
                <strong>{role.title}</strong> — {role.years} years
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
