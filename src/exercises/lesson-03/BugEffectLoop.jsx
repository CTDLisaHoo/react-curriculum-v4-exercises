//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // setCount(count + 1);
    // Fixed by adding an empty dependency array and
    // using a functional state update to avoid an infinite loop.
    setCount((prevCount) => prevCount + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Write your explanation here)
/* 
  1. THE PROBLEM:
     The original useEffect didn't have a dependency array, so it ran after every
     render. Since it called setCount, React updated the state and rendered the
     component again. This kept happening over and over, creating an infinite loop.

  2. THE FIX:
     I added an empty dependency array ([]) so the effect only runs once when the
     component first loads. I also changed the update to:
        'setCount((prevCount) => prevCount + 1)'
     Using the previous state is the recommended way to update state because it
     always uses the latest value.
*/
