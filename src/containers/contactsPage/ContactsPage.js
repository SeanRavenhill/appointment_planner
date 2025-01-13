

// Import React and Hooks
import React, { useState, useEffect } from "react";

// Import Components
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

/*
ContactsPage Component:
  - Manages the state and logic for adding new contacts and displaying 
    the contact list.
  - Passes state variables and callback functions as props to child 
    components (`ContactForm` and `TileList`).
*/

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  State variables used to manage form data and validation:
    - name: Tracks the name entered into the form.
    - phone: Tracks the phone number entered into the form.
    - email: Tracks the email address entered into the form.
    - isDuplicate: Boolean flag indicating if the entered name already exists 
      in the contacts array, updated dynamically with useEffect.
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(''); 
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(contacts.some(contact => contact.name === name));


  /*
  Handles form submission:
    - Prevents default form behavior (e.g., page reload).
    - Checks the `isDuplicate` flag to ensure duplicate names are not added.
    - Calls the `addContact` function to add a new contact to the list.
    - Resets the form inputs after successful submission.
  */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isDuplicate) {
      addContact( name, phone, email );
      setName('');
      setPhone('');
      setEmail('');
    }
    
  };

  /*
  useEffect:
    - Dynamically updates the `isDuplicate` state whenever the `contacts` array 
      or `name` input changes.
    - Ensures the form provides real-time feedback about duplicate names.
    - Dependency array: Reactively listens to changes in `contacts` and `name`.
  */
  useEffect(() => {
    setIsDuplicate(contacts.some(contact => contact.name === name));
  }, [contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          isDuplicate={isDuplicate}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
