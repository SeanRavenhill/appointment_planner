#### Front-End Development

# Challenge Project: Appointment Planner

## Project Overview

A **front-end development** challenge project from Codecademy. This project showcases how to build a React application that manages both contacts and appointments. The application has two main pages:

1. **Contacts Page** — View and add contacts.  
2. **Appointments Page** — View and add appointments.

Instead of a step-by-step tutorial, this project contains a series of open-ended requirements that describe what needs to be built. There can be many correct ways to fulfill these requirements, and you may use the internet, Codecademy, and other resources to help solve any problems you encounter.

---

## Table of Contents

1. [Project Goals](#project-goals)  
2. [Component Tree](#component-tree)  
3. [Setup Instructions](#setup-instructions)  
4. [Tasks](#tasks)  
   1. [Prerequisites](#1-prerequisites)  
   2. [Project Requirements](#2-project-requirements)  
      - [App.js Requirements](#appjs-requirements)  
      - [ContactsPage.js Requirements](#contactspagejs-requirements)  
      - [ContactForm.js Requirements](#contactformjs-requirements)  
      - [TileList.js Requirements](#tilelistjs-requirements)  
      - [Tile.js Requirements](#tilejs-requirements)  
      - [AppointmentsPage.js Requirements](#appointmentspagejs-requirements)  
      - [AppointmentForm.js Requirements](#appointmentformjs-requirements)  
      - [ContactPicker.js Requirements](#contactpickerjs-requirements)  

---

## Project Goals

- Use **functional React components** to build an app that manages contacts and appointments.  
- Apply **React Hooks** (`useState`, etc.) to manage state in functional components.  
- Build and integrate **stateless** and **stateful** components.  
- Practice **React forms** and **validation**.  
- Render lists of data with **reusable components**.

---

## Component Tree

The application architecture features top-level components and shared child components:
```
App
├── Contacts
│   ├── ContactForm
│   └── TileList
│       └── Tile
└── Appointments
    ├── AppointmentForm
    └── TileList
        └── Tile
```

You will be working primarily in the following files and directories:

- App.js
- ContactsPage.js (in src/containers/contactsPage/)
- AppointmentsPage.js (in src/containers/appointmentsPage/)
- ContactForm.js (in src/components/contactForm/)
- AppointmentForm.js (in src/components/appointmentForm/)
- ContactPicker.js (in src/components/contactPicker/)
- Tile.js (in src/components/tile/)

---

## Setup Instructions

1. **[Download](https://static-assets.codecademy.com/Courses/react/projects/appointment-planner-starting-v18.zip?_gl=1*r8qbor*_gcl_au*OTQ3NDIwNzcyLjE3MzIxOTc0NDk.*_ga*NjQ1NDg4OTA0LjE3MzIxOTc2ODc.*_ga_3LRZM6TM9L*MTczNTc3MTc4OC45My4xLjE3MzU3NzE4MTkuMC4wLjA.)** this repository.
2. Ensure you have **Node.js** installed on your computer.  
3. From the project’s root directory, run:
   ```bash
   npm install
   npm start
   ```
4. Your application should automatically open at http://localhost:3000/.
If it does not, please open your browser and navigate there manually.

---

## Tasks
### 1. Prerequisites
To complete this project, it is recommended that you are familiar with the following React concepts:

- **JSX**
- **React Components**
- **Components Interacting**
- **Hooks**
- **React Programming Patterns**
- **React Styles**
- **React Forms**

---
### 2. Project Requirements
The application code starts with `App.js`, `ContactsPage.js`, and `AppointmentsPage.js`. These are stateful components:

- **App.js** handles routing between the two pages (Contacts and Appointments) and manages overall application state.

- **ContactsPage.js** handles logic for displaying and adding new contacts.

- **AppointmentsPage.js** handles logic for displaying and adding new appointments.

#### App.js Requirements
1. Keep track of the **contacts** and **appointments** data, each being an array of objects.

2. Define a callback function that, given a **name**, **phone number**, and **email**, adds a new contact object with that data to the array of contacts.

3. Define a callback function that, given a **name**, **contact**, **date**, and **time**, adds a new appointment object with that data to the array of appointments.

4. Pass the **array of contacts** and the appropriate callback function as props to the **ContactsPage** component.

5. Pass the **appointments array**, **contacts array**, and the **add appointment** function as props to the **AppointmentsPage** component.

---

#### ContactsPage.js Requirements

1. Receives two props:

    • The current list of **contacts**.

    • A callback function for **adding a new contact**.

2. Keeps track of three local state values: the **name**, **phone**, and **email** entered into the form.

3. Checks for duplicates whenever the **name** in the form changes and indicates the name is a duplicate.

4. Only adds a new contact on form submission if it does not duplicate an existing contact’s name.

5. A successful submission should **clear** the form.

6. In the **Add Contact** section, render a `ContactForm` with:
    • Local state variables.
    • Local state variable setter functions.
    • `handleSubmit` callback function.

In the **Contacts** section, render a `TileList` with the contacts array passed via props.

---

#### ContactForm.js Requirements

1. Render a form with:
    • The `onSubmit` attribute set to the callback passed in via props.
    • **3 controlled** `<input>` **elements** for name, phone, and email.
    • A **submit button**.

2. Include a **pattern attribute** on the phone `<input>` with a regex that matches the phone locale of your preference.

This is a **stateless** component for collecting contact information.

---

#### TileList.js Requirements

1. **Receive one prop**: an array of objects to render as a list.
2. Iteratively render **Tile** components using this array of objects.
3. For each object, pass the data as `name` and `description` props to each `Tile`.

This component is generalized to work for both Contacts and Appointments.

---

#### Tile.js Requirements

1. Receive two props: `name` and `description`.

2. Render a `<p>` element with the `name` prop and a className of `"tile-title"`.

3. Iterate over the values in the `description` object and render a `<p>` element for each value, assigning each a className of `"tile"`.

Like `TileList`, this component is generalized to work with data from either contacts or appointments.

---

#### AppointmentsPage.js Requirements

1. Receives three props:
    • The **list of appointments**.
    • The **list of contacts**.
    • A callback function for **adding a new appointment**.

2. Keeps track of four local state variables for the **current name**, **contact**, **date**, and **time** entered into the form.

3. Adds a new appointment on form submission and clears the form upon submission.

4. In the **Add Appointment** section, render an `AppointmentForm` with:
    • Local state variables.
    • Local state variable setter functions.
    • `handleSubmit` callback function.

5. In the **Appointments** section, render a `TileList` with the appointments array passed via props.

---

#### AppointmentForm.js Requirements

1. Render a form with:
    • The `onSubmit` attribute set to the callback function passed in via props.
    • **3 controlled inputs** for name, date, and time.
    • A `ContactPicker` component with the contacts list passed in via props.
    • A **submit button**.

2. Use `getTodayString()` to set the `min` attribute of the date input.

This is a **stateless** component for collecting appointment information.

---

#### ContactPicker.js Requirements

1. Receives **4 props**:
    • An array of **contacts**.
    • A callback function to handle the `onChange` event.
    • `value`.
    • `name`.

2. Render a `<select>` element with:
    • The `onChange` attribute set to the callback function passed in via props.
    • The `value` attribute set to the value prop.
    • The `name` attribute set to the name prop.

3. Add a default `<option>` element with the text `"No Contact Selected"` and a `value` of `""`.

4. Iteratively add `<option>` elements using the contact names from the array passed in via props.