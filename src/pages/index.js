import React from "react";
import { POPULATE_MEALS } from "../store/actions";
import { store } from "../store";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MealPlan from "../components/MealPlan";
import { Divider } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

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
  const { state, dispatch } = React.useContext(store);
  console.log("APP->", state);
  const { active, dark, loaded, meals, theme } = state;

  const fetchData = React.useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").catch(
      (error) => {
        console.error(error);
      }
    );
    const meals = await res.json();
    console.log("MEALS->", meals);
    if (meals.length === 0) {
      dispatch({ type: POPULATE_MEALS, data: meals });
    }
  }, [dispatch]);

  const getActive = React.useCallback( () => {
    switch (active) {
      case 1:
        return <MealPlan meals={mockData} />;
      case 2:
      return 'GRAPH';
      case 3:
      return 'GROCERY LIST';
      default:
        return <MealPlan meals={mockData} />;
    }
  },[active]);

  React.useEffect(() => {
    console.log("LOADED=>", loaded);
    if (!loaded) {
      fetchData();
    }
    getActive();
  }, [fetchData, loaded, getActive]);



  return (
    <div className="main">
      <Nav dark={dark} />
      <main className={theme}>
        {getActive()}
        <Divider dark={dark} />
      </main>
      <Footer />
    </div>
  );
}
