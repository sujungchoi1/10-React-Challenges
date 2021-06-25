// React Context provides the ability to create data and pass this data via a provider to any component in a React application. Context in React allows you to pass data to any component without "prop drilling".

// # The Challenge: Use React Context
// You are required to create user data containing name and location in context, pass this data to two individual components, and update the data from a separate component.

// The requirements for this challenge are:

// Create a React context with name and location data
// Wrap parent component with context.
// Retrieve data in differ components.
// Update data in a different component.

import React from "react";
import Name from "./Name";
import Location from "./Location";
import UserForm from "./UserForm";
import "./ch9.css";

function Nine() {
  return (
    <div className="Nine">
      <h2 className="is-size-4">
        We'll use the React Context API to pass and receive data in any
        component.
      </h2>
      <div className="container">
        <UserForm />

        <h2 className="is-size-4">Display User Info Here 👇</h2>
        {/* <p>
          These two children components will receive data. These could be nested
          components.
        </p> */}
        <Name />
        <Location />
      </div>
    </div>
  );
}

export default Nine;
