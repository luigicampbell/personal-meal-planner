import React from "react";
import MealCard from "./MealCard";

export default function CardList({ meals }) {
  return meals.map(meal => <MealCard key={meal.id} {...meal} />);
}