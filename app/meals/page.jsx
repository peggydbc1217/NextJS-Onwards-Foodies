import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "../../lib/meals";
import { Suspense } from "react";
import MealsLoadingPage from "./loading-out";

//fetch some data
async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created by
          <span className={classes.highlight}>you</span>
        </h1>
        <p>Choose your favorite recipr and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage/>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
