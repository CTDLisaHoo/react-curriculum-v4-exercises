// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  /*useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }, []);*/

  useEffect(() => {
    //Assign interval ID to a variable
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    //Return a cleanup function to clear the interval on unmount / re-render
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
/*
React StrictMode helps find bugs by running 'useEffect' twice in development. 
Without cleaning up the 'setInterval', multiple timers run and the counter increments too fast. 
Using 'clearInterval()' in the cleanup function removes the old timer, so the counter updates correctly.
*/
