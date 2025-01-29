
import React from 'react';
import SideBar from './SideBar';

import Shop from './Shop';
import Home from './Home';

const API_URL = "http://localhost:4000/books";
export async function getBooks() {
  try{
    const response = await fetch('${http://localhost:4000/books}/books');
    if (!response.ok) {
      throw new Error("Failed to fetch Books, Contact web owner");     
    }
    return await response.json();
  } catch(error){
    console.error("Error fetching Books" error);
    return [];
  }
}

function Filter({ onFilter, onSort}) {
  return (
    <div className="filter">
      <button onClick={() => onFilter("All")}>All Books</button>
      <button onClick={() => onFilter("Computer")}>Computers Books</button>
      <button onClick={() => onFilter("History")}>History Books</button>
      <button onClick={() => onSort("asc")}>Sort by Price (Low to High)</button>
      <button onClick={() => onSort("desc")}>Sort by Price (High to Low)</button>
    </div>
  );
}

export default Filter;
