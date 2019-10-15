import React from 'react';

export default ({ name, age, email, id, deleteBud }) => (
  <>
    <div>
      <h4>Name: {name}</h4>
      <p>Contact: {email}</p>
      <p>Age: {age}</p>
      <button onClick={() => deleteBud(id)}>Delete</button>
    </div>
  </>
);
