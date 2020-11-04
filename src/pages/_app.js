import React from "react";
import Home from "./index";
import { StateProvider } from "../store";
import "./index.css";

export default function MealPlanner() {
  return (
    <StateProvider>
      <Home />
    </StateProvider>
  );
}
