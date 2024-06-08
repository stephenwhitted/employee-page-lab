import React from 'react';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = ({ employees, onEmployeeSelect }) => (
  <div className="EmployeeList">
    {employees.map(employee => (
      <EmployeeListItem
        key={employee.id}
        employee={employee}
        onClick={() => onEmployeeSelect(employee)}
      />
    ))}
  </div>
);

export default EmployeeList;
