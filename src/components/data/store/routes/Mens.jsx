import { useSelector } from 'react-redux';
import MensItems from '../components/MensItem';
import { useState } from 'react';
import Filter from './Filter';

const Mens = () => {
  const items = useSelector((store) => store.mens);
  const [filters, setFilters] = useState({ searchTerm: '', sortOrder: '' });

  // Filter and sort items
  const filteredItems = items
    .filter((item) =>
      `${item.item_name} ${item.company}`
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (filters.sortOrder === 'HightoLow') {  // Descending (High to Low)
        return b.current_price - a.current_price;
      } else if (filters.sortOrder === 'LowtoHigh') {  //Ascending (Low to High)
        return a.current_price - b.current_price;
      }
      return 0;
    });

  return (
    <div className="products">
      <main className="main">
        <Filter onFilterChange={setFilters} />
        <div className="items-container">
          {filteredItems.map((item) => (
            <MensItems key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Mens;