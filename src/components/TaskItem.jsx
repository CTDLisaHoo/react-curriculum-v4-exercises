//components/TaskItem.jsx

/*
### 1. Extract Reusable Components

- Refactor `StudentWork.jsx` to extract reusable UI into separate components.
- You must extract:
  - A user profile section
  - A task filter button group
  - A single task item
- Each extracted component must:
  - Receive data via props
  - Contain no unnecessary state
  - Be reusable and presentation-focused
*/

export default function TaskItem({ task }) {
  return (
    <li>
      {task.title} {task.completed ? '✅' : '⏳'}
    </li>
  );
}
