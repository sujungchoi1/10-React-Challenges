import React, { useContext } from "react";
import { UserContext } from './UserContext'; 

const UserForm = () => {
  const user = useContext(UserContext);

  return (
    <div className="user-form">
      {/* Change user's name in context */}
      <div className="input-item">
        <label className="label">Update Name: </label>
        <input className="input" onChange={e => user.setName(e.target.value)} />
      </div>

      {/* Change user's location in context */}
      <div className="input-item">
        <label className="label">Update Location: </label>
        <input className="input" onChange={e => user.setLocation(e.target.value)} />
      </div>
    </div>
  );
};

export default UserForm;

// Once a change is detected in a specific input, it fires the corresponding method, which changes the value in context. This updates all the other component subscribed to the context.