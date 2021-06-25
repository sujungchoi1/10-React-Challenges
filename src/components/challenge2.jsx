import React from "react";
import './ch2.css';

/**
 * Our React component where we display data
 * https://scotch.io/courses/10-react-challenges-beginner/loop-over-and-display-data-with-jsx
 * -----------------------------
 */
function Two() {
    const users = [
        {
          name: '😃 William',
          location: '🏘️ Lagos',
          car: '🚘 Honda'
        },
        {
          name: '😃 Chris',
          location: '🏘️ Moon',
          car: '🚘 Tesla'
        },
        {
          name: ' 😃 Rose',
          location: '🏘️ Venice',
          car: '🚘 Pagani'
        },
        {
          name: '😃 Mike',
          location: '🏘️ Milan',
          car: '🚘 Rolls Royce'
        },
        {
          name: '😃 Liz',
          location: '🏘️ Beirut',
          car: '🚘 Mercedes'
        }
      ];
      
    
  return (
    <div className="Two">
      <div className="page-deets">
        <h2>Loop Over an Array of Data</h2>
      </div>

      {/* Iterate over imported array in userData */}
      <div className="users">
        {users.map((user, index) => (
          // React requires a unique identifier for each element in the array. This key attribute could be a unique ID, or something unique to each object.
          <div key={index}>
            <h3>{user.name}</h3>
            <p>{user.location}</p>
            <p>{user.car}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Two;
