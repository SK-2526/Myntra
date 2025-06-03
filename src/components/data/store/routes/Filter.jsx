import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  return (
    <div className="filters">
      <div className="filters-header">
        <span>Filters</span>
      </div>
      <div className="filters-search">
        <span>Product Name / Brand</span>
        <input
          type="text"
          id="search"
          placeholder="Search by name or brands "
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            onFilterChange({ searchTerm: e.target.value, sortOrder });
          }}
        />
      </div>
      <div className="filters-price">
        <span>Price</span>
        <div className="high_low_filter">
          <input
            type="radio"
            name="priceSort"
            value="HightoLow"
            checked={sortOrder === 'HightoLow'}
            onChange={(e) => {
              setSortOrder(e.target.value);
              onFilterChange({ searchTerm, sortOrder: e.target.value });
            }}
          />
          <label htmlFor="HightoLow">High to Low</label>
        </div>
        <div className="high_low_filter">
          <input
            type="radio"
            name="priceSort"
            value="LowtoHigh"
            checked={sortOrder === 'LowtoHigh'}
            onChange={(e) => {
              setSortOrder(e.target.value);
              onFilterChange({ searchTerm, sortOrder: e.target.value });
            }}
          />
          <label htmlFor="LowtoHigh">Low to High</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;