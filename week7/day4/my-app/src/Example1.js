import React, { Component } from "react";
import data from "./data/complex.json";

class Example1 extends Component {
  render() {
    const socials = data.SocialMedias || [];
    return (
      <div className="container mt-3">
        <h3>Social Medias</h3>
        <ul>
          {socials.map((s) => (
            <li key={s.id}>
              <a href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
