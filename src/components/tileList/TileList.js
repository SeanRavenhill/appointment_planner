// Import React
import React from 'react';

// Import Tile component
import { Tile } from '../../components/tile/Tile';

/*
TileList Component:
  - A stateless component that renders a list of Tile components.
  - Receives an array of objects (via the `items` prop) and maps each object 
    to a Tile component.
  - Designed to handle both `contacts` and `appointments` arrays passed 
    from parent components.

Props:
  - items: An array of objects where each object represents a tile's data.
    Example for contacts:
      [
        { name: "John Doe", phone: "123-456-7890", email: "john@email.com" },
        { name: "Jane Smith", phone: "987-654-3210", email: "jane@email.com" }
      ]
    Example for appointments:
      [
        { name: "Meeting", contact: "John Doe", date: "2023-10-10", time: "14:00" },
        { name: "Dentist", contact: "Jane Smith", date: "2023-10-11", time: "10:00" }
      ]
*/
export const TileList = ({ items }) => {
  return (
    <div>
      {/*
      Use the `map` method to iterate over the `items` array:
        - Destructure each item to extract the `name` property.
        - Use the rest operator (`...details`) to collect the remaining 
          key-value pairs from the object into a new `details` object.
        - Pass `name` and the values of `details` (converted to an array) 
          as props to the Tile component.
        - Use a unique `key` for each Tile, falling back to `index` if 
          an `id` is not available.
      */}
      {items.map(({ name, ...details }, index) => (
        <Tile
          key={details.id || index}
          name={name}
          description={Object.values(details)}
        />
      ))}
    </div>
  );
};
