import React from 'react';

const EmployeeListItem = ({ employee, onClick }) => (
  <div className="EmployeeListItem" onClick={onClick}>
    <div>
      <strong>{employee.name}</strong>
      <p>{employee.title}</p>
    </div>
  </div>
);

export default EmployeeListItem;
