import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Comprar pa', completed: false, priority: false, dueDate: null },
    { id: 2, text: 'Acabar informe', completed: true, priority: false, dueDate: new Date().toISOString() },
  ]);

  const handleAddTask = (text, priority = false) => {
    const task = {
      id: crypto?.randomUUID?.() ?? Date.now(),
      text,
      completed: false,
      priority,
      dueDate: null, // ✅ Nou camp
    };
    setTasks((prev) => [...prev, task]);
  };

  const handleToggleComplete = (taskId) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  // ✅ Nova funció per actualitzar només la data límit
  const handleUpdateTaskDate = (taskId, newDate) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? { ...task, dueDate: newDate ? newDate.toISOString() : null }
          : task
      )
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="app-container">
        <div className="todo-container">
          <h1>La Meva Llista de Tasques</h1>

          <TaskForm onAddTask={handleAddTask} />

          <TaskList
            tasks={tasks}
            onToggleComplete={handleToggleComplete}
            onDeleteTask={handleDeleteTask}
            onUpdateTaskDate={handleUpdateTaskDate}
          />
        </div>
      </div>
    </LocalizationProvider>
  );
}
