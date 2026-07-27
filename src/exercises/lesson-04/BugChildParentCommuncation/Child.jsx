// Child receives the props object from Parent
// We use { increment } to extract the increment function from that props object
export default function Child({ increment }) {
  return (
    // Calls the increment function that was passed from Parent
    <button onClick={increment}>Increment Counter</button>
  );
}
