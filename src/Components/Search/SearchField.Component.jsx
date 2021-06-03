// Importing Helpers
import React from "react";
import "./SearchField.Styles.css";

// Functional Component
const SearchField = ({ placeholder, handleChange }) => {
  return (
    <input
      type="search"
      placeholder="Search Monsters"
      onChange={handleChange}
      className="search-box"
    />
  );
};

// Default Export
export default SearchField;
