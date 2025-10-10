import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor: theme === "light" ?  "#333" : "#eee",
    color: theme === "light" ? "#fff" : "#000",
    marginTop: "20px",
  };

  return (
  <div style={styles} >
    <button style={styles} onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  </div>);
};

export default ThemeSwitcher;
