// Import React
import React from "react";

// Import Components
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

/*
Utility Function:
  - getTodayString: Returns the current date formatted as "YYYY-MM-DD".
  - Used to set the `min` attribute for the date input, ensuring that 
    users cannot select a past date.
*/
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

/*
AppointmentForm Component:
  - A stateless form component for collecting appointment information.
  - Handles user inputs for appointment title, contact, date, and time.
  - Passes form data and state management callbacks via props.
  - On submission, invokes the `handleSubmit` callback passed from the parent 
    to handle adding a new appointment.
*/

export const AppointmentForm = ({
  contacts,    // Array of contact objects used to populate the ContactPicker
  name,        // Current value for the "title" input field
  setName,     // Callback function to update the "title" input state
  contact,     // Current value for the selected contact
  setContact,  // Callback function to update the selected contact state
  date,        // Current value for the "date" input field
  setDate,     // Callback function to update the "date" input state
  time,        // Current value for the "time" input field
  setTime,     // Callback function to update the "time" input state
  handleSubmit // Callback function invoked on form submission
}) => {

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'contact':
        setContact(e.target.value);
        break;
      case 'date':
        setDate(e.target.value);
        break;
      case 'time':
        setTime(e.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <form className="contact-form" method="post" onSubmit={handleSubmit}>
        {/* Input field for Appointment Title */}
        <div className="appointment-form-item">
          <label htmlFor="name">Title:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* ContactPicker Component */}
        <div className="appointment-form-item">
          <ContactPicker
            contacts={contacts} // Array of contacts
            name="contact"      // Input name attribute for the contact picker
            value={contact}
            onChange={handleInputChange}
          />
        </div>

        {/* Input field for Date */}
        <div className="appointment-form-item">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={handleInputChange}
            min={getTodayString()}
            required
          />
        </div>

        {/* Input field for Time */}
        <div className="appointment-form-item">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            name="time"
            id="time"
            value={time}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="appointment-form-item">
          <input
            type="submit"
            value="Add Appointment"
          />
        </div>
      </form>
    </>
  );
};
