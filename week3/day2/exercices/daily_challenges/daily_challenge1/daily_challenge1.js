const planets = [
  { name: "mercury", color: "mercury", moons: 0 },
  { name: "venus", color: "venus", moons: 0 },
  { name: "earth", color: "earth", moons: 1 },
  { name: "mars", color: "mars", moons: 2 },
  { name: "jupiter", color: "jupiter", moons: 4 },
  { name: "saturn", color: "saturn", moons: 3 },
  { name: "uranus", color: "uranus", moons: 2 },
  { name: "neptune", color: "neptune", moons: 1 }
];

const section = document.querySelector(".listPlanets");

planets.forEach(planet => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet", planet.color);
  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");
    moon.style.top = `${(i + 1) * 25}px`;
    moon.style.left = `${100 + (i * 30)}px`;
    planetDiv.appendChild(moon);
  }
  section.appendChild(planetDiv);
});
