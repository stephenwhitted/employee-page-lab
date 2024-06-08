import React from 'react';
import Header from './Header';

const EmployeePage = ({ employee, onBack }) => (
  <div className="ContentWrapper">
    <Header title="Employee" />
    <button className="Button" onClick={onBack}>Back</button>
    <div className="EmployeeDetails">
      <h2>{employee.name}</h2>
      <p>{employee.title}</p>
      <p>Call Office: 781-000-0002</p>
      <p>Call Mobile: 617-000-0002</p>
      <p>SMS: 617-000-0002</p>
      <p>Email: {employee.name.replace(" ", "").toLowerCase()}@fakeemail.com</p>
    </div>
  </div>
);

export default EmployeePage;
