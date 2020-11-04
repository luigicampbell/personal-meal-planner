import React from "react";
import App from "./index";
import { StateProvider } from "../store";
import "./index.css";

export default function MealPlanner() {
  return (
    <StateProvider>
      <App />
    </StateProvider>
  );
}
