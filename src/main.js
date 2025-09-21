// import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";

// document.querySelector("#app").innerHTML = `
//   <div>

//   </div>
// `;

// setupCounter(document.querySelector("#counter"));

const cars = [
  {
    name: "2021 Toyota Camry",
    price: "$22,900",
    image: "https://source.unsplash.com/featured/?toyota,camry",
  },
  {
    name: "2020 Ford Mustang",
    price: "$26,500",
    image: "https://source.unsplash.com/featured/?ford,mustang",
  },
  {
    name: "2019 Honda Civic",
    price: "$17,800",
    image: "https://source.unsplash.com/featured/?honda,civic",
  },
];

const carGrid = document.querySelector(".car-grid");

cars.forEach((car) => {
  const card = document.createElement("div");
  card.className = "car-card";
  card.innerHTML = `
    <img src="${car.image}" alt="${car.name}" />
    <div class="info">
      <h3>${car.name}</h3>
      <p><strong>${car.price}</strong></p>
    </div>
  `;
  carGrid.appendChild(card);
});
