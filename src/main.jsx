// import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";

// document.querySelector("#app").innerHTML = `
//   <div>

//   </div>
// `;

// setupCounter(document.querySelector("#counter"));
import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("Loading...");

  useEffect(() => {
  fetch("/api/greeting") // relative path works because of proxy
    .then(res => res.json())
    .then(data => setGreeting(data.greeting))
    .catch(() => setGreeting("Failed to load greeting"));
}, []);


  return <h1>{greeting}</h1>; // use JSX syntax
};

const root = ReactDOM.createRoot(document.getElementById("react-greeting"));
root.render(<Greeting />);

root.render(React.createElement(Greeting));

const carStyles = [
  {
    name: "Chariots of Fire",
    price: "$52,900",
    image:
      "https://images.unsplash.com/photo-1642609630364-a31c1b021771?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Submarines with Wings",
    price: "$26,500",
    image:
      "https://images.unsplash.com/photo-1545289602-6c9479945c49?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1Ym1hcmluZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Electric Dreams",
    price: "$17,800",
    image:
      "https://images.unsplash.com/photo-1676919296008-d74e423cb44e?q=80&w=1337&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Nimble Navigators",
    price: "$45,300",
    image:
      "https://images.unsplash.com/photo-1601370552761-d129028bd833?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
// add link
//

const carGrid = document.querySelector(".car-grid");

carStyles.forEach((carStyle) => {
  const card = document.createElement("div");
  card.className = "car-card";
  card.innerHTML = `
    <img src="${carStyle.image}" alt="${carStyle.name}" />
    <div class="info">
      <h3>${carStyle.name}</h3>
      <p><strong>${carStyle.price}</strong></p>
    </div>
  `;
  carGrid.appendChild(card);
});
