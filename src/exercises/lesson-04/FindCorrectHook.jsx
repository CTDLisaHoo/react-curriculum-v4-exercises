// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render

import { useState } from 'react';

export default function FindCorrectHook() {
  //let clickCount = 0; // ← incorrect implementation
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    // clickCount++;
    setClickCount((prev) => prev + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}
