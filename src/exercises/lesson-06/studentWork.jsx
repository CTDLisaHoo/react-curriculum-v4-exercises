// studentWork.jsx

import { useState } from 'react';

import UserProfile from '../../components/UserProfile';
import TaskFilter from '../../components/TaskFilter';
import TaskItem from '../../components/TaskItem';
import useTasks from '../../hooks/useTasks';
import filterTasks from '../../utils/filterTasks';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useTasks();
  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div>
      <UserProfile name="Student" />

      <TaskFilter filter={filter} onFilterChange={setFilter} />

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
