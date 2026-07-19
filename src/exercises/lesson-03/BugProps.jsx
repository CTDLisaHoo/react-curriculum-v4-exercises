// src/exercises/lesson-03/BugProps.jsx

import React, { useState } from 'react';

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/

export default function BugProps({ name = 'friend' }) {
  //let message = 'Hello, ' + name;
  // Use state instead of a regular variable so React tracks changes.
  const [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    //message = 'Hi, ' + name + '!';
    // Update the state instead of changing a variable directly
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)
/*
  1. THE PROBLEM:
     - The message was stored in a normal variable using 'let'.
     - React does not watch regular variables, so changing the value
       does not update what is shown on the screen.
     - Props, such as 'name', should only be read, not changed.

  2. THE FIX:
     - I replaced the regular variable with the 'useState' hook.
     - The state variable stores the message, and 'setMessage' updates it.
     - When 'setMessage' is called, React re-renders the component,
       so the updated greeting is displayed.
*/
