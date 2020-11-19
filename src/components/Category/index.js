import React from 'react';
import Item from '../utils/item';
export default function Category({ category, data }) {
  return (
    <div style={{ marginTop: '5px' }}>
      <div className="category-title">{category}</div>

      {data.map((item, i) => {
        return (
          <Item
            key={item.name}
            price={item.price}
            stocked={item.stocked}
            name={item.name}
          />
        );
      })}
    </div>
  );
}
