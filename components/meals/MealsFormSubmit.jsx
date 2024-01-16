"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
    
    // const { pending, data, method, action } = useFormStatus();
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
