import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import CharacterCounter from "./CharacterCounter";

const ExercisesXP = () => {
  return (
    <ThemeProvider>
      <div
        style={{
          textAlign: "center",
          minHeight: "100vh",
          padding: "50px",
          backgroundColor: "#f9f9f9",
          transition: "background-color 0.3s ease",
        }}
      >
        <h2>🌟 Exercises XP</h2>
        <p>Theme Switcher & Character Counter</p>
        <ThemeSwitcher />
        <CharacterCounter />
      </div>
    </ThemeProvider>
  );
};

export default ExercisesXP;
