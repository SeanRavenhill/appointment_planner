

// Import React
import React from "react";

/*
Tile Component:
  - A stateless component responsible for rendering a single tile.
  - Displays a `name` as the title and iterates over the `description` 
    array to render additional details as individual lines.
  - Designed to work with both `contacts` and `appointments`, making 
    it flexible and reusable for various data structures.

Props:
  - name (string): The title or primary identifier of the tile (e.g., 
    contact name or appointment title).
  - description (array): An array of strings or numbers representing 
    additional details to display for the tile (e.g., phone number, 
    email, date, time).
*/

export const Tile = ({ name, description }) => {
  return (
      <div className="tile-container">
        {/* Render the tile's title */}
        <p className="tile-title">{name}</p>

        {/* 
        Iterate over the `description` array:
          - Render each detail as a separate paragraph.
          - Use `index` as the fallback key, assuming description values are primitives.
        */}
        {description.map((desc, index) => (
          <p key={index} className="tile">{desc}</p>
        ))}
      </div>
  );
};
