// Import React
import React from "react";

/*
ContactPicker Component:
  - A stateless component that renders a dropdown list of contact names.
  - Allows the user to select a contact from the provided `contacts` array.
  - Uses a default "Select Contact" option for cases where no contact is pre-selected.

Props:
  - contacts (array): An array of contact objects. Each object must include a `name` property.
  - onChange (function): Callback function to handle changes to the selected contact.
  - value (string): The current value of the selected contact.
  - name (string): The name attribute for the select element, used to identify the input.
*/
export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <>
      {/* Label for the contact picker dropdown */}
      <label htmlFor={name}>Select Contact:</label>

      {/* Select dropdown to choose a contact */}
      <select name={name} id={name} onChange={onChange} value={value}>
        {/* Default option */}
        <option value="">Select Contact</option>

        {/* Generate an <option> element for each contact */}
        {contacts.map((contact, index) => (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
    </>
  );
};
