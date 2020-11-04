import React from "react";
import Icon from "@mdi/react";
import {
  Body2,
  Card,
  CardContent,
  CardHeader,
  CardAction,
  IconButton,
  Overline,
} from "ui-neumorphism";
import { mdiFridge, mdiPencilCircle } from "@mdi/js";
import { store } from "../store";
import styles from "./MealCard.module.css";

export default function MealCard({ breakfast, lunch, dinner, id, date }) {
  const { state } = React.useContext(store);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date(date).toLocaleDateString(undefined, options);
  return (
    <div className={styles.mealCard}>
      <Card dark={state.dark} className={styles.innerCard} loading={true}>
        <CardHeader
          action={
            <IconButton rounded text={false} color="var(--success)">
              <Icon path={mdiPencilCircle} size={1} />
            </IconButton>
          }
          dark={state.dark}
          title={today}
          className={styles.cardHeader}
        />

        <CardContent>
          <Overline>
            <strong>Breakfast:</strong> {breakfast}
          </Overline>
          <Overline>Lunch: {lunch}</Overline>
          <Overline>Dinner: {dinner}</Overline>
          <Body2></Body2>
        </CardContent>
        <CardAction className={styles.cardActions}>
          <IconButton rounded text={false} color="var(--primary)">
            <Icon path={mdiFridge} size={1} />
          </IconButton>
        </CardAction>
      </Card>
    </div>
  );
}
