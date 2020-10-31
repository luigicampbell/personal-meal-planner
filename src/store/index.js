import React from "react";
import { TOGGLE_THEME } from "./actions";

const themes = {
  dark: "theme--dark",
  light: "theme--light",
};

const initialState = {
  dark: false,
  theme: themes.light
};

const store = React.createContext(initialState);
const { Provider } = store;

function StateProvider({ children }) {
  const [state, dispatch] = React.useReducer((state,action) => {
    console.log('WHAT')
    switch (action.type) {
      case TOGGLE_THEME:
      const dark = !state.dark;
      const theme = dark ? themes.dark : themes.light;
        const newState = {...state, dark, theme}
        return newState;
    
      default:
        throw new Error('WHAT THE FUCK?');
    }
  }, initialState);
  
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, StateProvider };
