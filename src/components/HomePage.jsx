import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';

const HomePage = ({ employees, onEmployeeSelect }) => (
  <div className="ContentWrapper">
    <Header title="Employee Directory" />
    <SearchBar />
    <EmployeeList employees={employees} onEmployeeSelect={onEmployeeSelect} />
  </div>
);

export default HomePage;
