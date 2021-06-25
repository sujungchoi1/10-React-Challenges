// https://scotch.io/courses/10-react-challenges-beginner/recreate-layout-with-components

// # The Challenge: Create Components in React
// In this challenge you are provided with an empty function which will serve as a child component. This component will receive props of an icon, label and number.
// Data in React is can be sent from parent to child components via props

// The main tasks of this challenge are:

// Define the child component in JSX.
// Define props of icon, label and number in the child component.
// Use the child component numerous times in the provided parent component and pass in varying data as props.

import React from "react";
import "./ch8.css";

// Create child Statcard component here
function StatCard({ icon, label, number}) {
  // define component here
  // define props of icon label and number
  return (
      <div className="stat-card">
          <div className="stat-line">
              <span>{icon}</span>
              <strong>{label}</strong>
          </div>
          <p>{number.toLocaleString()}</p>
      </div>
  )
}

function Eight() {
  return (
    <div className="Eight">
      <StatCard icon="👉" label="Points" number={3000} />
      <StatCard icon="⚡" label="Lightnings" number={6540} />
      <StatCard icon="🤙" label="Shakas" number={337010} />
      <StatCard icon="💎" label="Diamonds" number={98661} />


    </div>
  );
}

export default Eight;