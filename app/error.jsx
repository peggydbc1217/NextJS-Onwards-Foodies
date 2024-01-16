'use client'
import React from "react";

export default function Error({ error }) {

  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <h2>Failed to fetch meal data. Please try again later!</h2>
    </main>
  );
}
