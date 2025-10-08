import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask, onUpdateTaskDate }) => {
  if (tasks.length === 0) {
    return <p className="no-tasks">No hi ha tasques pendents!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          onUpdateTaskDate={onUpdateTaskDate}
        />
      ))}
    </ul>
  );
};

export default TaskList;
