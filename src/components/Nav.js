import React from "react";
import { Avatar, Switch } from "ui-neumorphism";
import Icon from "@mdi/react";
import { mdiCalendar } from "@mdi/js";
import { store } from "../store";
import { TOGGLE_THEME } from "../store/actions";
import "ui-neumorphism/dist/index.css";
import "./Nav.css";

export default function Nav() {
  const { state, dispatch } = React.useContext(store);
  // console.log('NAV->',state)
  return (
    <header>
      <nav className={state.theme}>
        <h1>
          <Avatar>
            <Icon path={mdiCalendar} size={1} />
          </Avatar>
          Meal Planner
        </h1>
        <ul>
          <li>
            <Switch
              checked={state.dark}
              dark={state.dark}
              onClick={() => dispatch({ type: TOGGLE_THEME })}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
