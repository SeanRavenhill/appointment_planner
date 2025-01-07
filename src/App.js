

// Import React & React Hooks
import React, { useState } from 'react';

// Import React Router & Routes
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import Root, { ROUTES } from './components/root/Root';

// Import Components
import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';

function App() {
  /*
    State variables:
    - contacts: Stores the list of contacts.
    - appoitments: Stores the list of appointments.
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
  Callback Functions:
  - addContact: takes in contact data and passes it as an object to the contacts state variable.
  - addAppointment: takes in appointment data and passes it as an object to the appointments state variable. 
  */
  const addContact = (name, phone, email) => {
    const contact = {
      name: name,
      phone: phone,
      email: email,
    };

    setContacts([...contacts, contact]);
  };

  const addAppointment = (name, contact, date, time) => {
    const appointment = {
      name: name,
      contact: contact,
      date: date,
      time: time,
    };

    setAppointments([...appointments, appointment]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
            />
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              contacts={contacts}
              appointments={appointments}
              addAppointment={addAppointment}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
