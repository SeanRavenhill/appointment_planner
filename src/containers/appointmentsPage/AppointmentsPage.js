

// Import React and Hooks
import React, { useState } from "react";

// Import Components
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

/*
AppointmentsPage Component:
  - Manages the state and logic for adding new appointments and displaying 
    the appointment list.
  - Passes state variables and callback functions as props to child 
    components (`AppointmentForm` and `TileList`).
*/

export const AppointmentsPage = ({ contacts, appointments, addAppointment }) => {
  /*
  State variables used to manage form data:
    - name: Tracks the name of the appointment entered into the form.
    - contact: Tracks the selected contact for the appointment.
    - date: Tracks the date of the appointment entered into the form.
    - time: Tracks the time of the appointment entered into the form.
  */
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  /*
  Handles form submission:
    - Prevents default form behavior (e.g., page reload).
    - Calls the `addAppointment` function to add a new appointment to the list.
    - Resets the form inputs after successful submission.
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(name, contact, date, time);
    setName('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          name={name}
          setName={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          contacts={contacts}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList items={appointments} />
      </section>
    </div>
  );
};