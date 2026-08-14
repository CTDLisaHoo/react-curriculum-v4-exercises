//hooks/useTasks.js

/*
    ### 4. Extract a Custom Hook and Organize the Project
    - Move the data-fetching logic out of `StudentWork.jsx` and into a custom hook.
    - The custom hook must:
      - Use `useState` and `useEffect`
      - Manage loading state
      - Return only data (no JSX)

      ### Exercise #4
    - Data-fetching logic is moved to a custom hook
    - Hook manages its own state and effects
    - Files are placed in appropriate folders
    - `StudentWork.jsx` remains the main composed component
*/

import { useEffect, useState } from 'react';

export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTasks([
        { id: 1, title: 'Learn React', completed: true },
        { id: 2, title: 'Refactor code', completed: false },
        { id: 3, title: 'Organize files', completed: false },
      ]);

      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return { tasks, loading };
}
