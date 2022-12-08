import React, { useState } from "react";
import "./CardGrid.css";

function Card({ headerText, details }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card">
      <div className="card-header" onClick={() => setExpanded(!expanded)}>
        {headerText}
      </div>
      {expanded && <div className="card-details">{details}</div>}
    </div>
  );
}

export function CardGrid({ cards }) {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card headerText={card.headerText} details={card.details} />
      ))}
    </div>
  );
}
