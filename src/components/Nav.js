import React from "react";
import { Switch } from "ui-neumorphism";
import { store } from "../store";
import { TOGGLE_THEME } from "../store/actions";
import "ui-neumorphism/dist/index.css";

export default function Nav() {
  const { state, dispatch } = React.useContext(store);
  // console.log('NAV->',state)
  return (
    <nav>
      <span></span>
      <ul>
        <li><Switch checked={state.dark} dark={state.dark} onClick={() => dispatch({ type: TOGGLE_THEME })}/></li>
      </ul>
    </nav>
  );
}
