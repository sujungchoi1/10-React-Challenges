import React, { useState } from 'react';
import './ch4.css';

// https://scotch.io/courses/10-react-challenges-beginner/show-an-alert-based-on-an-input#toc-the-challenge-show-alert-when-typing
// In this React challenge, we will carry out a DOM action after an event is fired. This event is native to the input element in React, and we'll be listening with the onChange form input event.

// In this challenge, you'll create a form which receives input data and alerts the window when a specific word is typed in.

// The main tasks of this challenge are:

// Store form data in state.
// Display alert if a particular word is entered into the form.

function Four() {
    const [input, setInput] = useState('');

    if (input === 'open sesame') {
        alert('You may pass!');
    }

    return (
        <div className="Four">
            <h2>What's the secret phrase?</h2>

            <input
                type="text"
                placeholder="Super duper secret"
                value={input}
                onChange={e=>setInput(e.target.value)}
            />

            <p>
                Hint: It's <strong>open sesame</strong>
            </p>

        </div>
    );
}

export default Four;