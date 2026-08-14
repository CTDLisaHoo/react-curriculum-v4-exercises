//utils/filterTasks.js

/*
  ### 3. Extract a Helper Function
  - Move the task filtering logic out of `StudentWork.jsx`.
  - Create a helper function that:
    - Accepts the task list and filter value
    - Returns the filtered tasks
    - Contains no React code
  - Place this helper in a `utils/` folder and import it back into `StudentWork.jsx`.
  
  ### Exercise #3
  - Filtering logic is moved to a helper function
  - Helper function contains no hooks or JSX
  - `StudentWork.jsx` imports and uses the helper correctly
  
*/

export default function filterTasks(tasks, filter) {
  let visibleTasks = tasks;

  if (filter === 'completed') {
    visibleTasks = tasks.filter((task) => task.completed);
  }

  if (filter === 'pending') {
    visibleTasks = tasks.filter((task) => !task.completed);
  }

  return visibleTasks;
}
