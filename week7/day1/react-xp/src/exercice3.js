import React, { Component } from "react";
import "./Exercise.css";

class Exercise extends Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };

    return (
      <div>
        <h1 style={style_header}>This is a styled header</h1>
        <p className="para">This is a styled paragraph.</p>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          Learn React
        </a>
        <form>
          <input type="text" placeholder="Enter text" />
          <button type="submit">Submit</button>
        </form>
        <img
          src="https://via.placeholder.com/150"
          alt="Example"
        />
        <ul>
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
