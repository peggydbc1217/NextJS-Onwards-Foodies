"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

//create server actions

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState,formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator_email: formData.get("email"),
    creator: formData.get("name"),
  };

  //input validation
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.image) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.creator) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message:'Please enter valid values for all fields',    
    };
  }

  await saveMeal(meal);
  redirect("/meals");
}
