import React from "react";
import Icon from "@mdi/react";
import { ToggleButton, ToggleButtonGroup } from "ui-neumorphism";
import { mdiChartArc, mdiCalendar, mdiFormatListChecks } from "@mdi/js";
import { store } from "../store";
import "./Footer.css";

export default function Footer() {
  const [active, setActive] = React.useState(1);
  const { state, dispatch } = React.useContext(store);
  const mandatoryGroupChange = (e) => {
    const btn = document.querySelector('.first svg');
    btn.setAttribute("color","var(--text-color)")
    console.log("EVENT->", e);
    setActive(e.active);
  };
  // console.log('ACTIVE->',active,active==1)
  React.useEffect(() => {
    const btn = document.querySelector('.first svg');
    // console.log("BTN->", btn);
    active === 1 && btn.setAttribute("color","var(--primary)");
  });

  return (
    <footer className={state.theme}>
      <ToggleButtonGroup
        mandatory
        dark={state.dark}
        onChange={(e) => mandatoryGroupChange(e)}
        className="footer"
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
