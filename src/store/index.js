import React from "react";
import { TOGGLE_THEME, TOGGLE_ACTIVE, POPULATE_MEALS } from "./actions";

const themes = {
  dark: "theme--dark",
  light: "theme--light",
};

const initialState = {
  active: 1,
  dark: false,
  loaded: false,
  meals: [],
  theme: themes.light,
};

const store = React.createContext(initialState);
const { Provider } = store;

function StateProvider({ children }) {
  const [state, dispatch] = React.useReducer((state, action) => {
    const newState = { ...state };
    switch (action.type) {
      case TOGGLE_THEME:
        const dark = !state.dark;
        const theme = dark ? themes.dark : themes.light;
        newState.dark = dark;
        newState.theme = theme;
        return newState;
      case TOGGLE_ACTIVE:
        // console.log(action);
        newState.active = action.data;
        return newState;
      case POPULATE_MEALS:
        newState.meals = action.data;
        newState.loaded = true;
        return newState;
      default:
        throw new Error("whoops!");
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, StateProvider };
