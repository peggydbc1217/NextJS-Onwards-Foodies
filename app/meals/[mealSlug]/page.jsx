import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { getMeal } from "../../../lib/meals";
import { notFound } from "next/navigation";

export default function page({ params }) {
  const meal = getMeal(params.mealSlug);
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  if (!meal) {
    //show the closest not found page
    notFound();
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill></Image>
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
