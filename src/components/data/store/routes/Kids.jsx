import { useSelector } from 'react-redux';
import KidsItem from '../components/KidsItem'
import { useState } from 'react';
import Filter from './Filter';

const Kids = () => {
  
    const items = useSelector((store)=> store.kids);
    const [filters, setFilters] = useState({ searchTerm: '', sortOrder: '' });
    
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
            <KidsItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Kids
