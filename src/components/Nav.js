import React from "react";
import dynamic from "next/dynamic";
import { Switch } from "ui-neumorphism";
import { store } from "../store";
import { TOGGLE_THEME } from "../store/actions";
import "ui-neumorphism/dist/index.css";
import styles from "./Nav.module.css";

const Logo = dynamic(() => import('./Logo'));

export default function Nav() {
  const { state, dispatch } = React.useContext(store);
  // console.log('NAV->',state)
  return (
    <header className={styles.header}>
      <nav className={state.theme}>
        <h1 className={styles.h1}>
          <Logo />
        </h1>
        <ul className={styles.ul}>
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
