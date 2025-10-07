import { useState } from 'react';
import './App.css';

export default function App() {
  // Estat
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (priority = false) => {
    const text = newTask.trim();
    if (!text) return;

    const task = {
      id: crypto?.randomUUID?.() ?? Date.now(),
      text,
      completed: false,
      priority,
    };

    setTasks((prev) => [...prev, task]);
    setNewTask('');
  };

  const handleToggleComplete = (taskId) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  return (
    <div className="app-container">
      <div className="todo-container">
        <h1>La Meva Llista de Tasques</h1>

        <form className="task-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Afegeix una nova tasca..."
          />
          <div className="Buttons">
            <button type="button" className="principalButton" onClick={() => handleAddTask(false)}>
              Afegir
            </button>
            <button type="button" className="priorityButton" onClick={() => handleAddTask(true)}>
              Tasca prioritària
            </button> 
          </div>
        </form>
        
        <ul className="task-list">
          {tasks.map((task) => (
              <li
                key={task.id}
                className={`${task.completed ? 'completed' : ''} ${task.priority ? 'priority-task' : ''}`}
              >
              <span onClick={() => handleToggleComplete(task.id)}>
                {task.text}
              </span>
              <button type="button" onClick={() => handleDeleteTask(task.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
