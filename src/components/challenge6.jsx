import React, { useState } from 'react';
import './ch6.css';

// # The Challenge: Move a Box Up
// This challenge requires you to move the position of a provided box upwards whenever a button is clicked.

// The tasks in this challenge are:

// Create a state variable to hold the value of the transformation points.
// Handle an event which increments or decrements the transformation points.
// Bind the transformation using inline CSS to the created box.

function Six() {

    const [offsetTop, SetOffsetTop] = useState(200);

    function moveBoxUp() {
        SetOffsetTop(offsetTop - 50);
    }
    function moveBoxDown() {
        SetOffsetTop(offsetTop + 50);
    }

    function reset() {
        SetOffsetTop(200);
    }

  return (
    <div className="Six">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={moveBoxUp}>👆 Move Up 👆</button>
      <button onClick={moveBoxDown}>👇 Move Down 👇</button>
      <button onClick={reset}>🧹 Reset 🧹</button>

      {/* move this box using inline styles */}
      <div className="box" style={{transform: `translateY(${offsetTop}px)`}} />

    </div>
  );
}

export default Six;
