import React, { useState } from 'react';

// Rep la funció per afegir la tasca (que es troba a App.js) per 'props'
const TaskForm = ({ onAddTask }) => {
  const [newTaskText, setNewTaskText] = useState(''); // Estat local per l'input

  const handleAdd = (priority = false) => {
    const text = newTaskText.trim();
    if (text === '') return;

    // Crida la funció del pare, passant-li el text i la prioritat
    onAddTask(text, priority);
    setNewTaskText(''); // Neteja l'input
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="task-form">
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Afegeix una nova tasca..."
      />
      <div className="Buttons">
        <button
          type="button"
          className="principalButton"
          onClick={() => handleAdd(false)}
        >
          Afegir
        </button>
        <button
          type="button"
          className="priorityButton"
          onClick={() => handleAdd(true)}
        >
          Tasca prioritària
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
