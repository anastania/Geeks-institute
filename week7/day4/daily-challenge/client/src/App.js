import React, { Component } from "react";

class App extends Component {
  state = {
    getMessage: "",
    postMessage: "",
    inputValue: "",
  };

  // ✅ Part I: Fetch message from Express on mount
  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:5000/api/hello");
      const data = await response.json();
      this.setState({ getMessage: data.message });
    } catch (err) {
      console.error("Error fetching /api/hello:", err);
    }
  }

  // ✅ Part II: POST request
  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/world", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputValue: this.state.inputValue }),
      });

      const data = await response.json();
      this.setState({ postMessage: data.message });
    } catch (err) {
      console.error("Error posting to /api/world:", err);
    }
  };

  render() {
    const { getMessage, postMessage, inputValue } = this.state;

    return (
      <div style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h1>{getMessage}</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type something..."
            value={inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
            style={{ padding: "0.5rem", width: "250px", marginRight: "10px" }}
          />
          <button type="submit" style={{ padding: "0.5rem 1rem" }}>
            Send
          </button>
        </form>

        {postMessage && (
          <p style={{ marginTop: "1rem", color: "green" }}>{postMessage}</p>
        )}
      </div>
    );
  }
}

export default App;
