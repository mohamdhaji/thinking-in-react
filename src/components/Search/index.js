import React from 'react';

export default function Search(props) {
  return (
    <div className="search-container">
      <input
        id="searchTerm"
        className="search"
        placeholder="Search..."
        type="text"
        value={props.searchTerm}
        onChange={props.onChange}
      />
      <div>
        <input
          id="stockedCheck"
          type="checkbox"
          checked={props.stockedCheck}
          onChange={props.onChange}
        />

        <label htmlFor="stockedCheck">only show products in stock</label>
      </div>
    </div>
  );
}
