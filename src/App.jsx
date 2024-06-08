import React, { useState } from 'react';
import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';
import './App.css';

export default function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employees = [
    { id: 1, name: 'James King', title: 'President and CEO' },
    { id: 2, name: 'Julie Taylor', title: 'VP of Marketing' },
    { id: 3, name: 'Eugene Lee', title: 'CFO' },
    { id: 4, name: 'John Williams', title: 'VP of Engineering' },
    { id: 5, name: 'Ray Moore', title: 'VP of Sales' },
    { id: 6, name: 'Paul Jones', title: 'QA Manager' }
  ];

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="App">
      {selectedEmployee ? (
        <EmployeePage employee={selectedEmployee} onBack={() => setSelectedEmployee(null)} />
      ) : (
        <HomePage employees={employees} onEmployeeSelect={handleEmployeeSelect} />
      )}
    </div>
  );
}
