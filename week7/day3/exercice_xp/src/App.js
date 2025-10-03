import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";

// Exercise 1: BuggyCounter
class BuggyCounter extends Component {
  state = { count: 0 };
  handleClick = () => this.setState(({ count }) => ({ count: count + 1 }));
  render() {
    if (this.state.count === 5) throw new Error("I crashed!");
    return <h3 onClick={this.handleClick}>{this.state.count}</h3>;
  }
}

// Exercise 2 + 3: Lifecycle
class Color extends Component {
  state = { favoriteColor: "red", show: true };
  componentDidMount() {
    setTimeout(() => this.setState({ favoriteColor: "yellow" }), 1000);
  }
  shouldComponentUpdate() {
    return true; // set false to block updates
  }
  getSnapshotBeforeUpdate() {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("after update");
  }
  render() {
    return (
      <div>
        <h2>My favorite color is {this.state.favoriteColor}</h2>
        <button onClick={() => this.setState({ favoriteColor: "blue" })}>
          Change Color
        </button>
        <button onClick={() => this.setState({ show: false })}>Delete</button>
        {this.state.show && <Child />}
      </div>
    );
  }
}

// Exercise 3: Child component with unmounting
class Child extends Component {
  componentWillUnmount() {
    alert("Child unmounted");
  }
  render() {
    return <h3>Hello World!</h3>;
  }
}

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Exercise 1: Error Boundaries</h1>
      <p>Simulation 1 (two counters in one boundary):</p>
      <ErrorBoundary>
        <BuggyCounter /> <BuggyCounter />
      </ErrorBoundary>

      <p>Simulation 2 (each counter in its own boundary):</p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <p>Simulation 3 (no boundary):</p>
      <BuggyCounter />

      <hr />
      <h1>Exercise 2 & 3: Lifecycle</h1>
      <Color />
    </div>
  );
}
