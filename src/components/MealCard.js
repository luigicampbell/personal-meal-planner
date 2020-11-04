import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Body2,
  CardAction,
  Button,
  Subtitle2,
} from "ui-neumorphism";
import { store } from "../store";
import styles from "./MealCard.module.css";

export default function MealCard({ breakfast, lunch, dinner, id, date }) {
  const { state } = React.useContext(store);
  const src = `https://picsum.photos/id/${id}/300/200`;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date(date).toLocaleDateString(undefined, options);
  return (
    <div className={styles.mealCard}>
      <Card dark={state.dark} className={styles.innerCard}>
        <CardHeader dark={state.dark} title={today} />
        <CardContent>
          <Subtitle2 secondary style={{ marginBottom: "4px" }}>
            Breakfast: {breakfast}
          </Subtitle2>
          <Body2>
            <strong>Lunch:</strong> {lunch} <br />
            <em>Dinner:</em> {dinner}
          </Body2>
        </CardContent>
        <CardAction>
          <Button rounded text color="var(--primary)">
            edit
          </Button>
          <Button rounded text color="var(--primary)">
            ingredients
          </Button>
        </CardAction>
      </Card>
    </div>
  );
}
