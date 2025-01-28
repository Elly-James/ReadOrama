import React from "react";

function Filter({ categories, onCategoriesChange }) {
  return (
    <div className="nav">
      <select
        name="filter"
        value={categories}
        onChange={(e) => onCategoriesChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Computers">Computers</option>
        <option value="China">China</option>
        <option value="History">History</option>
        <option value="Genealogy">Genealogy</option>
        <option value="BASIC (Computer program language)">BASIC *Computer program language*</option>
        
      </select>
    </div>
  );
}

export default Filter;
