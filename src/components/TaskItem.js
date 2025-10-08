import React from 'react';
import TaskDueDate from './TaskDueDate'; // ✅ importem el selector de data

const TaskItem = ({ task, onToggleComplete, onDeleteTask, onUpdateTaskDate }) => {
  return (
    <li
      className={`${task.completed ? 'completed' : ''} ${
        task.priority ? 'priority-task' : ''
      }`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', // ✅ per adaptar-se a pantalles petites
        gap: '10px',
        padding: '15px 10px',
      }}
    >
      <span
        onClick={() => onToggleComplete(task.id)}
        style={{ cursor: 'pointer', flexGrow: 1 }}
      >
        {task.text}
      </span>

      {/* ✅ Nou component MUI per la data límit */}
      <TaskDueDate
        taskId={task.id}
        dueDate={task.dueDate}
        onUpdateTaskDate={onUpdateTaskDate}
      />

      <button type="button" onClick={() => onDeleteTask(task.id)}>
        Eliminar
      </button>
    </li>
  );
};

export default TaskItem;
