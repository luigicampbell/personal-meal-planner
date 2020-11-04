import { Avatar } from "ui-neumorphism";
import { mdiCalendar } from "@mdi/js";
import Icon from "@mdi/react";

export default function Logo() {
  return (
    <>
    <Avatar id="test">
      <Icon path={mdiCalendar} size={1} />
    </Avatar>
    Meal Planner
    </>
  );
}
