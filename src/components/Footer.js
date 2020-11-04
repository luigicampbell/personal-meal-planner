import React from "react";
import Icon from "@mdi/react";
import { ToggleButton, ToggleButtonGroup } from "ui-neumorphism";
import { mdiChartArc, mdiCalendar, mdiFormatListChecks } from "@mdi/js";
import { store } from "../store";
import { TOGGLE_ACTIVE } from "../store/actions";
import styles from "./Footer.module.css";

export default function Footer() {
  // const [active, setActive] = React.useState(1);
  const { state, dispatch } = React.useContext(store);
  const { active } = state;
  const mandatoryGroupChange = (e) => {
    console.log("EVENT->", e);
    // setActive(e.active);
    dispatch({type:TOGGLE_ACTIVE, data:e.active})
  };
  // console.log('ACTIVE->',active,active==1)
  React.useEffect(() => {
    const btn = document.querySelector('.first button');
    active === 1 && btn.click();
  });

  return (
    <footer className={`${state.theme} ${styles.footer}`}>
      <ToggleButtonGroup
        mandatory
        dark={state.dark}
        onChange={(e) => mandatoryGroupChange(e)}
        className={styles.btnGroup}
      >
        <ToggleButton
          data-name="first"
          color="var(--primary)"
          rounded
          className={`${state.className} first`}
          selected={active === 1}
          value={1}
        >
          <Icon path={mdiCalendar} size={1} />
        </ToggleButton>
        <ToggleButton
          color="var(--primary)"
          rounded
          className={state.className}
          selected={active === 2}
          value={2}
        >
          <Icon path={mdiChartArc} size={1} />
        </ToggleButton>
        <ToggleButton
          color="var(--primary)"
          rounded
          className={state.className}
          selected={active === 3}
          value={3}
        >
          <Icon path={mdiFormatListChecks} size={1} />
        </ToggleButton>
      </ToggleButtonGroup>
    </footer>
  );
}
