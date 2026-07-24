// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    //count++;
    // setCount(count);
    // Use the previous state to increase the count instead of changing it directly.
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
/*
  1. THE PROBLEM:
      The original code used count++, which changes the state variable directly.
      React doesn't detect direct changes to state, so the component doesn't re-render
      and the count on the screen doesn't update

 2. THE FIX:
     I changed let to const because state variables shouldn't be reassigned.
     Then I replaced count++ with:
        'setCount((prevCount) => prevCount + 1)'
    This updates the state the correct way by using the previous value, so React
    knows the state changed and re-renders the component. It also works correctly
    if the button is clicked multiple times quickly.
*/
