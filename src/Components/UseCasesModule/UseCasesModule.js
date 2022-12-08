import React, { useState } from "react";
import { CardGrid } from "../CardGrid/CardGrid";

const cards = [
  {
    headerText: "Recipe ideas",
    details:
      "For whatever kind of dietary restrictions or preferences you may have.",
  },
  {
    headerText: "Get questions answered",
    details: "For any lingering questions on your mind.",
  },
  {
    headerText: "Book summaries",
    details: "To catch up on your english homework...",
  },
  {
    headerText: "Dinner reccomendations",
    details: "For your date night, or dinner with friends!",
  },
  {
    headerText: "Movie recommendations",
    details:
      "Based on whatever genres, themes, or actors you're in the mood for.",
  },
  {
    headerText: "Marketing Copy Generation",
    details: "To speed up your copywriting process.",
  },
  // ...
];

export const UseCasesModule = () => {
  return (
    <div>
      <h1>Use Cases</h1>
      <CardGrid cards={cards} />
      <p>...and more!</p>
    </div>
  );
};
