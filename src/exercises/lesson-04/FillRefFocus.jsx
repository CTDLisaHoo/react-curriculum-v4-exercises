// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.

import { useRef } from 'react';

export default function FillRefFocus() {
  const inputRef = useRef(null); // Create ref to access input DOM element

  function focusInput() {
    inputRef.current.focus(); // Focus the input element
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input type="text" ref={inputRef} placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
