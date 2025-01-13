

// Import React
import React from 'react';

/*
ContactForm Component:
  - Stateless form component for collecting contact information.
  - Displays controlled inputs for `name`, `email`, and `phone`.
  - Provides real-time feedback for duplicate names and phone validation.
  - Disables the submit button if the entered name is a duplicate.
*/

// Regex pattern for validating UK phone numbers (landline and mobile):
const UK_PHONE_REGEX = '^(((\\+44\\s?|0044\\s?)|(\\(?0))((2[03489]\\)?\\s?\\d{4}\\s?\\d{4})|(1[23456789]1\\)?\\s?\\d{3}\\s?\\d{4})|(1[23456789][234578][0234679]\\)?\\s?\\d{6})|(1[2579][0245][0467]\\)?\\s?\\d{5})|(11[345678]\\)?\\s?\\d{3}\\s?\\d{4})|(1[35679][234689]\\s?[46789][234567]\\)?\\s?\\d{4,5})|([389]\\d{2}\\s?\\d{3}\\s?\\d{4})|([57][0-9]\\s?\\d{4}\\s?\\d{4})|(500\\s?\\d{6})|(7[456789]\\d{2}\\s?\\d{6})))$';

export const ContactForm = ({
    name,               // State variable for name input
    setName,            // State updater for name
    phone,              // State variable for phone input
    setPhone,           // State updater for phone
    email,              // State variable for email input
    setEmail,           // State updater for email
    isDuplicate,        // Boolean indicating if the name is a duplicate
    handleSubmit        // Function to handle form submission
  }) => {
  
  /*
  Handles input changes for all form fields:
    - Dynamically updates the corresponding state based on the `name` attribute of the input.
    - Supports controlled components by keeping form inputs in sync with state.
  */
  const handleInputChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <form className='contact-form' method="post" onSubmit={handleSubmit}>

        {/* Input field for Name */}
        <div className="contact-form-item">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            className={isDuplicate ? "input-warning" : null}
            title={isDuplicate ? "Name is already in your Contacts List" : null}
            onChange={handleInputChange}
            required
          />
          {isDuplicate && <p className="error-message">Name already exists!</p>}
        </div>

        {/* Input field for Email */}
        <div className="contact-form-item">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input field for Phone */}
        <div className="contact-form-item">
          <label htmlFor="phone">Phone: </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g., +44 20 1234 5678"
            title="Please enter a valid UK phone number (e.g., +44 20 1234 5678)"
            pattern={UK_PHONE_REGEX}
            value={phone}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="contact-form-item">
          <input
            type="submit"
            value="Add Contact"
            disabled={isDuplicate}
          />
        </div>

      </form>
    </>
  );
};
