import React from "react";
import { store } from "./store";
import Nav from "./components/Nav";
import "ui-neumorphism/dist/index.css";
import "./index.css";

export default function App() {
  const {state} = React.useContext(store);
  // console.log('APP->',state);
  return (
    <main className={state.theme}>
      <Nav />
    </main>
  );
}
