import React from 'react';

export default function Item({ price, stocked, name }) {
  return (
    <div>
      <span className={`${stocked ? null : 'red'}`}>{name}</span>
      <span style={{ position: 'absolute', left: '115px' }}>{price}</span>
    </div>
  );
}
