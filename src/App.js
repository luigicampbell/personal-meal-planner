import React from "react";
import { store } from "./store";
import Nav from "./components/Nav";
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
];

export default function App() {
  const { state } = React.useContext(store);
  // console.log('APP->',state);
  return (
    <>
      <Nav />
      <Divider dark={state.dark} />
      <main className={state.theme}>
        <CardList meals={mockData} />
      </main>
      <Divider dark={state.dark} />
    </>
  );
}
