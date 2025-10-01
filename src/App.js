import { useState } from 'react';
import './App.css';

export default function App() {
  // Estat
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    const text = newTask.trim();
    if (!text) return;

    const task = {
      id: (crypto?.randomUUID?.() ?? Date.now()),
      text,
      completed: false,
      priority:false,
    };

    setTasks((prev) => [...prev, task]);
    setNewTask('');
  };

    const handlePriorityAddTask = (e) => {
    e.preventDefault();
    const text = newTask.trim();
    if (!text) return;

    const task = {
      id: (crypto?.randomUUID?.() ?? Date.now()),
      text,
      completed: false,
      priority:true,
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

        <form onSubmit={handleAddTask} className="task-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Afegeix una nova tasca..."
          />
          <div className="Buttons">          
            <button type="principalButton">Afegir</button>
            <button type="priorityButton">Tasca prioritaria</button>
          </div>

        </form>
        

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
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
