import React from "react";

export default function Search() {
  return (
    <div className="search-container">
      <input className="search" placeholder="Search..." type="text" />
      <div>
        <input id="check" type="checkbox" />
        <label htmlFor="check">only show products in stock</label>
      </div>
    </div>
  );
}
