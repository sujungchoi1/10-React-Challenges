import React, {useState} from "react";
import './ch2.css';

//State provides a way to create and update dynamic data in an application.
// https://scotch.io/courses/10-react-challenges-beginner/use-react-state-to-update-the-dom

function Three() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');


  return (
    <div className="Three">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      {/* Display Data */}
      <div className="input-display">
        <p>Display Name: {name}</p>
        <p>Display Age: {age} </p>
      </div>

      {/* Collect User Inputs */}
      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label className="label">Name: </label>
          <input className="input" type="text" placeholder="William" onChange={e=>setName(e.target.value)} value={name}/>
        </div>

        {/* Input age */}
        <div className="field">
          <label className="label">Age: </label>
          <input className="input" type="number" placeholder="38" onChange={e=>setAge(e.target.value)} value={age} />
        </div>
      </div>
    </div>
  );
}

export default Three;