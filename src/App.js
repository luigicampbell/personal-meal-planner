import React from "react";
import { store } from "./store";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import { Divider } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import "./index.css";

const mockData = [
  {
    id: "1047",
    date: new Date(),
    breakfast: "Egg Slut",
    lunch: "In N' Out",
    dinner: "Guisados",
  },
  {
    id: "1052",
    date: new Date().setDate(new Date().getDate() + 1),
    breakfast: "Egg Slut",
    lunch: "In N' Out",
    dinner: "Guisados",
  },
  {
    id: "1055",
    date: new Date().setDate(new Date().getDate() + 2),
    breakfast: "Egg Slut",
    lunch: "In N' Out",
    dinner: "Guisados",
  },
  {
    id: "1053",
    date: new Date().setDate(new Date().getDate() + 3),
    breakfast: "Egg Slut",
    lunch: "In N' Out",
    dinner: "Guisados",
  },
  {
    id: "1056",
    date: new Date().setDate(new Date().getDate() + 4),
    breakfast: "Egg Slut",
    lunch: "In N' Out",
    dinner: "Guisados",
  },
];

export default function App() {
  const { state } = React.useContext(store);
  // console.log('APP->',state);
  return (
    <div className="main">
      <Nav dark={state.dark} />
      <main className={state.theme}>
        <CardList meals={mockData} />
        <Divider dark={state.dark} />
      </main>
      <Footer />
    </div>
  );
}
