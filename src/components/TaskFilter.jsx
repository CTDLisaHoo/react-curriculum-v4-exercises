//components/TaskFilter.jsx

/*
  ### 2. Refactor Without Changing Behavior
  - Replace the extracted JSX in `StudentWork.jsx` with your new components.
  - The application must behave exactly the same as before:
    - Filtering still works
    - Buttons still respond to clicks
    - Loading behavior does not change

      This exercise is about refactoring safely, not adding new features.

  ### Exercise #2
  - Application behavior remains unchanged
  - Refactored components are used correctly in `StudentWork.jsx`
  - No functionality is lost during refactor

*/

export default function TaskFilter({ filter, onFilterChange }) {
  return (
    <div>
      <button onClick={() => onFilterChange('all')}>All</button>

      <button onClick={() => onFilterChange('completed')}>Completed</button>

      <button onClick={() => onFilterChange('pending')}>Pending</button>

      <p>Current filter: {filter}</p>
    </div>
  );
}
