import React from "react";
import MealItem from "./MealItem";
import classes from "./MealsGrid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meals}></MealItem>
        </li>
      ))}
    </ul>
  );
}
