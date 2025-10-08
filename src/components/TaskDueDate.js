import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { format } from 'date-fns';

// Rep l'ID, la data actual i la funció d'actualització
const TaskDueDate = ({ taskId, dueDate, onUpdateTaskDate }) => {
  // Si dueDate existeix, la parseja com a objecte Date
  const dateValue = dueDate ? new Date(dueDate) : null;

  // La funció que s'executa quan es selecciona una nova data
  const handleDateChange = (newDate) => {
    onUpdateTaskDate(taskId, newDate);
  };

  return (
    <div style={{ marginLeft: '10px' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
            label="Data límit"
            value={dateValue}
            onChange={handleDateChange}
            slotProps={{
                textField: {
                size: 'medium',             
                sx: { width: '220px' },    
                },
            }}
            />
      </LocalizationProvider>
      {/* Mostra la data formatada si existeix */}
      {dueDate && <p style={{ fontSize: '0.85em' }}>Límit: {format(dateValue, 'dd/MM/yyyy')}</p>}
    </div>
  );
};

export default TaskDueDate;
